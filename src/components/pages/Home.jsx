import girlAndPat from '../../images/girl-and-pet.png'

const Home = () => {
  return (
    <div className="hidden lg:block lg:relative lg:col-start-7 lg:col-span-6 z-50">
      <div className="m-10 h-[80%] rounded-2xl bg-img-color dark:bg-[#282828]">
        <img
          className=" absolute h-screen w-screen object-cover inset-0  scale-110"
          src={girlAndPat}
          alt="girl-and-pet"
        />
      </div>
    </div>
  )
}

export default Home
