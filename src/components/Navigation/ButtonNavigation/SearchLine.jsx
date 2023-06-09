import serch from '../../../images/search.svg'
import React from 'react'

const SearchLine = () => {
  return (
    <>
      <div className="flex justify-between grow bg-white dark:bg-[#282828] rounded-2xl items-center">
        <p className="text-[#8C8C8C] ml-5 font-nunito font-normal text-base">
          Search for breeds by name
        </p>

        <div className=" flex justify-center items-center w-10 h-10 m-3 bg-[#FBE0DC] dark:bg-[#543B3C] rounded-xl">
          <img src={serch} alt="serch" />
        </div>
      </div>
    </>
  )
}

export default SearchLine
