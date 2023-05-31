import React from 'react'
import smile from '../../../images/smile.svg'
import like_navigation from '../../../images/like_navigation.svg'
import sad_smile from '../../../images/sad_smile.svg'

const ImageMap = {
  smile: smile,
  like_navigation: like_navigation,
  sad_smile: sad_smile,
}

const LikedButton = (props) => {
  const text = props.text.toLowerCase()

  return (
    <button className="likeImg">
      <img src={ImageMap[text]} alt={text} className="image" />
    </button>
  )
}

export default LikedButton
