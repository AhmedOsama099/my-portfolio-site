"use client";

import { FormEvent, useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import FormInput from "./FormInput";
import MessageTextarea from "./MessageTextarea";
import SubmitButton from "./SubmitButton";
import StatusMessage from "./StatusMessage";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isValidMessage, setIsValidMessage] = useState(false);

  const { isProgrammer } = useTheme();
  const { t } = useTranslation();

  const contactForm = isProgrammer
    ? {
        div1: "from-[#565FA1] to-[#EE3E54]",
        div2: "bg-[#FCE0A2]",
        div3: "bg-[#8889B9]",
        title: "text-[#565FA1]",
      }
    : {
        div1: "from-slate-300  to-fuchsia-200",
        div2: "bg-[#5a6c98]",
        div3: "bg-[#5a6c9830]",
        title: "text-[#5a6c98]",
      };

  const form = useRef<HTMLFormElement>(null);

  // Validate message whenever it changes
  useEffect(() => {
    // Check if message has at least 5 words
    const trimmedMessage = message.split(" ");
    setIsValidMessage(trimmedMessage.length >= 5);
  }, [message]);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidMessage) return;

    setError(false);
    setSuccess(false);
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
          process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY ?? "",
          }
        )
        .then(
          () => {
            setSuccess(true);
            setLoading(false);
            form.current?.reset();
            setMessage("");
          },
          () => {
            setError(true);
            setLoading(false);
          }
        );
    }
  };

  return (
    <form
      onSubmit={sendEmail}
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
        <StatusMessage type="success" message={t("contact.successMessage")} />
      )}

      {error && (
        <StatusMessage type="error" message={t("contact.sendErrorMessage")} />
      )}
    </form>
  );
};

export default ContactForm;
