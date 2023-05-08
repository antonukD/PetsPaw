import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './Home.css'

import PagesImg from './components/Navigation/ButtonNavigation/PagesImg'
import PagesText from './components/Navigation/ButtonNavigation/PagesText'

const Home = () => {
  return (
    <div className="App">
      <div className="leftSide">
        <div className="logo"></div>
        <div className="content">
          <div className="h1">Hi intern!</div>
          <div className="h2">Welcome to MI 2022 Front-end test</div>
          <div className="h3">Lets start using The Cat API </div>
          <div className=""></div>
          <div className="pages">
            <div className="button-image">
              <PagesImg text="VOITING" />
              <PagesImg text="BREEDS" />
              <PagesImg text="GALLERY" />
            </div>
            <div className="button-texts">
              <PagesText text="VOITING" />
              <PagesText text="BREEDS" />
              <PagesText text="GALLERY" />
            </div>
          </div>
        </div>
      </div>
      <div className="rightSide">
        <div className="girl-and-pet"></div>
        <div className="rectangle-30"></div>
      </div>
    </div>
  )
}
export default Home
