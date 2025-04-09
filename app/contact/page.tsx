"use client";

import MotionPageWrapper from "@/Components/motionPageWrapper";
import ContactForm from "@/Components/contact/ContactForm";
import AnimatedHeading from "@/Components/contact/AnimatedHeading";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <MotionPageWrapper>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center">
          <div className="relative">
            <AnimatedHeading text="Say Hello" />
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
          <ContactForm />
        </motion.div>
      </div>
    </MotionPageWrapper>
  );
};

export default ContactPage;
