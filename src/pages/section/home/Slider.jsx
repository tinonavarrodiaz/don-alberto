import { useEffect, useState } from "react"
import './slider.scss'
import left from '../../../img/left.png'
import right from '../../../img/right.png'
const Slider =({images})=>{
  const [active, setActive] = useState(0)
  const [count, setCount] = useState(images.length)

  const prev = (e)=>{
    if(active===0){
      setActive(count-1)
    }else{
      setActive(active-1)
    }
  }
  
  const next = (e)=>{
    if(active===count-1){
      setActive(0)
    }else{
      setActive(active+1)
    }
  }
  const dotClick = (e)=>{
    setActive(parseInt(e.target.dataset.index))
  }
  useEffect(()=>{
    const nextBtn =document.querySelector('.next')
    setInterval(() => {
      nextBtn.click()
    }, 5000);
  },[])
  
  return(
    <>
      <div className="slider-container" data-aos="zoom-in">
        {
          images.map((image,i) => (
            <div data-index={i} key={i} className={i===active ? 'slider is-active' : 'slider'}>
              <img data-index={i} src={image} alt={`slider ${i+1}`}/>
            </div>
          ))
        }
        <div className="arrow prev" onClick={prev}><img src={left} alt="icon left"/></div>
        <div className="arrow next" onClick={next}><img src={right} alt="icon right"/></div>
        <ul className="slider-dots">
          {
            images.map((image,i) => (
                <li key={i} data-index={i} onClick={dotClick} className={i===active ? 'is-active' : ''}/>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default Slider