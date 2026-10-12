import { ToggleButtonProps } from "@/types/techBlog";

export default function ToggleButton({
  isNavOpen,
  isMobile,
  handleToggleNav,
}: ToggleButtonProps) {
  // On mobile when navigation is open, the close button is inside SideNavHeader,
  // so hide the floating button so it doesn't overlap the parent icon rail.
  const isHiddenOnMobile = isNavOpen && isMobile;

  return (
    <button
      onClick={() => handleToggleNav()}
      className={`fixed top-32 z-[70] p-3 bg-blue-600 text-white shadow-xl hover:bg-blue-700 transition-all duration-300 ${
        isHiddenOnMobile ? "hidden" : "flex"
      } ${
        isNavOpen && !isMobile
          ? "start-[29rem] rounded-xl"
          : "start-0 rounded-e-lg"
      }`}
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
