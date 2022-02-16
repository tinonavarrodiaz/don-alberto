import {useEffect} from "react"

const Buy = () => {
  useEffect(() =>{
    (function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src="https://cdn.storepoint.co/api/v1/js/1614219e68b8fc.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b);}());
  },[])
  return(
    <section className="stores bg-white p-[1.5em] lg:px-[11.04166666666667vw] lg:py-[15.5005382131324vh]">
      <div id="storepoint-container" data-map-id="1614219e68b8fc"></div>
    </section>
  )
}

export default Buy