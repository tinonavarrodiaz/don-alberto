import products from "../../../Helpers/Products"
const ProductsSection = () => (
  <section className="products">
    <article className="products__grid">
      {
        products.map((item,i)=>(
          <div key={i}className="products__item">
            <img src={item.img} alt=""/>
            <div className="products__text">
              <h3>{item.name}</h3>
              <div>
                <p><span>Color: </span>{item.color}</p>
                <p><span>Aroma: </span>{item.aroma}</p>
                <p><span>Taste: </span>{item.taste}</p>
              </div>
            </div>
          </div>
        ))
      }
    </article>
  </section>
)

export default ProductsSection
