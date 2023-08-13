import { Link } from 'react-router-dom'
import PagesImg from './ButtonNavigation/PagesImg'
import PagesText from './ButtonNavigation/PagesText'
import paw from '../../images/paw.svg'
import logoText from '../../images/logo-text.svg'

const Menu = () => {
  return (
    <>
      <div className="flex justify-between mt-8 w-full">
        <Link to={'/'} className="flex">
          <img src={paw} alt="logo" />
          <img
            src={logoText}
            alt="logo_text"
            className="ml-2 dark:filter dark:brightness-0 dark:invert"
          />
        </Link>
      </div>

      <div className=" flex w-full h-screen  ">
        <div className="">
          <h1 className="text-5xl mt-20 dark:text-[#FFFFFF]">Hi intern!</h1>
          <h2 className="mt-3 text-gray-500 ">
            Welcome to MI 2022 Front-end test
          </h2>
          <p className="mt-16 dark:text-[#FFFFFF]">
            Let's start using The Cat API
          </p>
          <div className="mt-5">
            <div className="hidden md:flex md:items-center md:justify-center md:space-x-3">
              <PagesImg text="VOITING" />
              <PagesImg text="BREEDS" />
              <PagesImg text="GALLERY" />
            </div>
            <div className="flex flex-col md:flex-row items-center  justify-between ">
              <PagesText text="VOITING" />
              <PagesText text="BREEDS" />
              <PagesText text="GALLERY" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
