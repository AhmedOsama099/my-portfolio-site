"use client";

import MotionPageWrapper from "@/Components/motionPageWrapper";
import { motion } from "framer-motion";
import { FormEvent, useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isValidMessage, setIsValidMessage] = useState(false);
  const text = "Say Hello";

  const form = useRef<HTMLFormElement>(null);

  // Validate message whenever it changes
  useEffect(() => {
    // Check if message is not empty, not just whitespace, and at least 10 characters
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
    <MotionPageWrapper>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center">
          <div className="relative">
            <motion.div
              className="text-6xl md:text-7xl font-bold text-[#565FA1]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0.3 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="absolute -bottom-6 left-0 w-1/2 h-1 bg-[#EE3E54]"
              initial={{ width: 0 }}
              animate={{ width: "50%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.div
              className="mt-12 text-lg text-gray-600 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              I&apos;m always interested in hearing about new projects and
              opportunities.
            </motion.div>
          </div>
        </div>

        {/* FORM CONTAINER */}
        <motion.div
          className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center py-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <form
            onSubmit={sendEmail}
            ref={form}
            className="w-full max-w-md lg:max-w-xl bg-white rounded-2xl shadow-lg p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#565FA1] to-[#EE3E54]"></div>
            <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-[#FCE0A2] opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full bg-[#8889B9] opacity-50"></div>

            <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-[#565FA1]">
              Get in Touch
            </h2>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                rows={5}
                className={`w-full px-3 py-2 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#565FA1] focus:border-transparent transition-all resize-none ${
                  message.trim() !== "" && !isValidMessage
                    ? "border-red-300"
                    : "border-gray-200"
                }`}
                name="user_message"
                placeholder="I'd like to discuss a project..."
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {message.trim() !== "" && !isValidMessage && (
                <p className="mt-1 text-xs text-red-500">
                  Message must be at least 5 words long
                </p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                name="user_email"
                type="email"
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#565FA1] focus:border-transparent transition-all"
                placeholder="email@example.com"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                name="user_name"
                type="text"
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#565FA1] focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

            <button
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all ${
                !isValidMessage || loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#565FA1] hover:bg-[#4A5290] active:transform active:scale-[0.98]"
              }`}
              disabled={!isValidMessage || loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>

            {success && (
              <motion.div
                className="mt-4 p-3 bg-green-50 border border-green-100 text-green-600 rounded-lg text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Your message has been sent successfully! I&apos;ll get back to
                you soon.
              </motion.div>
            )}

            {error && (
              <motion.div
                className="mt-4 p-3 bg-red-50 border border-red-100 text-red-600 rounded-lg text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Something went wrong! Please try again later.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </MotionPageWrapper>
  );
};

export default ContactPage;
