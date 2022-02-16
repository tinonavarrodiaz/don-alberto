import tequilero from "../../../img/tequilero.jpg"
import signature from "../../../img/firma.png"

const Heritage = () =>(
  <section className="section heritage">
    <img src={tequilero} alt="Maestro Tequilero" className="heritage__tequilero" data-aos="fade-right"/>
    <div className="heritage__text" data-aos="zoom-in">
      <h2 className="section__title">The Heritage</h2>
      <p className="section__text">Alberto Partida Rivera name of the grandfather of our Maestro Tequilero Alberto Partida Hermosillo. He was the one who started in this beautiful tradition of tequila. In his honor, we created the name Gran Reserva de Don Alberto, as a sincere tribute to his teaching and also as a symbol of respect and gratitude.</p>
    </div>
    <img src={signature} alt="Signature Maestro Tequilero" className="heritage__signature" data-aos-offset="-500" data-aos="fade-left"/>
  </section>
)

export default Heritage