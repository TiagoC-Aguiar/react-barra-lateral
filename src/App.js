import React from 'react'
import { Router } from '@reach/router'

import About from'./pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import RespnosiveNavigation from './components/ResonsiveNavigation'

import './App.css'

function App() {
  const navLinks = [
    {
      text: 'Contact',
      path: '/contact',
      icon: 'ion-ios-megaphone'
    },
    {
      text: 'About',
      path: '/about',
      icon: 'ion-ios-business'
    },
    {
      text: 'Blog',
      path: '/blog',
      icon: 'ion-ios-bonfire'
    },
    {
      text: 'Portfolio',
      path: '/portfolio',
      icon: 'ion-ios-briefcase'
    },
  ]
  return (
    <div className="App">
      <RespnosiveNavigation 
        navLinks={navLinks}
        logo={'logo'}
      />
      <Router>
        <Contact path="/contact/" />
        <Home path="/home/" />
        <Portfolio path="/portfolio/" />
        <Blog path="/blog/" />
        <About path="/about/" />
      </Router>
    </div>
  );
}

export default App;
