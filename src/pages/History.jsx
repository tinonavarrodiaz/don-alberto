import Heritage from "./section/history/Heritage";
import Production from "./section/history/Production";
import Banner from "../components/Banner"
import Feature from "./section/history/Features"
import landscape from "../img/landscape.jpg"


const History = () => {
  return (
    <>
      <Heritage/>
      <Production/>
      <Banner img={landscape} alt={'Agave'}/>
      <Feature/>
    </>
  )
}

export default History