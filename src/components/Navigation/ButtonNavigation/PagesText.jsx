const PagesText = ({ text, setShowComponent }) => {
  const lowerText = text.toLowerCase()
  return (
    <button to={`${lowerText}`}>
      <button
        onClick={() => setShowComponent(lowerText)}
        className=" mt-3 w-80 md:w-36 h-9 text-active-color tracking-leter2px rounded-[10px] bg-white border-none  text-xs leading-10 hover:bg-hover-link focus:text-white focus:bg-active-color dark:bg-[#343434] dark:hover:bg-hover-link dark:focus:bg-active-color"
      >
        {text}
      </button>
    </button>
  )
}

export default PagesText
