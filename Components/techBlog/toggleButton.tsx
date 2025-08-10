import { ToggleButtonProps } from "@/types/techBlog";

export default function ToggleButton({
  isNavOpen,
  isMobile,
  handleToggleNav,
}: ToggleButtonProps) {
  return (
    <button
      onClick={() => handleToggleNav()}
      className={`fixed top-4 z-50 p-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition
       ${isNavOpen && !isMobile ? "start-[19rem]" : "start-[1rem]"} 

        `}
      aria-label="Toggle navigation"
    >
      <svg
        className={`w-5 h-5 transition-transform duration-300 ${
          isNavOpen ? "rotate-90" : "rotate-0"
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {isNavOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  );
}
