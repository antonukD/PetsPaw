import React from 'react'
import smile from '../../../images/smile.svg'
import like_navigation from '../../../images/like_navigation.svg'
import sad_smile from '../../../images/sad_smile.svg'
import sandwich from '../../../images/sandwich.svg'
import close from '../../../images/close.svg'

const ImageMapVar = {
  smile: smile,
  like_navigation: like_navigation,
  sad_smile: sad_smile,
  sandwich: sandwich,
  close: close,
}

function ImageMap(props) {
  const text = props.text.toLowerCase()

  return (
    <button className="flex justify-center items-center  flex-row rounded-2xl h-16 w-16 bg-white border-none hover:bg-hover-link active:bg-active-color dark:bg-[#282828] dark:hover:bg-hover-link dark:active:bg-active-color">
      <img src={ImageMapVar[text]} alt={text} className="h-8 w-8 basis-1/3" />
    </button>
  )
}

export default ImageMap
