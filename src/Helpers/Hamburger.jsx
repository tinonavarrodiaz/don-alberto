import { useState } from 'react'
const Hamburger = () => {
    const [active, setActive] = useState(false)
    const menuAction = ()=> {
        !active ? setActive(true) : setActive(false)
        const nav = document.querySelector('.main-nav')
        nav.classList.toggle('is-active')
        nav.addEventListener('click', e=>{
            nav.classList.remove('is-active')
            setActive(false)
        })
    }
    return (
        <button className={`hamburger hamburger--collapse lg:hidden  ${active ? 'is-active' : ''}` } type="button" onClick={menuAction}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
    )
}
export default Hamburger