import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from '../../assets/logo-zwl.svg'

const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const navLinks = [
        { to: '/find-work', text: 'FindWork' },
        { to: '/find-talent', text: 'Find Talent' },
        { to: '/articles', text: 'Articles' },
        { to: '/about-us', text: 'About Us' },
        { to: '/contact-us', text: 'Contact Us' },
    ];

    return (
        <div className={` z-[900] h-[93px] p-[1rem] flex items-center transition-colors duration-300`}>
            <div className="w-full bg-[#525AA0] shadow-lg rounded-2xl flex items-center justify-between h-[60px] gap-[2rem] p-[1rem] max-w-[1300px] mx-auto">
                <NavLink to='/' className='font-[700] flex gap-[.3rem] text-[28px] text-[#009F95]'>
                    <img src={Logo} alt="Star Logo" />
                </NavLink>
                <button onClick={toggleMenu} className="lg:hidden text-white">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <div className='hidden lg:flex items-center gap-[1rem]'>
                    {navLinks.map(({ to, text }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                `text-[#4B5162] font-[500]  cursor-pointer hover:underline duration-300 ${isActive ? 'text-[#FFBE2E]' : 'text-white'}`
                            }
                        >
                            {text}
                        </NavLink>
                    ))}
                </div>
                <div className='flex hidden lg:flex gap-[.2rem] lg:gap-[.5rem] '>
                    <NavLink to='signup' className='px-[1rem] font-[500] duration-300 rounded-md hover:bg-[#003F95] py-[.3rem] hover:bg-white  text-white hover:text-black'>Sign Up</NavLink>
                    <NavLink to='login' className='px-[1rem] font-[500] duration-300 rounded-md hover:bg-[#003F95] py-[.3rem] hover:bg-white  text-white hover:text-black'>Login</NavLink>
                </div>
            </div>

            <motion.div
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={sidebarVariants}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-20 md:hidden"
            >
                <div className="flex flex-col p-[1rem]">
                    <button onClick={toggleMenu} className="self-end mb-4 text-[#009F95]">
                        <X size={24} />
                    </button>
                    {navLinks.map(({ to, text }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                `text-[#4B5162] font-[400] cursor-pointer hover:underline duration-300 mb-2 ${isActive ? 'text-blue-500' : 'text-[#4B5162]'}`
                            }
                        >
                            {text}
                        </NavLink>
                    ))}
                    <>
                        <NavLink to='signup' className='px-[1rem]  bg-blue-300 text-white hover:text-white rounded-md hover:bg-[#003F95] py-[.3rem] mb-2'>Sign Up</NavLink>
                        <NavLink to='login' className='px-[1rem] rounded-md hover:bg-[#003F95] py-[.3rem] bg-blue-300 text-white mb-2'>Login</NavLink>
                    </>
                </div>
            </motion.div>
        </div>
    );
};

export default Navbar;
