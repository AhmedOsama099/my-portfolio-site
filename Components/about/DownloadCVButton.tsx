import { motion } from "framer-motion";

const DownloadCVButton = () => {
  return (
    <motion.div
      className="fixed z-50 md:bottom-8 md:right-8 bottom-6 right-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <a
        href="/docs/Ahmed-El-Daoushy-Senior-Front-End-Resume.pdf"
        download="Ahmed-Osama-Resume.pdf"
        className="button-glitch"
        role="button"
      >
        Resume
      </a>

      <style jsx>{`
        .button-glitch,
        .button-glitch:after {
          width: 120px;
          height: 45px;
          line-height: 45px;
          font-size: 16px;
          background: linear-gradient(45deg, transparent 5%, #ee3e54 5%);
          border: 0;
          color: #fff;
          letter-spacing: 2px;
          box-shadow: 6px 0px 0px #565fa1;
          outline: transparent;
          position: relative;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          font-weight: 600;
          text-align: center;
          display: block;
          border-radius: 10px;
        }

        .button-glitch:after {
          --slice-0: inset(50% 50% 50% 50%);
          --slice-1: inset(80% -6px 0 0);
          --slice-2: inset(50% -6px 30% 0);
          --slice-3: inset(10% -6px 85% 0);
          --slice-4: inset(40% -6px 43% 0);
          --slice-5: inset(80% -6px 5% 0);

          content: "Resume";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            transparent 3%,
            #fce0a2 3%,
            #fce0a2 5%,
            #ee3e54 5%
          );
          text-shadow: -2px -2px 0px #8889b9, 2px 2px 0px #fce0a2;
          clip-path: var(--slice-0);
          border-radius: 10px;
        }

        .button-glitch:hover:after {
          animation: 1s glitch;
          animation-timing-function: steps(2, end);
        }

        @keyframes glitch {
          0% {
            clip-path: var(--slice-1);
            transform: translate(-10px, -5px);
          }
          10% {
            clip-path: var(--slice-3);
            transform: translate(5px, 5px);
          }
          20% {
            clip-path: var(--slice-1);
            transform: translate(-5px, 5px);
          }
          30% {
            clip-path: var(--slice-3);
            transform: translate(0px, 3px);
          }
          40% {
            clip-path: var(--slice-2);
            transform: translate(-3px, 0px);
          }
          50% {
            clip-path: var(--slice-3);
            transform: translate(3px, 0px);
          }
          60% {
            clip-path: var(--slice-4);
            transform: translate(3px, 5px);
          }
          70% {
            clip-path: var(--slice-2);
            transform: translate(-5px, 5px);
          }
          80% {
            clip-path: var(--slice-5);
            transform: translate(10px, -5px);
          }
          90% {
            clip-path: var(--slice-1);
            transform: translate(-5px, 0px);
          }
          100% {
            clip-path: var(--slice-1);
            transform: translate(0);
          }
        }

        @media (min-width: 768px) {
          .button-glitch,
          .button-glitch:after {
            width: 140px;
            height: 55px;
            line-height: 55px;
            font-size: 20px;
            border-radius: 12px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default DownloadCVButton;
