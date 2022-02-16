import {Link} from "react-router-dom";
import tradition from "../../../img/tradition.jpg"
import { AOS } from 'aos';

const Tradition = () => (
  <section className={'section tradition'}>
    <article className={'tradition__artitle'}>
      <img src={tradition} alt="Tradition" data-aos="fade-right"/>
      <div className="tradition_text" data-aos="fade-left">
        <h2 className={'section__title mb-[2rem] lg:mb-[6.459vh]'}>Decades of Tradition</h2>
        <p className={'section__text'}>
          Don Alberto is synonym of years of experience. Generation after generation, we create the best tequilas and mezcal. Every drop contains decades of tradition, knowledge and a continous search for improvement to satisfy our clients. Our sales continue expanding worldwide, as our goal is to invite and share to everyone this unique Mexican Heritage that we proudly carry in ur hearts and soul. From the beginning on the agave fields, passing through our ovens and ending on your table, on Alberto is the materialization of a lifetime.
        </p>
        <p className="text-right"><Link to="/history">See more...</Link></p>
      </div>
    </article>
  </section>
)

export default Tradition