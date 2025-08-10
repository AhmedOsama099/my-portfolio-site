import { SectionProps } from "@/types/techBlog";

export default function SideNavSection({
  title,
  items,
  color,
  activeIndex,
  isMobile,
  handleChangeNavState,
}: SectionProps) {
  return (
    <div className="mb-6">
      <h3 className="px-3 mb-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        {title}
      </h3>
      {items.map((item, index) => (
        <a
          key={item.id}
          href={item.href}
          className={`block px-4 py-3 text-sm text-gray-700 rounded-lg hover:bg-${color}-50 hover:text-${color}-700 hover:border-l-4 hover:border-${color}-500 transition-all duration-300 transform hover:translate-x-1 ${
            activeIndex === index
              ? `bg-${color}-50 text-${color}-700 border-l-4 border-${color}-500`
              : ""
          }`}
          onClick={() => {
            if (isMobile) handleChangeNavState(false);
          }}
        >
          <div className="flex items-center">
            <span className={`mr-3 text-${color}-500`}>•</span>
            {item.title}
          </div>
        </a>
      ))}
    </div>
  );
}
