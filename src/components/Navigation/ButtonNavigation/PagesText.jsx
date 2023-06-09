import React from 'react'
import { NavLink } from 'react-router-dom'

function PagesText(props) {
  const lowerText = props.text.toLowerCase()
  return (
    <NavLink to={`${lowerText}`}>
      <button className=" mt-3 w-80 md:w-36 h-9 text-active-color tracking-leter2px rounded-[10px] bg-white border-none  text-xs leading-10 hover:bg-hover-link focus:text-white focus:bg-active-color dark:bg-[#343434] dark:hover:bg-hover-link dark:focus:bg-active-color">
        {props.text}
      </button>
    </NavLink>
  )
}

export default PagesText
