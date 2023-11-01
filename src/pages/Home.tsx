import Animation from "../components/Animation"
import Output from "../components/Output"
import Prompt from "../components/Prompt"
import Tests from "../components/Tests"
import g1 from "../assets/hogif1.gif"
import g2 from "../assets/hogif2.gif"
import Blog from "../components/Blog"


const Home = () => {
  return (
    <div className="bg-[#f6f9fc] h-[2600px] relative">
      <div className="bg-[#001528] h-540 relative">
        <div className="text-white absolute top-175 left-225">
          <div className="font-medium text-4xl">
            Elite Coders Club
          </div>
          <div className="font-normal text-lg mt-7">
            The ultimate resource to prepare for coding interviews
            <br />
            Everything you need, in one streamlined platform.
          </div>
          <button className="bg-[#626EE3] w-228 h-50 mt-7">
            Start Practicing
          </button>
        </div>
        <Prompt />
        <Animation />
        <Tests />
        <Output />

        <div className="absolute flex flex-col top-[580px] left-1/2 transform -translate-x-1/2 text-[#001528] text-center">
          <div className="text-4xl font-medium">Who Are We ¯\_(ツ)_/¯</div>
          <div className="text-xl italic">Let's Debug...</div>
        </div>
        <div className="absolute flex justify-between top-[750px] w-full items-center">

          <img src={g2} alt="" className="h-[400px] w-[700px] ml-20 rounded-md" />
          <div className="w-[600px] text-center mr-10  text-lg font-normal ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Dicta, necessitatibus saepe nihil iure pariatur, minima quam 
            quia sequi delectus dolorem distinctio soluta consequatur qui 
            magnam ad, dolores voluptatem et odio enim corrupti. Saepe odio 
            perspiciatis animi nisi ut vel quam, reprehenderit atque ad? 
            Explicabo quibusdam, sint voluptates tenetur laboriosam, quisquam, 
            eius ipsum minus ratione dolores magni voluptas? Eligendi, saepe maiores.
            perspiciatis animi nisi ut vel quam, reprehenderit atque ad? 
            Explicabo quibusdam, sint voluptates tenetur laboriosam, quisquam, 
            eius ipsum minus ratione dolores magni voluptas? Eligendi, saepe maiores.

            <a href="/about" className="text-blue-500 ml-4 font-medium">Read More</a>
          </div>

        </div>




        <div className="absolute flex flex-col top-[1280px] left-1/2 transform -translate-x-1/2 text-[#001528] text-center">
          <div className="text-4xl font-medium">Who We Do ¯\_(ツ)_/¯</div>
          <div className="text-xl italic">Let's Find Out...</div>
        </div>
        <div className="absolute flex justify-between top-[1450px] w-full items-center">

          
          <div className="w-[600px] text-center ml-10 text-lg font-normal ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Dicta, necessitatibus saepe nihil iure pariatur, minima quam 
            quia sequi delectus dolorem distinctio soluta consequatur qui 
            magnam ad, dolores voluptatem et odio enim corrupti. Saepe odio 
            perspiciatis animi nisi ut vel quam, reprehenderit atque ad? 
            Explicabo quibusdam, sint voluptates tenetur laboriosam, quisquam, 
            eius ipsum minus ratione dolores magni voluptas? Eligendi, saepe maiores.

            <a href="/Questions" className="text-blue-500 ml-4 font-medium ">Read Tutorials</a>
          </div>

          <img src={g1} alt="" className="h-[400px] w-[700px] mr-20 rounded-md" />

        </div>

        <div className="absolute top-[1980px] mx-10 flex flex-col">
            <div className="mb-10 text-4xl font-medium text-[#001528]">Blogs</div>
            <Blog />
            <Blog />
            <Blog />
            <a href=""><div className="text-blue-500 italic ml-5 text-lg">Read More</div></a>     
        </div>

      </div>
    </div>


  )
}

export default Home