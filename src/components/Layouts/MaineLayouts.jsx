import { Outlet } from 'react-router-dom'
import Menu from '../Navigation/Menu'
import Sandwich from '../Navigation/Sandwich'

const MaineLayouts = () => {
  return (
    <>
      <div className="flex justify-center lg:grid lg:grid-cols-12 h-full lg:h-screen w-screen bg-page-color dark:bg-[#1D1D1D] lg:overflow-hidden z-20">
        <div className="flex flex-col justify-between lg:col-span-4 lg:col-start-2 w-auto h-auto">
          <Menu />
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default MaineLayouts
