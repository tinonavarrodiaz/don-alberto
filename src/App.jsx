import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from "react"
import AOS from 'aos';
import logo from './logo.svg'
// import './App.css'
import  Header from './components/Header'
import  Footer from './components/Footer'

import Home from './pages/Home'
import History from "./pages/History"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import Buy from "./pages/Buy"

function App() {
  // const [count, setCount] = useState(0)
  useEffect(()=>{
    AOS.init({
    easing: 'ease-out-back',
    duration: 850,
    startEvent: 'DOMContentLoaded',
    useClassNames: true,
    // once: true,
  });
  },[])
  const Error404 = ()=>(
    <h1>Error 404</h1>
  )
  return (
    <BrowserRouter >
      <Header/>
       <Routes>
           <Route path="/" exact element={<Home/>}/>
           <Route path="/history" exact element={<History/>}/>
           <Route path="/our-products" exact element={<Products/>}/>
           <Route path="/where-to-buy" exact element={<Buy/>}/>
           <Route path="/contact" exact element={<Contact/>}/>
           <Route path="*" exact element={<Error404/>}/>
       </Routes>
       <Footer/>
   </BrowserRouter>
  )
}

export default App
