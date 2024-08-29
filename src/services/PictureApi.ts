// import { IAsteroide, IGeneric } from "../domain/imgDay";
import { GenericApi } from "./GenericApi";

export const PictureApi = () => {
  const { getApi } =  GenericApi();

  const getPicture = async () => {
   const data = await getApi("https://api.nasa.gov/planetary/apod")
   return data

  }

  
  return {
    getPicture,
    

  }
}
