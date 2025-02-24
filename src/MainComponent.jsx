import './MainComponent.css';
import aeroporto from "./assets/aeroporto.webp";
import immagine2 from "./assets/aeroporto2.webp";

function MainComponent() {
  return (
    <>
      <main className="air-station-main">
        <section className="hero-section">
          <div className="background">
            <h1 id='main-text'>Benvenuti su Fly Scanner</h1>
          </div>
        </section>
        <div className='midSection'>
          <div className='card'>
            <p className='middle-content-text'>
              Nata nel 2006, Fly Scanner è nata con un obbiettivo ben preciso: rendere i viaggi 
              accessibili ed indimenticabili.
            </p>
          </div>
          <img className='immagineStile' src={aeroporto} alt="Logo di Fly Scanner" />
        </div>
      </main>
      <div className='section2'>
        <img className='immagineStile2' src={immagine2} alt="" />
        <p className='middle-content-text2'>
          Dal 2006, Fly Scanner ha ridefinito l'esperienza di viaggio, rivoluzionando il modo in cui le persone volano. 
          Con un'attenzione costante al comfort, 
          all'efficienza e alla convenienza, ci impegniamo a rendere ogni viaggio un'esperienza unica e senza stress.
        </p>
      </div>
    </>
  );
}

export default MainComponent;