import {post} from "axios"
import loading from "../../../img/loading.svg"
import { useState, useEffect  } from "react"
 const Form = ()=>{
  const [send, setSend]= useState(false)
  const [press, setPress]= useState(false)
  const [load, setLoad]= useState(false)

  useEffect(()=>{
    const form = document.getElementById("form")
    if (press){
      setLoad(true)
      // setTimeout(() => {
      const data = new FormData(form)
      const action = form.action
      post(action,data)
        .then(res=>{
          console.log(res.data)
        })
        setSend(true)
      // }, 3000);
      
    }
  },[press])
  const sendFn = (e)=>{
    e.preventDefault()
    setPress(true)
  }
  return(
    <section className="section contact">
      <div className="contact__container">
        <h2>Get in Touch</h2>
        <div className="form-container relative">
          <form id="form" className={`contact__form ${send ? 'hidden' : ''}` } action="http://don-alberto.test/php/send.php" method="post" autoComplete="off" onSubmit={sendFn}>
            <div className="input-group">
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name"  required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Your email</label>
              <input type="email" name="email" id="email" required/>
            </div>
            <div className="input-group textarea">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" required></textarea>
            </div>
            <div className="footer-form flex">
              <button type="submit" className="btn ml-auto">
                <span className={!load ? '':'hidden'}>Send</span>
                <img className={load ? 'max-h-[2rem]':'max-h-[2rem] hidden'} src={loading} alt=""/>
              </button>
            </div>
          </form>
          <div className={`message-container italic absolute top-0 left-0  flex justify-center items-center w-[100%] h-[100%] ${!send ? 'hidden' : ''}`}>
            <p className="lg:text-[20px] 2xl:text-[28px]">Message Sent!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form