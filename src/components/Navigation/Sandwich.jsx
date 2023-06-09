import ImageMap from './ButtonNavigation/ImageMap'
import PagesText from './ButtonNavigation/PagesText'

const Sandwich = () => {
  return (
    <>
      <div className="flex justify-between">
        <ImageMap text="sandwich" />
        <ImageMap text="close" />
      </div>
      <div className="flex flex-col md:flex-row items-center  justify-between ">
        <PagesText text="VOITING" />
        <PagesText text="BREEDS" />
        <PagesText text="GALLERY" />
      </div>
    </>
  )
}

export default Sandwich
