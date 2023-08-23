import React, { useState, useEffect } from 'react'
import Breeds from './components/pages/Breeds'
import Gallery from './components/pages/Gallery'
import Home from './components/pages/Home'
import Voiting from './components/pages/Voiting'
import Menu from './components/Navigation/Menu'
import './App.css';



function App() {
  
  const [showComponent, setShowComponent] = useState(Home);
  
  // const toggleComponent = () => {
  //   setShowComponent(!showComponent);
  // };

  function comparePageWithText() {
    const pagesMap = {
      'breeds': <Breeds />,
      'gallery': <Gallery />,
      'voiting': <Voiting />,
      'default': <Home />
    };
  
    return pagesMap[showComponent] || pagesMap['default'];
  }
  
  
  return (
    
    <div className="App dark">
        <body className='bg-page-color dark:bg-[#1D1D1D] '>
          <div className="flex justify-center lg:grid lg:grid-cols-12 h-screen w-screen overflow-hidden z-20">
            <div className="flex flex-col justify-between lg:col-span-4 lg:col-start-2 w-auto h-auto">
              <Menu setShowComponent={setShowComponent} />
            </div>
            <div className="hidden lg:block lg:relative lg:col-start-7 lg:col-span-6">
                  {comparePageWithText(showComponent)}
            </div>
          </div>      
        </body>
      </div>
    );
  }
  
  
  
  export default App;









  // import { Outlet } from 'react-router-dom'
  
  
  
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

