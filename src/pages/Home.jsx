import Slider from "./section/home/Slider"
import Tradition from "./section/home/Tradition"
import Products from "./section/home/Products"
import Journey from "./section/home/Journey"

import slider1 from "../img/slider/slider1.jpg"
import slider2 from "../img/slider/slider2.jpg"
import slider3 from "../img/slider/slider3.jpg"
const Home = ()=>{
  return (
    <>
      <Slider images={[slider1,slider2,slider3]}/>
      <Tradition/>
      <Products/>
      <Journey/>
    </>
  )
}

export default Home