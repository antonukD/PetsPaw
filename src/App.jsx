import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

import Home from './Home'
import PagesImg from './components/Navigation/ButtonNavigation/PagesImg'
import PagesText from './components/Navigation/ButtonNavigation/PagesText'

function App() {
  return (
    <BrowserRouter>
      {/* TODO: should contain logic to navigate throw the different pages */}
      <Home />
    </BrowserRouter>
  )
}

export default App
