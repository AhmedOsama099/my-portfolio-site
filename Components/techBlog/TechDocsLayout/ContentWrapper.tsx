import { ContentWrapperProps } from "@/types/techBlog";

export default function ContentWrapper({
  children,
  isNavOpen,
  isMobile,
}: ContentWrapperProps) {
  return (
    <main
      className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
        isNavOpen && !isMobile ? "ms-[29rem]" : "ms-0"
      }`}
    >
      <div className="p-6 md:p-8 lg:p-12 h-full">{children}</div>
    </main>
  );
}
