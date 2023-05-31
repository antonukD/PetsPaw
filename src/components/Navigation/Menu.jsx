import { Link } from 'react-router-dom'
import PagesImg from './ButtonNavigation/PagesImg'
import PagesText from './ButtonNavigation/PagesText'
import logo from '../../images/Logo.svg'

const Menu = () => {
  return (
    <div className="fixed">
      <Link to={'/'}>
        <img className="mt-8" src={logo} alt="logo" />
      </Link>

      <div className=" w-full h-screen  ">
        <div className="mb-56">
          <h1 className="text-5xl mt-20">Hi intern!</h1>
          <h2 className="mt-3 text-gray-500">
            Welcome to MI 2022 Front-end test
          </h2>
          <p className="mt-16">Let's start using The Cat API</p>
          <div className="mt-5">
            <div className="flex items-center justify-center space-x-3">
              <PagesImg text="VOITING" />
              <PagesImg text="BREEDS" />
              <PagesImg text="GALLERY" />
            </div>
            <div className="flex items-center justify-center space-x-3 mt-2.5">
              <PagesText text="VOITING" />
              <PagesText text="BREEDS" />
              <PagesText text="GALLERY" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
