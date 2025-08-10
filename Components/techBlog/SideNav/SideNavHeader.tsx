import { SideNavProps } from "@/types/techBlog";

export default function SideNavHeader({ handleToggleNav }: Pick<SideNavProps, 'handleToggleNav'>) {
  return (
    <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div>
        <h2 className="text-xl font-bold text-gray-800">Documentation</h2>
        <p className="text-sm text-gray-600 mt-1">Navigate through topics</p>
      </div>
      <button
        onClick={handleToggleNav}
        className="p-2 rounded-lg hover:bg-white/80 transition-colors duration-200 md:hidden"
        aria-label="Close navigation"
      >
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}