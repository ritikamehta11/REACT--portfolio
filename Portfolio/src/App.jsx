import './App.module.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skill/Skill'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer/>
      {/* <Header /> */}

      {/* when width is small, make header none */}
     
      </>
  )
}

export default App
