import React from 'react';
import NavMenu from './components/NavMenu';
import Home from './pages/home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeroSection from './components/HeroSection';


export default function App() {
  return (
    <>
    <Router>
    <NavMenu />
    <HeroSection/>

    <Switch>
      <Route path='/about'>
        <About />
      </Route>

      <Route path='/projects'>
        <Projects />
      </Route>

      <Route path='/Contact'>
        <Contact />
      </Route>

      <Route path='/'>
        <Home />
      </Route>

    </Switch>
    </Router>
    
    </>
  )
}
