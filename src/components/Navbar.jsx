import React,{ useState } from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin,FaFacebook,FaInstagram} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/finallogo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav,setNav]=useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
        <Link to="home" smooth={true} duration={500}><img src={Logo} alt="" style={{width:'50px'}}/></Link>
        </div>
        <div className='hidden md:flex'>
            <ul className='hidden md:flex '>
                <li className='border-b-4 border-[#0a192f] hover:border-pink-600 duration-300'>
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li className='border-b-4 border-[#0a192f] hover:border-pink-600 duration-300'><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li className='border-b-4 border-[#0a192f] hover:border-pink-600 duration-300'><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li className='border-b-4 border-[#0a192f] hover:border-pink-600 duration-300'><Link to="work" smooth={true} duration={500}>Work</Link></li>
                <li className='border-b-4 border-[#0a192f] hover:border-pink-600 duration-300'><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </div>

        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl border-b-4 border-[#0a192f] hover:border-pink-600 duration-300'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='py-6 text-4xl border-b-4 border-[#0a192f] hover:border-pink-600 duration-300'><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
            <li className='py-6 text-4xl border-b-4 border-[#0a192f] hover:border-pink-600 duration-300'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li className='py-6 text-4xl border-b-4 border-[#0a192f] hover:border-pink-600 duration-300'><Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link></li>
            <li className='py-6 text-4xl border-b-4 border-[#0a192f] hover:border-pink-600 duration-300'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
            <li className='flex justify-between bottom-0'>
                <a className='p-4 hover:color-pink-600' href="https://www.linkedin.com/in/chandu-reddy-aa1ab7204"><FaLinkedin size={30}/></a>
                <a className='p-4 hover:color-pink-600' href="https://github.com/ChandureddyP"><FaGithub size={30}/></a>
                <a className='p-4 hover:color-pink-600' href="https://instagram.com/chandureddy2ko2?igshid=YmMyMTA2M2Y="><FaInstagram size={30}/></a>
                <a className='p-4 hover:color-pink-600' href="https://drive.google.com/file/d/1-2mFNdaBFEKcPVPOMHde7zLPafI4hS9t/view?usp=drivesdk"><BsFillPersonLinesFill size={30}/></a>
            </li>
        </ul>


        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="https://www.linkedin.com/in/chandu-reddy-aa1ab7204">
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="https://github.com/ChandureddyP">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="https://instagram.com/chandureddy2ko2?igshid=YmMyMTA2M2Y=">
                        Instagram <FaInstagram size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="https://drive.google.com/file/d/184CcWFXfIjcsCAqQijJvBVHVRjTcR8vI/view?usp=drivesdk">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar