import { ContentWrapperProps } from "@/types/techBlog";

export default function ContentWrapper({
  children,
  isMobile,
  isNavOpen,
}: ContentWrapperProps) {
  return (
    <main
      className="flex-1 flex flex-col overflow-hidden transition-[margin] duration-300 ease-in-out"
      style={{ marginLeft: isNavOpen && !isMobile ? "18rem" : "0rem" }}
    >
      <div className="p-6 md:p-8 lg:p-12 h-full">{children}</div>
    </main>
  );
}
