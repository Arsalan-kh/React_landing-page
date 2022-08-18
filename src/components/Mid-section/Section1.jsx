import React from 'react'
import "../Mid-section/Section1.css"
import Topimg from '../../assest/top.png'
const Section1 = () => {
  return (
    <div>
    <div class="container pt-24 md:pt-12 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">

			
<div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
    <h1 class="my-4 text-3xl md:text-6xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Major sound,
minor scale.</h1>
    <p class="leading-normal text-base md:text-1xl mb-8 text-center md:text-left slide-in-bottom-subtitle">This purposefully designed speaker creates rich, nuanced sound that defies its size. HomePod combines custom Apple-engineered audio technology and advanced software to deliver precision sound that fills the room.</p>

   
    {/* <div class="flex w-full justify-center  md:justify-start pb-24 lg:pb-0 fade-in">
    <svg width="20.02" height="32.456" viewBox="0 0 20.02 32.456"><defs><linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e66262"></stop><stop offset="1" stop-color="#a254ed"></stop></linearGradient></defs><g id="bluetooth" transform="translate(-98.087)"><g id="Group_25" data-name="Group 25" transform="translate(98.087)"><path id="Path_13" data-name="Path 13" d="M118.107,9.421,106.731,0V13.4L99.72,7.512,98.087,9.457l8.015,6.731L98.087,22.92l1.633,1.944,7.011-5.888v13.48L118.1,22.951l-8.052-6.762ZM109.27,5.4l4.873,4.036-4.873,4.093Zm4.879,17.547-4.879,4.078V18.849Z" transform="translate(-98.087)" fill="url(#linear-gradient)"></path></g></g></svg>
       
       
    <svg width="21.775" height="33.584" viewBox="0 0 21.775 33.584"><defs><linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e66262"></stop><stop offset="1" stop-color="#a254ed"></stop></linearGradient></defs><g id="microphone" transform="translate(-0.5)"><path id="Path_14" data-name="Path 14" d="M22.275,260.818a1,1,0,0,0-2,0,8.884,8.884,0,1,1-17.768,0,1,1,0,0,0-2,0,10.9,10.9,0,0,0,9.886,10.841v2.7H6.669a1,1,0,0,0,0,2h9.437a1,1,0,0,0,0-2H12.389v-2.7A10.9,10.9,0,0,0,22.275,260.818Zm0,0" transform="translate(0 -242.774)" fill="url(#linear-gradient)"></path><path id="Path_15" data-name="Path 15" d="M75.128,24.457a6.42,6.42,0,0,0,6.413-6.413V6.413a6.413,6.413,0,0,0-12.826,0V18.044A6.42,6.42,0,0,0,75.128,24.457ZM70.718,6.413a4.41,4.41,0,0,1,8.82,0V18.044a4.41,4.41,0,1,1-8.82,0Zm0,0" transform="translate(-63.74)" fill="url(#linear-gradient)"></path></g></svg>
    </div> */}
    <div class="flex p-5 icon_text overflow-hidden">
  <div class=" p-5  ">
    <div>
        <svg width="20.02" height="32.456" viewBox="0 0 20.02 32.456"><defs><linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e66262"></stop><stop offset="1" stop-color="#a254ed"></stop></linearGradient></defs><g id="bluetooth" transform="translate(-98.087)"><g id="Group_25" data-name="Group 25" transform="translate(98.087)"><path id="Path_13" data-name="Path 13" d="M118.107,9.421,106.731,0V13.4L99.72,7.512,98.087,9.457l8.015,6.731L98.087,22.92l1.633,1.944,7.011-5.888v13.48L118.1,22.951l-8.052-6.762ZM109.27,5.4l4.873,4.036-4.873,4.093Zm4.879,17.547-4.879,4.078V18.849Z" transform="translate(-98.087)" fill="url(#linear-gradient)"></path></g></g></svg></div>
        <h5 className='mt-5 text-gray-800 tracking-wider font-semibold text-2xl'>Bluetooth</h5>
    <p class="tracking-wide pt-8  ">Lorem ipsum, dolor sit amet consectetur adipisicing eliiusto aspernatur dolore!</p>
  </div>
  <div class=" p-5">
    <div>
        <svg  width="21.775" height="33.584" viewBox="0 0 21.775 33.584"><defs><linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e66262"></stop><stop offset="1" stop-color="#a254ed"></stop></linearGradient></defs><g id="microphone" transform="translate(-0.5)"><path id="Path_14" data-name="Path 14" d="M22.275,260.818a1,1,0,0,0-2,0,8.884,8.884,0,1,1-17.768,0,1,1,0,0,0-2,0,10.9,10.9,0,0,0,9.886,10.841v2.7H6.669a1,1,0,0,0,0,2h9.437a1,1,0,0,0,0-2H12.389v-2.7A10.9,10.9,0,0,0,22.275,260.818Zm0,0" transform="translate(0 -242.774)" fill="url(#linear-gradient)"></path><path id="Path_15" data-name="Path 15" d="M75.128,24.457a6.42,6.42,0,0,0,6.413-6.413V6.413a6.413,6.413,0,0,0-12.826,0V18.044A6.42,6.42,0,0,0,75.128,24.457ZM70.718,6.413a4.41,4.41,0,0,1,8.82,0V18.044a4.41,4.41,0,1,1-8.82,0Zm0,0" transform="translate(-63.74)" fill="url(#linear-gradient)"></path></g></svg></div>
        <h5 className='mt-5  text-gray-800 tracking-wider font-semibold text-2xl'>MicroPhone</h5>
    <p class="tracking-wide  pt-8">Lorem ipsum dolor sit amet consectetur adipisicing elitiusto aspernatur dolore! </p>
  </div>

</div>

</div>


<div class="w-full xl:w-3/5 py-6 overflow-y-hidden">
    <img class="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src={Topimg}/>
</div>



</div>
    </div>
  )
}

export default Section1