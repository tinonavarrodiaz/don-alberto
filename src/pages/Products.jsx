
import Banner from '../components/Banner'
import Knowledge from "./section/products/Knowledge"
import ProductsSection from "./section/products/Products"
import campo from "../img/campo.jpg"
const Products = () => {
  return(
    <>
      <Banner img={campo}/>
      <ProductsSection/>
      <Knowledge/>
    </>
  )
}

export default Products