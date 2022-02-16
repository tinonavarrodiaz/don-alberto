import products from "../../../Helpers/Products"
const Products = ()=> (
  <section className={'section products-home bg-white'}>
    <article className={'products-home__artitle'}>
      <h2 className={'section__title t30 mb-[2rem] lg:mb-[11.5177vh]'} data-aos="fade-right">DISCOVER A NEW ADVENTURE</h2>
      <div className="products-home__grid">
        {
          products.map((el,i)=>(
            <figure key={i} className="products-home__item" data-aos="zoom-in-right" data-aos-delay={i*150}>
              <img src={el.img} alt={`${el.name} Bottle`}/>
              <figcaption className="font-bold">{el.name}</figcaption>
              <p>{el.description}</p>  
            </figure>
          ))
        }
      </div>
    </article>
  </section>
)

export default Products