import React, { useState, useEffect } from 'react'
// import { Outlet } from 'react-router-dom'
import Menu from './components/Navigation/Menu'
import './App.css';


function App() {

  // const [dimensions, setDimensions] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // })
  // console.log(dimensions)
  // const handleResize = () => {
  //   setDimensions({
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   })
  // }
  // useEffect(() => {
  //   window.addEventListener('resize', handleResize, false)
  // }, [])
  // useEffect(() => {}, [dimensions])


  return (

      <div className="App dark">
        <body className='bg-page-color dark:bg-[#1D1D1D] '>
          <div className="flex justify-center lg:grid lg:grid-cols-12 h-screen w-screen overflow-hidden z-20">
            <div className="flex flex-col justify-between lg:col-span-4 lg:col-start-2 w-auto h-auto">
              <Menu />
            </div>
            {/* <Outlet /> */}
          </div>      
        </body>
      </div>

  );
}

export default App;
