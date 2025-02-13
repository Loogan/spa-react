import "./App.css";
import logoPlay from "./assets/img/logo-play.png";
import bgImg from "./assets/img/bg.jpg";

function Body() {
  return (
    <>
      <section className="container slogan">
        <div className="text">
          <h1>
            Inspiring <br /> Designs for <br /> Inspired Living
          </h1>
          <p>
            Bringing your ideas to life through bold creativity, innovative
            designs, and limitless imagination vibrant realities with inspired
            designs.
          </p>
          <div className="buttons">
            <button id="bt-trial">7 Days Free Trial</button>
            <button id="bt-demo">View Demo</button>
          </div>
        </div>
        <div className="img">
          <img src={logoPlay} alt="Isso é uma imagem" />
          <h4>Powered by: Rafael Gonzaga</h4>
        </div>
      </section>

      <section className="content" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="content-2 container">
          <div className="img-2">
            <img src={logoPlay} alt="Isso é uma imagem" />
            <h4>Powered by: Rafael Gonzaga</h4>
          </div>
          <div className="text-2">
            <h1>
              Inspiring <br /> Designs for <br /> Inspired Living
            </h1>
            <p>
              Bringing your ideas to life through bold creativity, innovative
              designs, and limitless imagination vibrant realities with inspired
              designs.
            </p>
            <div className="buttons buttons-2">
              <button id="bt-trial">7 Days Free Trial</button>
              <button id="bt-demo">View Demo</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Body;
