import React from "react";
import video from "../../assest/video.mp4";
import img1 from "../../assest/speaker1.png";
import "../Header/Header.css";
const Header = () => {
  return (
    <div>
      <header class="relative  mb-12  ">
      <div class="container absolute lg:py-2 sm:py-48 md:py-36 z-30 pt-24 md:pt-32 px-6  flex lg:flex-wrap  flex-wrap flex-col md:flex-row items-center">
{/* 
<!--Left Col--> */}
<div class="flex  flex-col left_content w-full sm:py-24 md:py-12 xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
  <h1 class="my-4  text-3xl md:text-5xl lg:text-6xl text-white font-bold leading-tight text-center md:text-left slide-in-bottom-h1">The all-round sound of Home</h1>
  <p class="leading-normal text-base md:text-2xl mb-8 text-center text-gray-300 md:text-left slide-in-bottom-subtitle">Sana is a breakthrough speaker that delivers high-fidelity audio wherever it’s playing.</p>

  <div class="flex w-full justify-center md:justify-start pb-24 lg:pb-0 ">
  <button className="cta shadow-xl shadow-fuchsia-800/30 ">Listen Now</button>
  </div>

</div>
{/* 
<!--Right Col--> */}
<div class="w-full img-container xl:w-3/5 sm:w-5/5 z-30   overflow-y-hidden">
  <img class="w-5/6 mx-auto img1 lg:mr-0 slide-in-bottom" src={img1}/>
</div>


</div>
        <video
          autoPlay
          loop
          muted
          class="absolute z-10 max-w-none "
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>

      {/* <div className="container  content">
  <div className='left_content   mx-4'>
    <h1 className='text-6xl  '>Let Make some Noise</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum natus <br /> exercitationem libero aut voluptatum quas, hic eligendi venia</p>
  <button>Listen Now</button>
  </div>
  <div className='right_content '>
    
      <img  className='echo' src={img1} width={"750px"} alt="" />
    
  </div>
</div> */}
    </div>
  );
};

export default Header;
