import Link from 'next/link';
import React, {useState} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';




const Navbar = () => {
  return (
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-500 shadow-sm bg-slate-200'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
            <Link href='/'></Link>
            <div className='flex gap-1'>
            <button className='rounded-full  bg-emerald-900 py-4 px-5'></button>
            <h1 className='font-bold text-4xl'>Buildit</h1>
            </div>
            <ul className='hidden sm:flex'>
                <li className='p-4'>
                    <Link href='/about.js'>About</Link>
                </li>
                <li className='p-4'>
                    <Link href='/'>Services</Link>
                </li>
                <li className='p-4'>
                    <Link href='/'>Projects</Link>
                </li>
                <li className='p-4'>
                    <Link href='/'>Contact</Link>
                </li>
            </ul>

            {/* Mobile Button */}
            <div className='flex justify-between gap-28 sm:hidden z-10'>
                <div className='flex gap-1 sm:flex float-left'>
                <button className='rounded-full bg-emerald-900 py-3 px-5 sm:rounded-full'></button>
                <h1 className='font-bold text-4xl top-0'>Buildit</h1>
            
               </div>

                <AiOutlineMenu size={20} />
            </div>
            {/* Mobile Menu */}

            <div className='sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center w-full h-screen bg-slate-300 text-center ease-in duration-300'>
            
                <ul>
                    <li className='p-4 text-2xl hover:text-gray-500'>
                        <Link href='/about.js'>About</Link>
                    </li>
                    <li className='p-4 text-2xl hover:text-gray-500'>
                        <Link href='/'>Services</Link>
                    </li>
                    <li className='p-4 text-2xl hover:text-gray-500'>
                        <Link href='/'>Projects</Link>
                    </li>
                    <li className='p-4 text-2xl hover:text-gray-500'>
                        <Link href='/'>Contact</Link>
                    </li>
                </ul>
            </div>
            <button className='rounded-lg py-2 px-2 cursor-pointer bg-cyan-800 text-white'>Need a Project?</button>
        </div>
    </div>
  )
}

export default Navbar