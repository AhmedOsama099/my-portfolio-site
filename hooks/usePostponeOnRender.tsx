import { useEffect, useState } from "react";
import { useAppTranslation } from "./useAppTranslation";

export const usePostponeOnRender = () => {
  const [is50MSAfterRender, setIs50MSAfterRender] = useState(false);
  const { isLTR } = useAppTranslation();

  useEffect(() => {
    setTimeout(() => {
      setIs50MSAfterRender(true);
    }, 50);

    return () => {
      setIs50MSAfterRender(false);
    };
  }, [isLTR]);

  useEffect(() => {
    setTimeout(() => {
      setIs50MSAfterRender(true);
    }, 50);

    return () => {
      setIs50MSAfterRender(false);
    };
  }, []);

  return { is50MSAfterRender };
};
