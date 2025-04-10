import Link from "next/link";

const ContactCTA = () => {
  return (
    <div className="relative z-10 py-24 bg-gradient-to-r from-[#565FA1] to-[#EE3E54] text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to bring your ideas to life?
        </h2>
        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
          I&apos;m always open to discussing new projects, creative ideas or
          opportunities to be part of your vision.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-white text-[#565FA1] rounded-full font-medium hover:bg-gray-100 transition-all hover:shadow-lg"
        >
          Let&apos;s Connect
        </Link>
      </div>
    </div>
  );
};

export default ContactCTA;
