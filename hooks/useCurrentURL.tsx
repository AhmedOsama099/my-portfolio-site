import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useCurrentURL = () => {
  const [currentURL, setCurrentUrl] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const arr = pathname.split("/");
    setCurrentUrl(arr.pop() ?? "");
  }, [pathname]);

  return { currentURL };
};
