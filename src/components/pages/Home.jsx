import girlAndPat from '../../images/girl-and-pet.svg'

const Home = () => {
  return (
    <div className="  col-start-7 p-5 col-span-6 z-30">
      <div className=" relative w-full h-full  rounded-2xl bg-img-color">
        <img
          className="absolute inset-0  w-full h-full object-cover scale-110 "
          src={girlAndPat}
          alt="girl-and-pet"
        />
      </div>
    </div>
  )
}

export default Home
