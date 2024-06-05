import React, { useState } from 'react';

// assets
import ZwiltDark from '../../assets/zwilt-icon-dark-mini.svg';
import ZwiltWhite from '../../assets/zwilt-white.svg';
import UnionLine from '../../assets/union-line.svg'
import Profiles from '../../assets/profile.svg'
import Badge from '../../assets/badge.svg'
import Categories from '../../assets/sub-categories.svg'

import Quatation from '../../assets/quotaiton-mark.svg'
import JASON from '../../assets/json.svg'
import GrooveWhiteText from '../../assets/groove-white-text.svg'
import GrooveBlueText from '../../assets/groove-blue-text.svg'
import ZwiltBlue from '../../assets/zwilt-blue.svg'
import PlayButtonGrey from '../../assets/play-button-gray.svg'
import PlayButtonBlue from '../../assets/play-button-blue.svg'
import OneGradient from '../../assets/1-gradient.svg'
import TwoGradient from '../../assets/2-gradient.svg'
import ThreeGradient from '../../assets/3-gradient.svg'
import BlueSelect from '../../assets/blue-select.svg'
import AnnieMarrie from '../../assets/annie-marie.svg'
import StarIcon from '../../assets/star-icon.svg'
import StarIconLess from '../../assets/star-icon-less.svg'
import ZwiltYellow from '../../assets/zwilt-yellow.svg'
import Messages from '../../assets/messages.svg'
import ItaMelo from '../../assets/ita-melo.svg'
import UserDiagonal from '../../assets/user-diagonal.svg'
import inLoop from '../../assets/in-loop.svg'
import UserLeftDiagonal from '../../assets/user-left-diagonal.svg'
import ActivityBar from '../../assets/activity-bar.svg'
import LoadingImage from '../../assets/loading-image.svg'
import EvaluationImage from '../../assets/evaluation-image.svg'
import NewTeam from '../../assets/new-team.svg'
import AnnieMarrieComplete from '../../assets/annie-marie-complete.svg'
import AnnieMarrieCard from '../../assets/annie-marie-card.svg'
import ZwiltTiba from '../../assets/zwilt-tba.svg'


//types
import { Job, EvaluationUser } from '../../utils/types';


//components
import Footer from '../../components/Footer/Footer';
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
import EvaluationCard from '../../components/EvaluationCard/EvaluationCard';


// data
import { jobCategories, evaluationUsers, developers, designers, frequestlyAskedQuestions } from '../../data/data';


const Home: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('IT & Development');

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
    };

    const categories: string[] = ['IT & Development', 'Design and Creative'];

    return (
        <div className='w-full '>
             {/* Main */}
            <section className="w-full flex items-center p-[1rem] min-h-[calc(100vh-93px)] flex-col">
                <div className='mt-[5rem]  text-center text-[2rem] sm:text-[3.4rem] font-[700] sm:leading-[4rem]'>
                    <span className='flex flex-col md:flex-row items-center'>
                        Finding the right fit
                        <span className='image-animation'>
                            <img src={ZwiltTiba} alt="" />
                            <img src={ZwiltTiba} alt="" />
                            <img src={ZwiltTiba} alt="" />
                        </span>
                        has
                    </span>
                    <p>never been easier</p>
                </div>

                <span className='text-center font-[400] mt-[1rem]'>
                    <p>With our rigorous pre-vetting process, you'll never have to</p>
                    <p>worry about finding the ideal candidate ever again.</p>
                </span>

                <div className='max-w-[570px] w-full pl-[1.3rem] overflow-hidden flex h-[74px] items-center rounded-lg border border-[#F0F0F0] mt-[3rem]'>
                    <span className='font-[600]'>Looking for </span>
                    <input placeholder='design' className='w-full flex-1 h-full outline-none px-[.2rem]' type="text" />
                    <button className='flex items-center hover:bg-[#FFE98A] duration-300 justify-center h-full w-[74px] rounded-lg bg-[#FFBE2E]'>
                        <img src={ZwiltDark} alt="" />
                    </button>
                </div>

                <div className='bg-[#F8F8F8]  w-full mt-[3rem] max-w-[920px] mx-auto'>

                    <div className="flex items-center bg-[#D2D2D2] w-full min-h-[2rem] sm:h-[2rem] rounded-[2rem]  w-[max-content] mx-auto justify-center gap-[1rem] ">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={activeCategory === category ? 'bg-[#C7F4C2]  duration-300 font-[500] flex items-center justify-center min-h-[44px] rounded-[2rem] p-[1rem]' : ' hover:bg-[#B0B0B0] duration-300 font-[500] flex items-center justify-center h-[44px] rounded-[2rem] p-[1rem]'}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-wrap mt-[2rem]">
                        {
                            activeCategory === 'IT & Development' ?
                                <>
                                    {
                                        jobCategories.ITandDevelopment.map((job: Job) => {
                                            return <div key={job.id} className="w-full hover:text-[#202229] text-[#959595] font-[500] duration-300 cursor-pointer md:w-1/2 lg:w-1/3 p-2">
                                                {job.jobTitle}
                                            </div>
                                        })

                                    }

                                    <div className="w-full cursor-pointer hover:underline font-[600] text-[1rem] md:w-1/2 lg:w-1/3 p-2">
                                        Explore more
                                    </div>

                                </> : <>
                                    {
                                        jobCategories.DesignandCreative.map((job: Job) => {
                                            return <div key={job.id} className="w-full hover:text-[#202229] text-[#959595] font-[500] duration-300 cursor-pointer md:w-1/2 lg:w-1/3 p-2">
                                                {job.jobTitle}
                                            </div>
                                        })

                                    }

                                    <div className="w-full duration-300  cursor-pointer hover:underline font-[600] text-[1rem] md:w-1/2 lg:w-1/3 p-2">
                                        Explore more
                                    </div>

                                </>

                        }

                    </div>

                </div>
                <img className='h-[132px] w-full mt-[4rem]' src={UnionLine} alt="" />
            </section>

               {/* Find talent */}

            <section className='w-full -mt-[4rem] diagonal-rectangle pb-[10rem] p-[1rem] sm:pb-[3rem] bg-[#EDEFFF] min-h-[60rem]'>
                <div className="w-full pt-[10rem] mx-auto max-w-[1300px]">

                    <h1 className=' mb-[6rem] text-center text-[2rem] sm:text-[3.4rem] font-[700] sm:leading-[4rem]'>
                        <p>Your one-stop marketplace for finding </p>
                        <p>the talent your business needs.</p>
                    </h1>

                    <div className="flex w-full flex-col items-start justify-center sm:justify-start lg:flex-row">
                        <div className='flex-1'>
                            <h2 className='text-[1.5rem] text-[#202229] font-[500] '>
                                <span>Find Dev and IT professionals to</span>
                                <span className='block'>scale your business.</span>
                            </h2>
                            <div className="grid mt-[2rem] gap-[1rem] sm:grid-cols-2">
                                <div className='flex w-full justify-start gap-[.6rem]'>
                                    <img src={Badge} alt="" />
                                    <span className='font-[400] text-[#202229CC]  text-[16px]'>899 skills</span>
                                </div>
                                <div className='flex w-full justify-start gap-[.6rem]'>
                                    <img src={Categories} alt="" />
                                    <span className='font-[400] text-[#202229CC]  text-[16px]'>45 sub-Categories skills</span>
                                </div>
                                <div className='flex w-full justify-start gap-[.6rem]'>
                                    <img src={Profiles} alt="" />
                                    <span className='font-[400] text-[#202229CC]  text-[16px]'>1011 Profiles</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex-1 rounded-md mt-[1rem] overflow-hidden p-4 bg-white'>
                            <h1 className='text-base font-semibold'>IT &amp; Development</h1>
                            <div className="flex flex-wrap mt-4 gap-4 justify-center items-center">
                                {developers.map((developer, index) => (
                                    <div key={index} className='w-24 h-24 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center'>
                                        <img className="max-w-full max-h-full" src={developer.icon} alt="" />
                                    </div>
                                ))}
                                <div className='w-24 h-24 cursor-pointer bg-gray-200 hover:bg-gray-100 duration-300 rounded-full overflow-hidden flex items-center justify-center'>
                                    <img className="max-w-full max-h-full" src={ZwiltDark} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="flex w-full mt-[2rem] flex-col items-start justify-start sm:justify-start lg:flex-row">
                        <div className='flex-1'>
                            <h2 className='text-[1.5rem] text-[#202229] font-[500] '>
                                <span>Explore Creative Individuals with a </span>
                                <span className='block'>keen eye for detail</span>
                            </h2>
                            <div className="grid mt-[2rem] gap-[1rem] sm:grid-cols-2">
                                <div className='flex w-full justify-start gap-[.6rem]'>
                                    <img src={Badge} alt="" />
                                    <span className='font-[400] text-[#202229CC]  text-[16px]'>899 skills</span>
                                </div>
                                <div className='flex w-full justify-start gap-[.6rem]'>
                                    <img src={Categories} alt="" />
                                    <span className='font-[400] text-[#202229CC]  text-[16px]'>45 sub-Categories skills</span>
                                </div>
                                <div className='flex w-full justify-start gap-[.6rem]'>
                                    <img src={Profiles} alt="" />
                                    <span className='font-[400] text-[#202229CC]  text-[16px]'>1011 Profiles</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex-1 mt-[1rem]  rounded-md overflow-hidden p-[1rem] bg-white'>
                            <h1 className='text-[16px] font-[600]'>IT & Development</h1>
                            <div className="flex flex-wrap mt-4 gap-4 justify-center items-center">
                                <div className='w-24 h-24 hover:bg-gray-100 duration-300 cursor-pointer bg-gray-200 rounded-full overflow-hidden flex items-center justify-center'>
                                    <img className="max-w-full max-h-full" src={ZwiltDark} alt="" />
                                </div>
                                {designers.map((developer, index) => (
                                    <div key={index} className='w-24 h-24 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center'>
                                        <img className="max-w-full max-h-full" src={developer.icon} alt="" />
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                    <div className="flex flex  flex-col sm:flex-row mb-[3rem] sm:flex-start gap-[1rem] items-center mt-[2rem]">
                        <div className="flex-1 group flex items-center gap-[.6rem]">
                            <div className='w-[74px]  bg-[#202229] hover:bg-[#000000] duration-300 cursor-pointer h-[74px] rounded-full overflow-hidden flex items-center justify-center'>
                                <img src={ZwiltWhite} alt="" />
                            </div>
                            <span className='font-[500] group-hover:underline text-[1.4rem]'>Explore More</span>
                        </div>
                        <div className="flex-1 flex   items-center gap-[.7rem] ">
                            <span className='font-[700] text-[1.4rem]'>30 More</span>
                            <span className='text-[#202229CC] text-[1.4rem]'>to explore</span>
                        </div>

                    </div>
                </div>
            </section>

            {/* How it worked */}

            <section className='w-full bg-[#202229] pb-[3rem] -mt-[4rem] diagonal-rectangle  min-h-[40rem]'>
                <div className="w-full mx-auto p-[1rem] max-w-[1300px]">
                    <div className="flex  items-center justify-between">
                        <span></span>
                        <img className='self-start' src={Quatation} alt="" />
                    </div>
                    <div className="flex flex-col md:flex-row pt-[5rem]">
                        <div className="flex-1">
                            <div className='flex text-white text-[2rem] sm:text-[3.5rem] leading-[4.5rem] font-[700]  flex-col'>
                                <h1>How it worked</h1>
                                <div className='flex gap-[1rem] items-center'><span >For Jason</span> <img className='rounded-full overflow-hidden object-cover h-[57px] w-[57px]' src={JASON} alt="" /> <span >at</span></div>
                                <p className='mt-[1.5rem]'><img src={GrooveBlueText} alt="" /></p>
                            </div>
                            <p className='mt-[2rem] text-white'>Zwilt enabled us to deliver on time and </p>
                            <p className='text-white'>they’ve been heavy hitters in our corner since.</p>
                            <div className='flex gap-[1rem] mt-[3rem]'>
                                <div className='w-[74px] bg-white  h-[74px] rounded-[1.4rem] overflow-hidden flex items-center justify-center'>
                                    <img src={ZwiltBlue} alt="" />
                                </div>
                                <div className='w-[74px] bg-white  h-[74px] rounded-[1.4rem] overflow-hidden flex items-center justify-center'>
                                    <img src={ZwiltBlue} alt="" className="transform scale-x-[-1]" />
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 mt-[5rem]">
                            <div className='flex flex-col sm:flex-row gap-[1rem]'>
                                <span className='w-[99px] rounded-[1.4rem] flex items-center justify-center bg-[#AF7CFF] h-[99px]'>
                                    <img src={GrooveWhiteText} alt="" />
                                </span>
                                <span className='flex flex-col'>
                                    <h1 className='font-[600] text-white text-[2.1rem]'>Jason Makki</h1>
                                    <span className='font-[400] text-[#C6C4C4] text-[16px]'>Engineer at GROOVE</span>
                                    <span className='font-[400] text-[#C6C4C4] text-[16px]'>San Francisco</span>
                                </span>
                            </div>

                            <div className='text-white mt-[3rem]'>
                                <p>Zwilt enabled us to deliver on time and they’ve </p>
                                <p>been heavy hitters in our corner since. Zwilt </p>
                                <p>enabled us to deliver on time and they’ve been </p>
                                <p>heavy hitters in our corner since.Zwilt enabled us</p>
                                <p>to deliver on time and they’ve been heavy hitters</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                  {/* How we ensure */}

            <section className='w-full'>
                <div className="w-full mx-auto p-[1rem] max-w-[1300px]">
                    <div className='font-[700] text-center sm:text-start mt-[4rem] text-[#202229] text-[2rem] sm:text-[3.4rem]'>
                        <p>How we ensure you're </p>
                        <p>in good hands</p>
                    </div>
                    <div className='mt-[2rem] text-[#1E1515CC]'>
                        <p>With our comprehensive screening process, we hand-pick highly</p>
                        <p>skilled candidates so you can onboard them in a matter of days.</p>
                    </div>

                    <div className='flex  text-[#202229] flex-col mt-[3rem] gap-[1rem]'>
                        <div className="flex p-[1rem] rounded-md w-full max-w-[635px] border border-[#F0F0F0] items-center gap-[1rem]">
                            <img src={PlayButtonGrey} alt="" />
                            <div className='flex gap-[.5rem] font-[600]'>
                                <span>Step 1:</span>
                                <span>Resume Screening</span>
                            </div>
                        </div>
                        <div className="flex flex-col p-[1rem] shadow-lg rounded-md w-full max-w-[635px] border border-[#F0F0F0] items-center gap-[1rem]">
                            <div className="flex w-full gap-[1rem] items-center">
                                <img src={PlayButtonBlue} alt="" />
                                <div className='flex gap-[.5rem] font-[600]'>
                                    <span>Step 1:</span>
                                    <span>Video Interview</span>
                                </div>
                            </div>
                            <div className='mt-[1rem] font-[600]'>
                                <p>Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.</p>
                            </div>
                        </div>
                        <div className="flex p-[1rem] rounded-md w-full max-w-[635px] border border-[#F0F0F0] items-center gap-[1rem]">
                            <img src={PlayButtonGrey} alt="" />
                            <div className='flex gap-[.5rem] font-[600]'>
                                <span>Step 1:</span>
                                <span>Technical Evaluation</span>
                            </div>
                        </div>
                        <div className="flex p-[1rem] rounded-md w-full max-w-[635px] border border-[#F0F0F0] items-center gap-[1rem]">
                            <img src={PlayButtonGrey} alt="" />
                            <div className='flex gap-[.5rem] font-[600]'>
                                <span>Step 1:</span>
                                <span>Application Review</span>
                            </div>
                        </div>
                        <div className="flex p-[1rem] rounded-md w-full max-w-[635px] border border-[#F0F0F0] items-center gap-[1rem]">
                            <img src={PlayButtonGrey} alt="" />
                            <div className='flex gap-[.5rem] font-[600]'>
                                <span>Step 1:</span>
                                <span>Let's get to work</span>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* Start your journey */}

            <section className='w-full'>
                <div className="w-full mx-auto p-[1rem] max-w-[1300px]">
                    <h1 className='text-[3.4rem] text-center font-[700]'>
                        Start your journey today.
                    </h1>

                    {/* Next performer  */}

                    <div className="w-full bg-[#EDEFFF] sm:h-[25rem] mt-12 px-4 diagonal-rectangle overflow-hidden flex flex-col md:flex-row ">
                        <div className='flex-1 flex flex-col  md:flex-row md:mt-12 md:flex md:gap-4 content'>
                            <img className='h-20  mt-[1rem] ' src={OneGradient} alt="" />
                            <div className="flex flex-col">
                                <h1 className='font-semibold text-2xl md:text-3xl'>
                                    Find your next star
                                    <span className="block">performer.</span>
                                </h1>
                                <div className='mt-4 md:mt-6'>
                                    <p>Explore the vast Zwilt marketplace to find the candidate</p>
                                    <p>that meets your needs.</p>
                                </div>
                                <div className="mt-6 md:mt-8 flex items-center gap-2">
                                    <div className='w-12 h-12 md:w-16 md:h-16 bg-gray-800 rounded-[20px] overflow-hidden flex items-center justify-center'>
                                        <img src={ZwiltWhite} alt="" />
                                    </div>
                                    <span className='font-semibold text-lg md:text-xl'>Join now</span>
                                </div>
                            </div>
                        </div>
                        <img className='mt-[1rem]' src={EvaluationImage} alt="" />
                    </div>


                    {/* Evaluation section */}

                    <div className="w-full bg-[#FFF7E1] mt-12 pb-[1rem] sm:pb-0  sm:h-[25rem] px-4 diagonal-rectangle overflow-hidden flex flex-col md:flex-row ">
                        <div className='flex-1 flex flex-col md:flex-row md:mt-12 md:flex md:gap-4 content'>
                            <img className='h-20 mt-[1rem] ' src={TwoGradient} alt="" />
                            <div className="flex flex-col">
                                <h1 className='font-semibold text-2xl md:text-3xl'>
                                    Evaluate to your
                                    <span className="block">heart's content.</span>
                                </h1>
                                <div className='mt-4 md:mt-6'>
                                    <p>Assess the candidate through work history, transparent</p>
                                    <p>tests and video interviews.</p>
                                </div>
                                <div className="mt-6 md:mt-8 flex items-center gap-2">
                                    <div className='w-12 h-12 md:w-16 md:h-16 bg-gray-800 rounded-[20px] overflow-hidden flex items-center justify-center'>
                                        <img src={ZwiltWhite} alt="" />
                                    </div>
                                    <span className='font-semibold text-lg md:text-xl'>Browse More</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row mt-[1rem] flex-1 justify-end  gap-[1.5rem] items-center'>
                            {evaluationUsers.length > 0 && (
                                <EvaluationCard user={evaluationUsers[0]} />
                            )}
                            <div className="flex flex-col w-full sm:w-[max-content] gap-[1.5rem] sm:gap-[1rem]   sm:mt-[8rem] flex-col">
                                {evaluationUsers.slice(1).map((user: EvaluationUser, index: number) => (
                                    <EvaluationCard key={index} user={user} />
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* Team section */}

                    <div className="w-full bg-[#F3F3F3] sm:h-[25rem] mt-12 px-4 diagonal-rectangle overflow-hidden flex flex-col md:flex-row ">
                        <div className='flex-1 flex flex-col md:flex-row md:mt-12 md:flex md:gap-4 content'>
                            <img className='h-20  mt-[1rem] ' src={ThreeGradient} alt="" />
                            <div className="flex flex-col">
                                <h1 className='font-semibold text-2xl md:text-3xl'>
                                    Start building
                                    <span className="block">your team.</span>
                                </h1>
                                <div className='mt-4 md:mt-6'>
                                    <p>Onboard your candidate right away and start</p>
                                    <p>creating the next big thing.</p>
                                </div>
                                <div className="mt-6 md:mt-8 flex items-center gap-2">
                                    <div className='w-12 h-12 md:w-16 md:h-16 bg-gray-800 rounded-[20px] overflow-hidden flex items-center justify-center'>
                                        <img src={ZwiltWhite} alt="" />
                                    </div>
                                    <span className='font-semibold text-lg md:text-xl'>Join Now</span>
                                </div>
                            </div>
                        </div>
                        <img className='mt-[1rem]' src={NewTeam} alt="" />
                    </div>
                </div>
            </section>

                {/* Carousel display */}

            <section className='w-full overflow-hidden'>
                <div className="w-full mb-[1rem] flex gap-[4rem]  mx-auto p-[1rem] max-w-[1300px]">
                    <CarouselComponent>
                        <div className="flex  flex-col  w-full  text-start min-w-[40rem]">
                            <div className='font-[700] mt-[4rem] text-[#202229] text-[54px]'>
                                <p>Why choose Zwilt? </p>
                            </div>
                            <div className=' text-[22px] font-[400] text-[#202229CC]'>
                                <p>We take complex hiring  </p>
                                <p> processes -and simplify them.</p>
                                <p>Connecting you to the world’s</p>
                                <p> highly qualified talent pool.</p>

                            </div>
                        </div>

                        <div className="w-full  flex mt-[4rem] min-w-[100rem]">
                            <div className="flex-1 min-w-[591px]">
                                <div className='text-[3.4rem] font-[700]'>
                                    <h1>Onboard without </h1>
                                    <h1>the rist</h1>
                                </div>

                                <div className='mt-[2rem] font-[400] text-[22px] text-[#202229CC]' >
                                    <div className='flex gap-[1rem]'>
                                        <img src={BlueSelect} alt="" />
                                        <span className='text-[#202229CC]'>We pick the best for you to select.</span>
                                    </div>
                                    <div className='flex gap-[1rem]'>
                                        <img src={BlueSelect} alt="" />
                                        <span className='text-[#202229CC]'>Thousands of vetted candidates in dozens of categories..</span>
                                    </div>
                                    <div className='flex gap-[1rem]'>
                                        <img src={BlueSelect} alt="" />
                                        <span className='text-[#202229CC]'>Risk-free resource swapping for the best fit..</span>
                                    </div>

                                </div>

                                <div className="mt-[2rem] flex items-center h-[max-content]  gap-[.6rem]">
                                    <div className='w-[74px] bg-[#202229] h-[74px] rounded-[1.4rem] overflow-hidden flex items-center justify-center'>
                                        <img src={ZwiltWhite} alt="" />
                                    </div>
                                    <span className='font-[500] text-[1.4rem]'>Learn More</span>
                                </div>


                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <div className="relative w-[282.3px] h-[164px]">
                                        <img className='w-full ml-[3rem] rounded-md h-full object-cover' src={AnnieMarrieComplete} alt="" />
                                        <img className='absolute min-w-[300px] flex flex-col items-center top-[6rem] left-[50%]' src={AnnieMarrieCard} alt="" />
                                    </div>
                                    <img src={StarIcon} alt="" />
                                </div>

                                <div className='w-full flex  gap-[2rem]'>
                                    <div className='shadow-lg flex-2 min-w-[347px] overflow-hidden p-[1rem] mt-[10rem]'>
                                        <span>UI/UX Designer</span>
                                        <span className='flex text-[14px] font-[500] items-center'>5.0
                                            <span><img src={StarIconLess} alt="" /></span>
                                            15</span>

                                        <div className="flex mt-[1rem] gap-[1rem]">
                                            <div className='px-[.5rem] py-[.3rem] text-center rounded-full bg-[#E2E2E2]  text-[8.28px] font-[700]'>3d Modelling</div>
                                            <div className='px-[.5rem] py-[.3rem] text-center rounded-full bg-[#E2E2E2]  text-[8.28px] font-[700]'>Character Rigging</div>

                                        </div>
                                        <div className='w-full mt-[.5rem] max-w-[347px] '>
                                            <p>I am working in design industry from</p>
                                            <p>3+ years as a design lead</p>
                                        </div>
                                    </div>
                                    <div className="shadow-lg flex-1 hover:z-[10] overflow-hidden p-[1rem] mt-[8rem] max-w-[280px] h-[max-content]">
                                        <p className='font-[400] text-[#181818] '>I am working in design industry from 3+ years </p>
                                        <p>as a MERN Stack Developer</p>
                                        <div className="flex items-center justify-between">
                                            <img className='w-[39px] h-[39px] rounded-full object-cover' src={AnnieMarrie} alt="" />
                                            <div className='flex gap-[.3rem] mt-[1rem] items-center'>
                                                <span className='text-[9.94px] text-[#1C1C2580] font-[700]'>Availability</span>
                                                <span className='border flex items-center justify-center px-[.5rem] py-[.3rem] rounded-full'>9 hours</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full  flex mt-[4rem] min-w-[100rem]">
                            <div className="flex-1 min-w-[591px]">
                                <div className='text-[3.4rem] font-[700]'>
                                    <h1>An Open</h1>
                                    <h1>Book</h1>
                                </div>

                                <div className='mt-[2rem] font-[400] text-[22px] text-[#202229CC]' >
                                    <div className='flex gap-[1rem]'>
                                        <img src={BlueSelect} alt="" />
                                        <span className='text-[#202229CC]'>Easy and transparent one-to-one chat with candidates.</span>
                                    </div>
                                    <div className='flex gap-[1rem]'>
                                        <img src={BlueSelect} alt="" />
                                        <span className='text-[#202229CC]'>Simple and convenient payment methods.</span>
                                    </div>
                                    <div className='flex gap-[1rem]'>
                                        <img src={BlueSelect} alt="" />
                                        <span className='text-[#202229CC]'>Review past ratings</span>
                                    </div>

                                </div>

                                <div className="mt-[2rem] flex items-center h-[max-content]  gap-[.6rem]">
                                    <div className='w-[74px] bg-[#202229] h-[74px] rounded-[1.4rem] overflow-hidden flex items-center justify-center'>
                                        <img src={ZwiltWhite} alt="" />
                                    </div>
                                    <span className='font-[500] text-[1.4rem]'>Learn More</span>
                                </div>


                            </div>
                            <div className="flex-1">
                                <div className='flex items-start  justify-center  min-w-[max-content]'>
                                    <img src={ItaMelo} alt="" />
                                    <img src={Messages} className='min-w-[352px]' alt="" />
                                    <img className='mt-[25%] ' src={UserDiagonal} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="w-full  flex mt-[4rem] min-w-[100rem]">
                            <div className="flex-1 min-w-[591px]">
                                <div className='text-[3.4rem] font-[700]'>
                                    <h1>Stay in the</h1>
                                    <h1>loop</h1>
                                </div>

                                <div className='mt-[2rem] font-[400] text-[22px] text-[#202229CC]' >
                                    <div className='flex gap-[1rem]'>
                                        <img src={BlueSelect} alt="" />
                                        <span className='text-[#202229CC]'>rack your staff activity down to every minute with screenshots.</span>
                                    </div>
                                    <div className='flex gap-[1rem]'>
                                        <img src={BlueSelect} alt="" />
                                        <span className='text-[#202229CC]'>Comprehensive timesheet data to process payments.</span>
                                    </div>
                                    <div className='flex gap-[1rem]'>
                                        <img src={BlueSelect} alt="" />
                                        <span className='text-[#202229CC]'>Risk-free resource swapping for the best fit..</span>
                                    </div>

                                </div>

                                <div className="mt-[2rem] flex items-center h-[max-content]  gap-[.6rem]">
                                    <div className='w-[74px] bg-[#202229] h-[74px] rounded-[1.4rem] overflow-hidden flex items-center justify-center'>
                                        <img src={ZwiltWhite} alt="" />
                                    </div>
                                    <span className='font-[500] text-[1.4rem]'>Learn More</span>
                                </div>

                            </div>
                            <div className=" ">
                                <img className='mb-[2rem]' src={ActivityBar} alt="" />
                                <div className='flex  -mt-[7rem] min-w-[max-content]'>
                                    <img className='mt-[60%] ' src={UserLeftDiagonal} alt="" />
                                    <img src={inLoop} className='min-w-[352px]' alt="" />
                                    <img className='mt-[25%] ' src={UserDiagonal} alt="" />
                                </div>
                                <img className='ml-[15rem]' src={LoadingImage} alt="" />
                            </div>
                        </div>
                    </CarouselComponent>
                </div>
            </section>
                
                {/* Frequently asked questions */}

            <section className='w-full diagonal-rectangle bg-[#F3F3F3]'>
                <div className="w-full mx-auto p-[1rem] max-w-[1300px]">
                    <h1 className='font-[700] text-center mb-[2rem] text-[2rem] sm:text-[3.4rem] text-[#202229]'>
                        Frequently asked questions
                    </h1>
                </div>
                <div className="flex flex-col mx-auto p-[1rem] max-w-[1300px] pb-[3rem]">
                    {
                        frequestlyAskedQuestions.map((question) => {
                            return <div key={question.id} className='w-full group relative hover:bg-[#E8E8E8] duration-300 cursor-pointer border-t flex h-[max-content] sm:h-[4rem] border-t'>

                                <div className='absolute hidden group-hover:block top-1/2 right-[4rem] -translate-y-1/2'>
                                    <img src={ZwiltYellow} alt="" />
                                </div>

                                <div className="w-full border-r flex items-center justify-center max-w-[230px]">
                                    {
                                        question.general && 'General'
                                    }
                                </div>



                                <div className="w-full flex border-r items-center text-center justify-center max-w-[260px]">
                                    {question.joiningProcess && 'Joining Process'}
                                </div>

                                <div className="flex-1 text-start flex items-center justify-start md:ml-[6rem] p-[1rem]">
                                    {
                                        question.question
                                    }
                                </div>
                            </div>
                        })
                    }
                </div>
            </section>


            {/* footer */}
            <Footer />

        </div>
    );
};

export default Home;
