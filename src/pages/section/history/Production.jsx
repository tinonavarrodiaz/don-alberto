import production from '../../../img/production.jpg'

const Production = () => (
  <section className="section production">
    <article className="production__grid">
      <div className="production__text" data-aos="fade-right">
        <h2 className="section__title" >Production</h2>
        <div className="section__text">
          Our tequila is born in El Arenal, Jalisco. Beautiful Mexican land and birthplace of the blue agave. Produced at Tequilera Puerta de Hierro, one of the most recognized distilleries of the region and located a few miles from the city of Guadalajara, just at the entrance of the world famous Paisaje Agavero.
        </div>
      </div>
      <img src={production} alt="production" data-aos="fade-left"/>
    </article>
  </section>
)

export default Production