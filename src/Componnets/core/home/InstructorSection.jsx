import React from 'react'
import Instructor from '../../../assets/Images/Instructor.png'
import HilightText from './HilightText'
import CTAbutton from './CTAbutton'
import { FaArrowRight } from 'react-icons/fa'

function InstructorSection() {
    return (
        <div className='mt-16 w-11/12'>
        <div className='flex items-center gap-20'>
            <div className='w-[50%]'>
                <img src={Instructor} alt="instuctor" className='shadow-white' />
            </div>

            <div className='w-[50%] flex flex-col gap-9'>
                <h1 className='text-4xl font-semibold w-[40%]'>Become an <HilightText text={"instuctor"} /></h1>
                <p className='font-medium text-[16px] w-[80%] text-richblack-300'>Instructors from around the world teach millions of students on studyNotion. we provide the tools and skills to teach what you love</p>

                <div className='w-fit'>
                    <CTAbutton active={true} linkto={"/signup"}>
                    <div className='flex items-center gap-2'>
                        Start Learning Today
                        <FaArrowRight />
                    </div>
                </CTAbutton>
                </div>
                
            </div>

        </div>
        </div>
    )
}

export default InstructorSection
