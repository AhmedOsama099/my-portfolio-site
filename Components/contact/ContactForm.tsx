"use client";

import { FormEvent, useRef, useState, useEffect } from "react";
import FormInput from "./FormInput";
import MessageTextarea from "./MessageTextarea";
import SubmitButton from "./SubmitButton";
import StatusMessage from "./StatusMessage";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isValidMessage, setIsValidMessage] = useState(false);

  const { t } = useTranslation();

  const contactForm = {
    div1: "from-[#565FA1] to-[#EE3E54]",
    div2: "bg-[#FCE0A2]",
    div3: "bg-[#8889B9]",
    title: "text-[#565FA1]",
  };

  const form = useRef<HTMLFormElement>(null);

  // Validate message whenever it changes
  useEffect(() => {
    // Check if message has at least 5 words
    const trimmedMessage = message.trim().split(/\s+/).filter(Boolean);
    setIsValidMessage(trimmedMessage.length >= 5);
  }, [message]);

  const sendNotification = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidMessage) return;

    setError(false);
    setSuccess(false);
    setLoading(true);

    if (form.current) {
      const formData = new FormData(form.current);
      const userEmail = (formData.get("user_email") as string) || "";
      const userName = (formData.get("user_name") as string) || "Visitor";

      try {
        const res = await fetch("/api/comments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            articleType: "contact",
            articleId: "direct-contact",
            articleTitle: "Direct Contact Inquiry",
            pagePath: "/contact",
            authorName: userName,
            authorEmail: userEmail,
            content: message.trim(),
          }),
        });

        const data = await res.json();
        if (res.ok && data.success) {
          setSuccess(true);
          setLoading(false);
          form.current?.reset();
          setMessage("");
        } else {
          setError(true);
          setLoading(false);
        }
      } catch (err) {
        console.error("Failed to post contact notification:", err);
        setError(true);
        setLoading(false);
      }
    }
  };

  return (
    <form
      onSubmit={sendNotification}
      ref={form}
      className="w-full max-w-md lg:max-w-xl bg-white rounded-2xl shadow-lg p-8 lg:p-10 relative overflow-hidden"
    >
      <div
        className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${contactForm.div1}`}
      ></div>
      <div
        className={`absolute -top-10 -right-10 w-20 h-20 rounded-full ${contactForm.div2} opacity-50`}
      ></div>
      <div
        className={`absolute -bottom-10 -left-10 w-20 h-20 rounded-full ${contactForm.div3} opacity-50`}
      ></div>

      <h2
        className={`text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 ${contactForm.title}`}
      >
        {t("contact.getInTouch")}
      </h2>

      <MessageTextarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        isValid={isValidMessage}
      />

      <FormInput
        label={t("contact.yourEmail")}
        name="user_email"
        type="email"
        placeholder="email@example.com"
        required
      />

      <FormInput
        label={t("contact.yourName")}
        name="user_name"
        placeholder={t("contact.yourNamePlaceholder")}
      />

      <SubmitButton
        isDisabled={!isValidMessage || loading}
        isLoading={loading}
      />

      {success && (
        <div className="pt-2">
          <StatusMessage
            type="success"
            message={t("contact.successMessage") || "Your message has been sent successfully! Thank you for reaching out."}
          />
        </div>
      )}

      {error && (
        <StatusMessage type="error" message={t("contact.sendErrorMessage")} />
      )}
    </form>
  );
};

export default ContactForm;
