import agave from "../../../img/agave.jpg"

const Knowledge = () =>(
  <section className="section production knowledge">
    <article className="production__grid">
      <img src={agave} alt="production" data-aos="fade-left"/>
      <div className="production__text" data-aos="fade-right">
        <h2 className="section__title" >The Knowledge</h2>
        <div className="section__text">
          Every product is made with 100% Agave, using only Natural Spring Water. Our main source for cooking is Stone/Direct Fire and extracted with Tahona and Roller Mill. The flavors are consequence of raditional processes, which we proudly perform on every step of the way. Welcome to the Don Alberto Experience.
        </div>
      </div>
    </article>
  </section>
)

export default Knowledge