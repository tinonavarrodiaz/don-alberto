import Logo from "../img/logo.svg"
const Footer = (classN) =>(
    <footer className="bg-white main-footer pt-[40px] lg:pt-[58px] h-[300px] lg:h-[355px] mt-auto flex flex-col justify-start items-center relative">
        <img src={Logo} className={`${classN} w-[150px] lg:w-[11.9791666vw] h-auto mb-5 lg:mb-[3rem] block`} alt="Main Logo"/>
        <ul className="menu-footer absolute translate-x-[50%] lg:translate-x-[0] bottom-8
        
         lg:bottom-6 right-[50%] lg:right-[100px] font-bold text-[20px]">
            <li>
                <a className="mr-[43px]" href="#">Facebook</a>
                <a className="mr-[43px]" href="#">Instagram</a>
                <a className="mr-0" href="#">Contact</a>
            </li>
        </ul>
    </footer>
)

export default Footer