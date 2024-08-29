export const ArticlesResearches = () => {
  return (
    <>
      <br />
      <hr />
      <h1 className="text-4xl font-bold m-1 " id="Researches">
        Researches
      </h1>
      <div className="grid grid-cols-[1fr_2fr]  gap-2 mx-3  ">
        <div className="card">
          <img
            src="/download.jpeg"
            alt="Space Place"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title text-base font-semibold tracking-wide">
              Turismo Espacial
            </h5>
            <p className="card-text pb-2 leading-6">
              El turismo espacial comenzó en 2001 con Dennis Tito, quien
              financió su propio viaje a la Estación Espacial Internacional
              (EEI) a bordo de una nave Soyuz, pagando aproximadamente 20
              millones de dólares. Virgin Galactic (2018) destaca que los vuelos
              espaciales no solo expanden nuestro conocimiento científico, sino
              que también ofrecen nuevas perspectivas sobre la humanidad y
              nuestras divisiones.
            </p>
            <div className="galaxy-button">
              <a
                href="https://ojs.europubpublications.com/ojs/index.php/ced/article/view/4422/3398  "
                target="blank"
              >
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
