import {NavLink} from "react-router-dom";
import Hamburger from "../Helpers/Hamburger";
import title from "../img/title-page.svg"
const Header = ()=> {
  return(
    <header className="main-header bg-bg relative">
        <h1 className="p-absolute hidden opacity-0">Don Alberto</h1>
        <nav className="main-nav w-[100%] bg-bg lg:w-[85%] lg:h-[70px] ml-[auto] mr-[auto] absolute lg:relative top-[100px] lg:top-0 z-50">
          <ul className="main-menu text-[#333] text-[20px] font-bold h-[100%] ml-auto mr-auto lg:max-w-[750px] lg:mb-[1rem] font-title flex flex-col lg:flex-row justify-between items-center uppercase">
            <li className="leading-[2em] lg:leading-4"><NavLink className={({isActive}) => isActive ? "text-[#000]" : "" } to="/">Home</NavLink></li>
            <li className="leading-[2em] lg:leading-4"><NavLink className={({isActive}) => isActive ? "text-[#000]" : "" } to="/history">History</NavLink></li>
            <li className="leading-[2em] lg:leading-4"><NavLink className={({isActive}) => isActive ? "text-[#000]" : "" } to="/our-products">Our Products</NavLink></li>
            <li className="leading-[2em] lg:leading-4"><NavLink className={({isActive}) => isActive ? "text-[#000]" : "" } to="/where-to-buy">Where to buy</NavLink></li>
            <li className="leading-[2em] lg:leading-4"><NavLink className={({isActive}) => isActive ? "text-[#000]" : "" } to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
        <div className="logo-container h-[100px] lg:h-[164px] flex justify-between lg:justify-center items-center pl-[1.5em] pr-[1rem]">
            <img className="w-[60%] lg:w-[350px] block" src={title} alt=""/>
            <Hamburger/>
        </div>
    </header>
  )
}

export default Header