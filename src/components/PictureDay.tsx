import { useEffect } from "react";
import { PictureApi } from "../services/PictureApi";

export const PictureDay = () => {
  const { getPicture } = PictureApi();

  useEffect(() => {
    getPicture();
  }, []);

  return <></>;
};
