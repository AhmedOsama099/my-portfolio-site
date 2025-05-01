"use client";

import MotionPageWrapper from "@/Components/motionPageWrapper";
import ContactForm from "@/Components/contact/ContactForm";
import AnimatedHeading from "@/Components/contact/AnimatedHeading";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { isProgrammer } = useTheme();
  const { t } = useTranslation();

  const contactColors = isProgrammer
    ? {
        underline: "#EE3E54",
      }
    : {
        underline: "#5a6c98",
      };

  return (
    <MotionPageWrapper>
      <div className="h-full  flex gap-48 lg:gap-0 flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center">
          <div className="relative">
            <AnimatedHeading text={t("contact.sayHello")} />
            <motion.div
              className="absolute -bottom-6 start-0 w-1/2 h-1"
              style={{ backgroundColor: contactColors.underline }}
              initial={{ width: 0 }}
              animate={{ width: "50%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.div
              className="mt-12 text-lg max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {t("contact.desc")}
            </motion.div>
          </div>
        </div>

        {/* FORM CONTAINER */}
        <motion.div
          className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center py-8 "
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </MotionPageWrapper>
  );
};

export default ContactPage;
