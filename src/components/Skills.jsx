import React from 'react'
import HTML from '../assets/portfolio4.png';
import CSS from '../assets/portfolio1.png';
import JavaScript from '../assets/portfolio5.png';
import ReactImg from '../assets/portfolio8.png';
import Node from '../assets/portfolio7.png';
import FireBase from '../assets/portfolio2.png';
import GitHub from '../assets/portfolio3.png';
import Tailwind from '../assets/portfolio9.png';
import Mongo from '../assets/portfolio6.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f]  text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={HTML} alt="html icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={CSS} alt="html icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={JavaScript} alt="html icon" />
                    <p className='my-4'>JavaScriipt</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={ReactImg} alt="html icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={Node} alt="html icon" />
                    <p className='my-4'>Node</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={FireBase} alt="html icon" />
                    <p className='my-4'>FireBase</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={Mongo} alt="html icon" />
                    <p className='my-4'>MongoDB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={Tailwind} alt="html icon" />
                    <p className='my-4'>Tailwind CSS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills