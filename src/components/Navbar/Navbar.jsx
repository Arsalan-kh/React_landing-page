import React from 'react'
import logo from '../../assest/logo.svg'
import { useState } from 'react'
import '../Navbar/Navbar.css'
const Navbar = () => {
   const [navbar,setNavbar]=useState(false)

  const changeBg=()=>{
    if(window.scrollY>=120){
      setNavbar(true)
      
    }
    else{
      setNavbar(false)
    }
  }
  window.addEventListener('scroll',changeBg)
  return (
    <div className=''>
        <nav class={navbar ?'navbar active pt-3':'navbar pt-3'}>
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <a href="https://flowbite.com/" class="flex items-center">
  <img width="150" height="150" src={logo} class="attachment-large size-large" alt="" loading="lazy"/>
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
  </a>
  <div class="flex md:order-2">
      <a type="button" className="text-white bg-transparent border hover:text-white hover:bg-fuchsia-700 focus:ring-4 focus:outline-2 border-2 border-fuchsia-500 focus:ring-purple-700 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">Shop Now</a>
   
  </div>
  <div class="hidden justify-between  items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 mt-4   border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0   ">
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-white bg-white-200 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar