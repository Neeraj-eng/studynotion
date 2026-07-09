import React from 'react'
import { Link } from 'react-router-dom'

function CTAbutton({ children, active, linkto }) {
    return (
        <Link to={linkto}>
            <div className={`text-[13px] px-6 py-3 rounded-md font-bold text-center 
                             ${active ? "bg-yellow-300 text-black" : "bg-richblack-800 text-white"} hover:scale-105 transition-all duration-300`}>
                    {children}
            </div>
        </Link>
    )
}

export default CTAbutton
