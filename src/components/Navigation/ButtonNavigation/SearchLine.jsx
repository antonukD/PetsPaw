import serch from '../../../images/search.svg'
import React from 'react'

const SearchLine = () => {
  return (
    <>
      <div className="flex justify-between grow bg-white rounded-2xl items-center mr-3">
        <p className="text-gray-700 ml-5 font-nunito font-normal text-base">
          Search for breeds by name
        </p>
        <div className=" flex justify-center items-center w-10 h-10 m-3 bg-pink-200  rounded-xl">
          <img src={serch} alt="serch" />
        </div>
      </div>
    </>
  )
}

export default SearchLine
