export const ArticleStudents = () => {
  return (
    <>
      <br />
      <hr />
      <h1 className="text-4xl font-bold m-1 " id="School Students">
        School Students
      </h1>
      <div className="grid grid-cols-[1fr_1fr_1fr]  gap-2 mx-3  ">
        <div className="card">
          <img src="/images.jpeg" alt="Space Place" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title text-base font-semibold tracking-wide">
              NASA Kids Science
            </h5>
            <p className="card-text pb-2 leading-6">
              NASA Kids Science está actualmente en desarrollo. Será el hogar de
              todos los juegos, videos, artículos y actividades de ciencia de la
              NASA para niños. ¡Mantente atento para más información! Mientras
              tanto, explora la selección actual de divertidos sitios web de
              ciencia de la NASA para niños.
            </p>
            <div className="galaxy-button">
              <a href="https://science.nasa.gov/kids/" target="blank">
                <button className="space-button">
                  <span className="backdrop"></span>
                  <span className="galaxy"></span>
                  <label className="text">Space</label>
                </button>
              </a>
              <div className="bodydrop"></div>
            </div>
          </div>
        </div>

        <div className="card">
          <img src="/images.jpeg" alt="Space Place" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title text-base font-semibold tracking-wide">
              NASA Kids Science
            </h5>
            <p className="card-text pb-2 leading-6">
              NASA Kids Science está actualmente en desarrollo. Será el hogar de
              todos los juegos, videos, artículos y actividades de ciencia de la
              NASA para niños. ¡Mantente atento para más información! Mientras
              tanto, explora la selección actual de divertidos sitios web de
              ciencia de la NASA para niños.
            </p>
            <div className="galaxy-button">
              <a href="https://science.nasa.gov/kids/" target="blank">
                <button className="space-button">
                  <span className="backdrop"></span>
                  <span className="galaxy"></span>
                  <label className="text">Space</label>
                </button>
              </a>
              <div className="bodydrop"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
