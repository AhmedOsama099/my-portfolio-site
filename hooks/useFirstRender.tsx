import { useEffect, useState } from "react";

export const useFirstRender = () => {
  const [is50MSAfterFirstRender, setIs50MSAfterFirstRender] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIs50MSAfterFirstRender(true);
    }, 50);
  }, []);

  return { is50MSAfterFirstRender };
};
