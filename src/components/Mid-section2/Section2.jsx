import React from 'react'
import '../Mid-section2/Section2.css'
import speaker2 from '../../assest/speaker2.png'
const Section2 = () => {
  return (
    <div>
        <div className=" cover_img ">
            <div className=''>
        <h1 class="my-4 small-s-text pt-48 sm:text-6xl lg:text-5xl text-gray-100 font-bold tracking-wider text-center md:text-center slide-in-bottom-h1">Designed to be <br />
seen and heard.</h1>
    <p class="leading-normal sec2_para w-7/12 sm:w-full md:w-6/12  slide-in-bottom-subtitle">Sana is wrapped in a seamless mesh fabric designed for aesthetics and acoustic performance. Available in white and space gray, it’s gorgeous from every angle — yet virtually transparent to the sound waves passing through it.</p>
  
    </div>
    <div className='shopnow-btn flex justify-center mt-12'>
  <a className='shop ' href="">Shop Now</a>
  </div>
  <div className="speaker2_img flex  justify-center mt-12">
    <img src={speaker2} alt="" />
  </div>
        </div>
    </div>
  )
}

export default Section2