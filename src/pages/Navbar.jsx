import React from 'react'
import { AiOutlineDown } from "react-icons/ai";
import Logo from '../../public/firstbench.png'
const Navbar = () => {
  return (
    <div>
     <header className="bg-gray-700 text-white p-1 flex justify-evenly items-center">
                        <div>
                            <img src={Logo} alt="Logo" className="mr-4"/>
                        </div>
                        <nav className="flex space-x-10">
                            <a href="/" className="hover:text-gray-400">Dashboard</a>
                            <a href="/firstguru" className="hover:text-gray-400">FirstGuru</a>
                            <a href="/townhall" className="hover:text-gray-400">TownHall</a>
                            <a href="/evaluation" className="hover:text-gray-400">AI Evaluation</a>
                            <a href="/performance" className="hover:text-gray-400">Performance</a>
                            <a href="/mocktest" className="text-green-400 hover:text-green-300">Mock Test</a>
                        </nav>
                        <div className="flex items-center border border-gray-800 bg-gray-800 rounded">
                            <div className="bg-orange-400 px-1 m-1 w-5 border  rounded">P</div>
                            <div className="relative">
                                <button className="focus:outline-none m-1 flex gap-1">Profile <span className='mt-[5px]'><AiOutlineDown /> </span></button>
                            </div>
                        </div>
                    </header>
    </div>
  )
}

export default Navbar
