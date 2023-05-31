import React from 'react'
import smile from '../../../images/smile.svg'
import like_navigation from '../../../images/like_navigation.svg'
import sad_smile from '../../../images/sad_smile.svg'

const ImageMap = {
  smile: smile,
  like_navigation: like_navigation,
  sad_smile: sad_smile,
}

function LikedButton(props) {
  const text = props.text.toLowerCase()

  return (
    <button className="flex justify-center items-center flex-row rounded-2xl h-16 w-16 bg-white border-none mx-1 hover:bg-hover-link active:bg-active-color">
      <img src={ImageMap[text]} alt={text} className="h-8 w-8 basis-1/3" />
    </button>
  )
}

export default LikedButton
