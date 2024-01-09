import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Verifica se o código está sendo executado no navegador antes de importar o Bootstrap JS
if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap.bundle.min.js');
}

export default function Home() {
  return (
    <div>
      {/* CORPO */}
      <div className="p-1 p-md-1 mb-1 text-white rounded bd-navbar " >
        <div className="col-md-12 px-0">
          <h1 className="display-4 fst-italic">
            Aqui você encontra as melhores ofertas de viagens...
          </h1>
        </div>
        <aside>
          {/* Carousel */}
          <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0} className="" aria-label="Slide1" />
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide2" className="active" aria-current="true" />
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={2} aria-label="Slide 3"
                className="" />
            </div>
            <div className="carousel-inner">
              {/* Primeiro slide */}
              <div className="carousel-item carousel-item-start active">
                <img src="/img/flor-3.jpg" alt="Promoções imperdíveis!" width="100%" height="100%" />
                <div className="container">
                  <div className="carousel-caption text-white text-start">
                    <h1>Promoções imperdíveis!</h1>
                    <p className="opacity-75">Florianópolis</p>
                    <p>
                      <a className="btn btn-lg btn-primary" href="/reserva/add-reserva"> Realize Reserva </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* Segundo slide */}
              <div>
                <div className="carousel-item carousel-item-next carousel-item-start">
                  <img src="./img/rj1.jpg" alt="Promoções imperdíveis!" width="100%" height="100%" />
                  <div className="container">
                    <div className="carousel-caption text-white">
                      <h1>Promoções imperdíveis!</h1>
                      <p className="opacity-75">Rio de janeiro</p>
                      <p>
                        <a className="btn btn-lg btn-primary" href="/reserva/add-reserva"> Realize Reserva </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Terceiro slide */}
              <div className="carousel-item">
                <img src="./img/ssa-1.jpg" alt="Promoções imperdíveis!" width="100%" height="100%" />
                <div className="container">
                  <div className="carousel-caption text-white text-end">
                    <h1>Promoções imperdíveis!</h1>
                    <p className="opacity-75"> Salvador</p>
                    <p></p>
                    <p>
                      <a className="btn btn-lg btn-primary" href="/reserva/add-reserva">Realize Reserva </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Voltar</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Avançar</span>
            </button>
          </div>
        </aside>
      </div>
    </div>

  );
}
