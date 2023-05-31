import LikedButton from './ButtonNavigation/LikedButton.jsx'
import SearchLine from './ButtonNavigation/SearchLine.jsx'

const TopSerchAndContant = () => {
  return (
    <div className="relative w-full h-full col-start-7 mt-8 col-span-6">
      <div className="flex flex-nowrap justify-end flex-row mr-8 mb-4">
        <SearchLine />
        <div className="flex flex-nowrap">
          <LikedButton text="smile" />
          <LikedButton text="like_navigation" />
          <LikedButton text="sad_smile" />
        </div>
      </div>
      <div className=" relativen h-5/6 max-w-8xl mt-2.5 mr-8  rounded-2xl bg-white"></div>
    </div>
  )
}

export default TopSerchAndContant
