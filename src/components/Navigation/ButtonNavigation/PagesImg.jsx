import React from 'react'
import { Link } from 'react-router-dom'
import voiting from '../../../images/vote-table.svg'
import breeds from '../../../images/pet-breeds.svg'
import gallery from '../../../images/images-search.svg'
import './PagesImg.css'

const ImageMap = {
  voiting: voiting,
  breeds: breeds,
  gallery: gallery,
}

function AppButton(props) {
  const text = props.text.toLowerCase()
  // TODO: rewrite to switch / object
  // avoid magic strings

  // if (text === 'voitin') {
  //   imageSrc = voiting
  // } else if (text === 'breeds') {
  //   imageSrc = breeds
  // } else if (text === 'gallery') {
  //   imageSrc = gallery
  // }

  return (
    <Link to={`${text}`}>
      <button className={text}>
        <img src={ImageMap[text]} alt={text} />
      </button>
    </Link>
  )
}

export default AppButton
