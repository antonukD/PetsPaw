import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../Navigation/Menu'
// import Sandwich from '../Navigation/Sandwich'

// через js дістати ширину екрану для відпрацюванню на конкретному брейкпоінті
// розібратись зі state і propertis
// https://legacy.reactjs.org/docs/handling-events.html розібратись з Handling Events
// childNode[4].parentNode.insertBefore(childNode[4], childNode[3]); замінити <Menu /> і <Outlet /> місцями або підставити лінк на конкретний пейдж компонент

const MainLayouts = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  console.log(dimensions)
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize, false)
  }, [])
  useEffect(() => {}, [dimensions])

  return (
    <div className="flex justify-center lg:grid lg:grid-cols-12 h-screen w-screen overflow-hidden z-20">
      <div className="flex flex-col justify-between lg:col-span-4 lg:col-start-2 w-auto h-auto">
        <Menu />
      </div>
      <Outlet />
    </div>
  )
}

export default MainLayouts
