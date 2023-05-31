import { Outlet } from 'react-router-dom'
import Menu from '../Navigation/Menu'

const MaineLayouts = () => {
  return (
    <>
      <div className="grid grid-cols-12 mx-auto h-screen z-20">
        <div className="col-span-4 col-start-2">
          <Menu />
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default MaineLayouts
