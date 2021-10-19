import React from 'react';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


export default function App() {
  return (
    <>
    <Router>
    <NavMenu />
    
    <ScrollToTop />

    <Switch>
      <Route path='/about'>
        <About />
      </Route>

      <Route path='/projects'>
        <Projects />
      </Route>

      <Route path='/contact'>
        <Contact />
      </Route>

      <Route path='/'>
        <Home />
      </Route>

    </Switch>
    <Footer />
    </Router>
    
    </>
  )
}
