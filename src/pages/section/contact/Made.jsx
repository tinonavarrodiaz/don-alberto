import bottle from '../../../img/bottle.jpg'

const Made = ()=> (
  <section className='section made'>
    <article className="made__grid">
      <div className="made__text">
        <h2>Made at Tequilera Puerta de Hierro.</h2>
        <p>
          Km. 32 Carretera Guadalajara-Nogales <br/>
          Postal Code 45350 
          El Arenal<br/>
          Jalisco, México.<br/>
          Phone: +52 374 748 1095
        </p>
      </div>
      <img src={bottle} alt="Made at Tequilera Puerta de Hierro"/>
    </article>
  </section>
)

export default Made