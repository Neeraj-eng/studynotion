import React, { useState } from 'react'
import HilightText from './HilightText';
import { HomePageExplore } from '../../../Data/homepage-explore';

function ExpolreMore() {
    const tabName = [
        "Free",
        "New to Coding",
        "Most Populer",
        "Skill Paths",
        "Career paths"
    ];

    const [course, setCourse] = useState(HomePageExplore[0].courses);
    const [currTab, setcurrTab] = useState(tabName[0]);
    const [currCard,setcurrCard] = useState(HomePageExplore[0].courses[0].heading)

    function setMyCard(element){
        setcurrTab(element);
        const result = HomePageExplore.filter((course) => course.tag === element);
        setCourse(result[0].courses);
        setcurrCard(result[0].courses[0].heading)

    }

    return (
        <div className='flex flex-col gap-3 items-center'>
            <h1 className='text-4xl text-center font-semibold'>Unlock the <HilightText text={"Power of Code"} /></h1>
            <p className='text-center text-richblack-300 text-sm text-[16px] mt-3'>Learn to Build Anything You Can imagein</p>

            <div className='flex mt-5 gap-3 rounded-full h-10 mb-5 border-richblack-100 px-1 py-1 bg-richblack-800'>
                {tabName.map((element, idx) => (
                    <div key={idx}
                        className={`text-[16px] flex items-center gap-2 transition-all duration-200 cursor-pointer px-7 py-2 rounded-full ${currTab === element ? "bg-richblack-900 font-medium" : "text-richblack-200"

                        }`} 
                    onClick={() => setMyCard(element)}
                    >
                            { element }
                    </div>
                    )
                )
                }
        </div>

        <div>
            {course.map((card,idx) => (
                <div>
                    
                </div>
            ))}
        </div>
        </div >
    )
}

export default ExpolreMore
