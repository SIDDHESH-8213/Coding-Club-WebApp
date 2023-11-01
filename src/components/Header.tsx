import icon from "../assets/icon.png";


const Header = () => {
  return (
    <div className="flex flex-column bg-[#001528] relative h-105 pt-8">

      <div className="title absolute l-205 top-6  ">
        <div className="tittle_upper flex items-center">
          <img src={icon} alt="icon" className="h-9 w-10" />
          <span className="text-4xl text-white ml-2 font-normal">Elite Coders Club</span>
        </div>
        <div className="title_lower font-normal text-xl text-[#8D96EB] mt-2 ">
          I got 99 problems, but writing code ain't one
        </div>
      </div>

      <div className="tabs absolute l-834 pt-8 top-6">
        <span className="tabitem pr-10 font-bold text-white "><a href="/Home">Home</a></span>
        <span className="tabitem pr-10 font-bold text-white"><a href="/about">About</a></span>
        <span className="tabitem pr-10 font-bold text-white"><a href="/questions">Questions</a></span>
        <span className="tabitem pr-10 font-bold text-white"><a href="/practice">Practice</a></span>
        <span className="tabitem font-bold text-white"><a href="/roadmaps">Roadmaps</a></span>
      </div>

    </div>
  )
}

export default Header