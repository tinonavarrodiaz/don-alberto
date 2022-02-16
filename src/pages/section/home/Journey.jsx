import {Link} from "react-router-dom";
import home from "../../../img/home.jpg"

const Journey = ()=>(
  <section className="section journey">
    <article className="journey__grid">
      <img src={home} alt="Our Home" data-aos="zoom-in-left"/>
      <div className="journey__text" >
        <h2 className="section__title" data-aos="fade-right">The Journey has just<br/>begun.</h2>
        <p className="font-title text-[18px]" data-aos="fade-right">
          <Link to="/where-to-buy">FIND A SALES LOCATION</Link>
        </p>
      </div>
    </article>
  </section>
)

export default Journey