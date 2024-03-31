import './App.css'
import BlueStrip from './components/Header/BlueStrip'
import Navbar from './components/Header/Navbar'
import ScrollHideDiv from './components/Header/ScrollHideDiv'
import Background from './components/Header/Background'
import AboutUs from './components/Hero/AboutUs'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <div id='Hero'>
    <Background/>
    <BlueStrip/>
    <ScrollHideDiv/>
    <Navbar/>
    </div>
    <div id='Hero' >
      <AboutUs/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default App
