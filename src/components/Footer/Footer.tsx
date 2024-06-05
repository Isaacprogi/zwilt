import ZwiltDown from '../../assets/zwilt-down.svg'
import Logo from '../../assets/logo-zwl.svg'
import { useState } from 'react'

const Footer = () => {
    const [openMessage, setOpenMessage] = useState<boolean>(false)

    const handleOpenMessage = () => setOpenMessage(!openMessage)

    return (
        <section className='w-full flex flex-col  footer -mt-[4rem] diagonal-rectangle-top-only'>

            <div className="w-full mx-auto pt-[5rem] mb-[10rem] p-[1rem] max-w-[1300px]">
                <div className="diagonal-rectangle pb-[4rem] min-h-[385px] bg-[#525AA0] flex flex-col items-center justify-center">
                    <h1 className='font-[700] mt-[2rem] text-[2rem] sm:text-[3.4rem]  text-white'>
                        Need a job done, and done
                        <p> well? Get started</p>
                    </h1>
                    {
                        openMessage && <div className='w-full  w-full max-w-[570px]  flex flex-col items-center'>
                        <div className="flex flex-col  gap-[1rem] sm:flex-row">
                            <div className='flex-1 border-b  overflow-hidden flex h-[40px] items-center   mt-[3rem]'>
                                <span className='font-[600] text-white'>Enter your <span className='text-[#959595] font-[400]'></span></span>
                                <input placeholder='name' className='w-full flex-1 h-full bg-[#525AA0] outline-none px-[.2rem]' type="text" />
                            </div>
                            <div className=' flex-1 border-b  overflow-hidden flex h-[40px] items-center   mt-[3rem]'>
                                <span className='font-[600] text-white'>Enter your <span className='text-[#959595] font-[400]'></span></span>
                                <input placeholder='email' className='w-full flex-1 h-full bg-[#525AA0] outline-none px-[.2rem]' type="text" />
                            </div>
                        </div>
                        <div className=' w-full border-b  overflow-hidden flex h-[40px] items-center   mt-[3rem]'>
                            <input placeholder='Enter your message' className='w-full flex-1 h-full bg-[#525AA0] outline-none px-[.2rem]' type="text" />
                        </div>
                    </div>
                    }
                    <div onClick={handleOpenMessage} className='w-[73px] hover:bg-[#000000] bg-[#202229] duration-300 cursor-pointer mt-[1rem]  rounded-[29px] h-[73px] flex items-center justify-center'>
                        <img className={openMessage?"rotate-[270deg] duration-300":" duration-300"} src={ZwiltDown} alt="" />
                    </div>
                </div>

                <div className="flex flex-col mt-[8rem] sm:flex-row items-center sm:items-start gap-[4rem]">
                    <div className='w-full max-w-[284px] mt-[2rem] '>
                        <img src={Logo} alt="" />
                        <div className='text-white mt-[2rem] text-start'>
                            <p> We take complex hiring processes-and</p>
                            <p>simplify them. Connecting you to the world’s </p>
                            <p> highly qualified talent pool.</p>
                        </div>
                    </div>
                    <div className="flex-1 flex w-full  flex-col justify-center text-center sm:text-start text-white font-[500] text-[2rem] sm:text-[3.4rem]">
                        <p>Connecting the right people</p>
                        <p>to the right businesses.</p>
                    </div>
                </div>

                <div className="flex flex-col w-full items-center justify-center sm:justify-start mt-[4rem] sm:flex-row sm:items-start gap-[4rem]">
                    <div className='w-full max-w-[300px] flex flex-col items-center sm:items-start '>
                        <span className='font-[600] text-start text-[#5E606B]'>LINKS AND REDIRECTS</span>
                        <div className='flex flex-wrap justify-center sm:justify-start   gap-[1rem] mt-[1rem] text-[14px]'>
                            <div className='rounded-full h-[50px] px-[1rem] bg-[#292B34] hover:bg-[#5E606B] duration-300 cursor-pointer text-white  flex items-center justify-center  py-[1rem] px-[2rem]'>HIRE NOW</div>
                            <div className='rounded-full h-[50px] px-[1rem] bg-[#292B34] hover:bg-[#5E606B] duration-300 cursor-pointer text-white  flex items-center justify-center py-[.5rem] px-[2rem]'>APPLY NOW</div>
                        </div>
                    </div>
                    <div className="flex  flex-wrap sm:flex-nowrap justify-center sm:justify-between gap-4 md:gap-8 w-full">
                        <div className='text-start'>
                            <h1 className='text-[#5E606B] font-semibold text-[14px] '>PLATFORM</h1>
                            <div className='flex flex-col text-[#FFFFFF]  text-[18px]'>
                                <span className="hover:border-b h-[2rem] cursor-pointer border-[#5E606B]">Find work</span>
                                <span className="hover:border-b h-[2rem] cursor-pointer border-[#5E606B]">Find Talent</span>
                                <span className="hover:border-b h-[2rem] cursor-pointer border-[#5E606B]">Categories</span>
                                <span className="hover:border-b h-[2rem] cursor-pointer border-[#5E606B]">About Us</span>
                            </div>
                        </div>
                        <div className='text-start'>
                            <h1 className='text-[#5E606B] font-semibold text-[14px] '>CATEGORIES</h1>
                            <div className='flex flex-col text-[#FFFFFF]  text-[18px]'>
                                <span className="hover:border-b h-[2rem] cursor-pointer border-[#5E606B]">Data Science</span>
                                <span className="hover:border-b h-[2rem] cursor-pointer border-[#5E606B]">IT & Networking</span>
                                <span className="hover:border-b h-[2rem] cursor-pointer border-[#5E606B]">Web & Mobile</span>
                            </div>
                        </div>
                        <div className='text-start'>
                            <h1 className='text-[#5E606B] font-semibold text-[14px] '>HELP</h1>
                            <div className='flex flex-col text-[#FFFFFF]  text-[18px]'>
                                <span className="hover:border-b h-[2rem] cursor-pointer border-[#5E606B]">FAQ's</span>
                                <span className="hover:border-b h-[2rem] cursor-pointer border-[#5E606B]">Contact Us</span>
                            </div>
                        </div>
                        <div className='text-start'>
                            <h1 className='text-[#5E606B] font-semibold text-[14px] '>GET IN TOUCH@</h1>
                            <div className='flex flex-col text-[#FFFFFF]  text-[18px]'>
                                <span className="hover:border-b h-[2rem] cursor-pointer border-[#5E606B]">Instagram</span>
                                <span className="hover:border-b h-[2rem] cursor-pointer border-[#5E606B]">Linkedin</span>
                                <span className="hover:border-b h-[2rem] cursor-pointer border-[#5E606B]">Twitter</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className='border-t border-t-[#5E606B]   w-full'>
                <div className="w-full mx-auto flex flex-col sm:flex-row h-[2rem] items-center justify-between max-w-[1300px]">
                    <span className='text-white'>All rights reserved by Zwilt</span>
                    <div className='flex gap-[1rem] font-[600]  text-underline underline text-[#5E606B]'>
                        <span >Privacy Policy</span>
                        <span >Terms and condition</span>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Footer