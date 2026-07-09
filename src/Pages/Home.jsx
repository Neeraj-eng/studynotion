import React from 'react'
import CTAbutton from '../Componnets/core/home/CTAbutton'
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../Componnets/core/home/HilightText"
import TimelineSection from "../Componnets/core/home/TimelineSection"
import LearningLanguageSection from '../Componnets/core/home/LearningLanguageSection';
import { Link } from 'react-router-dom';
import HilightText from '../Componnets/core/home/HilightText';
import banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../Componnets/core/home/CodeBlocks';
import Footer from '../Componnets/core/Footer/Footer'
import InstructorSection from '../Componnets/core/home/InstructorSection'
import ExpolreMore from '../Componnets/core/home/ExpolreMore';


function Home() {
    return (
        <div>

            {/* section 1 */}
            <div className='relative mx-auto flex flex-col w-11/12 items-center max-w-maxContent text-white justify-between
                        '>

                <Link to={"/signup"}>
                    <div className='group mt-16 p-1 text-richblack-200 font-bold transition-all duration-200 hover:scale-95 bg-richblack-800 mx-auto  w-fit
                                 rounded-full'>
                        <div className='group-hover:bg-richblack-900 flex gap-3 items-center rounded-full px-10 py-[5px] transition-all duration-200'>
                            <p>Become an Instructor</p>
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>

                <div className='text-4xl text-center mt-7 font-semibold '>
                    Emprove your future with <HilightText text={"Coding Skills"}/>
                </div>

                <div className='mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
                    with our online coding course you can learn at your on space, from anywhere in the world
                </div>

                <div className='flex gap-7 mt-8 '>
                    <CTAbutton active={true} linkTo={"/learn"}>Learn more</CTAbutton>
                    <CTAbutton active={false} linkTo={"book"}>Book a Demo</CTAbutton>
                </div>

                <div className='mx-3 h-70 w-140 my-12 shadow-blue-200'>
                    <video
                    muted
                    loop
                    autoPlay
                    >
                        <source src={banner} type="video/mp4"/>
                    </video>
                </div>

                <div className='w-11/12'>
                    <CodeBlocks
                    position={"lg:flex-row"}
                    heading={
                        <div className='text-4xl font-semibold'>
                            Unlock Your <HighlightText text={"codeing potential "}/>
                            with our online cources
                        </div>
                    }
                    subheading={
                        "our cources are designed and target by industry experts"
                    }
                    ctabtn1={{active:true,linkTo:"/signup",text:"try it yurself"}}
                    ctabtn2={{active:false,linkTo:"/signup",text:"learn more"}}

                    codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
                    codecolor={"text-yellow-100"}
                    />
                </div>

                <div className='w-11/12'>
                    <CodeBlocks
                    position={"lg:flex-row-reverse"}
                    heading={
                        <div className='text-4xl font-semibold'>
                            Start <HighlightText text={"codeing in seconds "}/>
                        </div>
                    }
                    subheading={
                        "Go ahead, give it a try, our hands on learning enviroment "
                    }
                    ctabtn1={{active:true,linkTo:"/signup",text:"Continue Lesson"}}
                    ctabtn2={{active:false,linkTo:"/signup",text:"learn more"}}

                    codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
                    codecolor={"text-yellow-100"}
                    />
                </div>

                <ExpolreMore/>

            </div>



            {/* section 2 */}
            
            <div className='bg-white text-richblack-700'>
                <div className='homepage_bg  px h-[310px]'>

                    <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5'>
                        <div className='h-[150px]'></div>
                        <div className='flex flex-row gap-7 text-white'>

                            <CTAbutton active={true} linkto={"/"}>
                                <div className='flex items-center gap-x-2'>
                                    Explore Full Catalog
                                    <FaArrowRight />
                                </div>
                            </CTAbutton>

                            <CTAbutton active={false} linkto={"/"}>
                                <div>
                                    Learn more
                                </div>
                            </CTAbutton>


                        </div>

                    </div>

                </div>

                <div className='mx-auto mt-4 w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5'>
                    <div className='flex gap-10'>

                        <div className='w-[45%] font-semibold text-4xl ml-20'>
                            Get the skills you need for a
                            <HighlightText text={" job that is in demand"} />
                        </div>

                        <div className='flex flex-col w-[40%] items-start'>
                            <div className='text-[18px]'>
                                The modern StudyNotion is the dictates its own terms.
                                Today to be a competitive specialist requires more than professional skills
                            </div>

                            <div className='mt-9'>
                                <CTAbutton active={true} linkto={"/"}>
                                    <div>Learn More</div>
                                </CTAbutton>
                            </div>
                        </div>
                    </div>

                    <TimelineSection />

                    <div className='mt-7 mb-6'>
                        <LearningLanguageSection />
                    </div>
                    
                </div>

            </div>

            {/* section 3 */}
            <div className='w-11/12 mx-auto max-w-maxContent justify-between  flex-col items-center gap-8 first-letter text-white'>
                <InstructorSection/>
                <h2 className='text-center text-4xl font-semibold mt-10 '>review from other Learners</h2>
            </div>

            {/* footer */}
            <div className='mt-5'>
                <Footer/>
            </div>


        </div>
    )
}

export default Home
