import React from 'react'
import { Link } from 'react-router-dom'
import './PagesText.css'

function PagesText(props) {
  const lowerText = props.text.toLowerCase()
  return (
    <Link to={`${lowerText}`}>
      <button className="button-txt">{props.text}</button>
    </Link>
  )
}

export default PagesText
