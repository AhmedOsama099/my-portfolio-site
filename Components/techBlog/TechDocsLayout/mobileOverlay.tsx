import { MobileOverlayProps } from "@/types/techBlog";

export default function MobileOverlay({ handleToggleNav }: MobileOverlayProps) {
  return (
    <div
      className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleToggleNav}
    />
  );
}
