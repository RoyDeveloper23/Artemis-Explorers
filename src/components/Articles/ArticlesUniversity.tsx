export const ArticlesUniversity = () => {
  return (
    <>
      <br />
      <hr />
      <h1 className="text-4xl font-bold m-1 " id="University Students">
        University Students
      </h1>
      <div className="grid grid-cols-[1fr_2fr]  gap-2 mx-3  ">
        <div className="card">
          <img src="/Artemis.jpg" alt="Space Place" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title text-base font-semibold tracking-wide">
              Artemis II
            </h5>
            <p className="card-text pb-2 leading-6">
              La misión Artemis II de la NASA llevará a los astronautas a la
              primera estación espacial lunar, llamada Gateway, que orbitará
              alrededor de la Luna. Esta estación servirá como plataforma para
              realizar investigaciones científicas, vivir y trabajar en el
              espacio, y prepararse para futuras misiones a Marte. Durante
              Artemis IV, la tripulación activará el hardware de la estación,
              realizarán caminatas lunares, y recogerán muestras científicas. La
              NASA busca establecer una presencia lunar a largo plazo para
              avanzar en la exploración del espacio profundo, con el objetivo de
              llegar a Marte.
            </p>
            <div className="galaxy-button">
              <a
                href="https://www.nasa.gov/general/nasas-artemis-iv-building-first-lunar-space-station/ "
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
