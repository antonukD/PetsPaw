import React from 'react'
import { NavLink } from 'react-router-dom'
import voiting from '../../../images/vote-table.svg'
import breeds from '../../../images/pet-breeds.svg'
import gallery from '../../../images/images-search.svg'

const ImageMap = {
  voiting: voiting,
  breeds: breeds,
  gallery: gallery,
}

function AppButton(props) {
  const text = props.text.toLowerCase()

  return (
    <NavLink to={`${text}`}>
      <button
        className={`${
          text === 'voiting'
            ? 'bg-link-color-b'
            : text === 'breeds'
            ? 'bg-link-color-g'
            : 'bg-link-color-y'
        } rounded-[20px] flex items-center  justify-center relative self-end  w-36 h-52 border-4  border-white/60 hover:border-white hover:border-solid focus:border-[#FBE0DC] dark:hover:border-solid dark:focus:border-[#FBE0DC]`}
      >
        <img
          src={ImageMap[text]}
          alt={text}
          className=" bg-cover w-auto h-auto"
        />
      </button>
    </NavLink>
  )
}

export default AppButton
