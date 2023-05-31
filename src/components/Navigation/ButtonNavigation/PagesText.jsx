import React from 'react'
import { NavLink } from 'react-router-dom'

function PagesText(props) {
  const lowerText = props.text.toLowerCase()
  return (
    <NavLink to={`${lowerText}`}>
      <button className=" w-36 h-9 text-active-color tracking-leter2px rounded-xl bg-white border-none  text-xs leading-10 hover:bg-hover-link focus:text-white focus:bg-active-color">
        {props.text}
      </button>
    </NavLink>
  )
}

export default PagesText
