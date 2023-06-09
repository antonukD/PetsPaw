import SearchLine from './ButtonNavigation/SearchLine.jsx'
import ImageMap from './ButtonNavigation/ImageMap.jsx'

const TopSearchAndContent = () => {
  return (
    <div className="hidden lg:block lg:relative w-full h-screen lg:col-start-7 lg:mt-8 lg:col-span-6">
      <div className=" flex flex-nowrap justify-end space-evenly flex-row mr-8 ">
        <div className="hidden lg:block grow">
          <SearchLine />
        </div>
        <div className="flex justify-between w-52 ml-[10px]">
          <ImageMap text="smile" />
          <ImageMap text="like_navigation" />
          <ImageMap text="sad_smile" />
        </div>

        <div className="block grow lg:hidden">
          <SearchLine />
        </div>
      </div>
      <div className="relative h-[84%] mr-8 mt-[10px] mb-40 rounded-2xl bg-white dark:bg-[#282828]"></div>
    </div>
  )
}

export default TopSearchAndContent
