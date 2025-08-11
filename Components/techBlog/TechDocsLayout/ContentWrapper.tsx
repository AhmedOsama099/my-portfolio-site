import { ContentWrapperProps } from "@/types/techBlog";

export default function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <main className="flex-1 flex flex-col overflow-hidden transition-[margin] duration-300 ease-in-out">
      <div className="p-6 md:p-8 lg:p-12 h-full">{children}</div>
    </main>
  );
}
