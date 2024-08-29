import { useEffect, useState } from "react";
import { PictureApi } from "../services/PictureApi";

export const PictureDay = () => {
  const { getPicture } = PictureApi();

  const [picture, setPicture] = useState();

  useEffect(() => {
    const pictureData = async () => {
      try {
        const data = await getPicture();
        if (data && data.data.url) {
          setPicture(data.data.url);
          // console.log(data.url);
        }
      } catch (error) {
        console.log(error);
      }
    };

    pictureData();
  }, []);

  return (
    <>
      <div className="w-full   ">
        <h2 className="text-4xl text-center leading-[50px] font-bold  my-3">
          Picture Of The Day
        </h2>

        {picture ? (
          <img src={picture} className="center w-full "></img>
        ) : (
          <p>Cargando imagen...</p> // Mensaje mientras carga el video
        )}
      </div>
    </>
  );
};
