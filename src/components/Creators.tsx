import { CardsCreators } from "./helpers/CardsCreators";
export const Creators = () => {
  return (
    <>
      <br />
      <hr />
      <h3 className="mt-3 text-4xl font-bold text-center">Creators </h3>
      <div className="grid  my-2 mx-2 ">
        <CardsCreators />
      </div>
    </>
  );
};
