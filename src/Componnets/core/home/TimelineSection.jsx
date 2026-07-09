import { FaArrowRight } from "react-icons/fa";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import spider from "../../../assets/Images/TimelineImage.png"

export default function TimelineSection() {
    const timeline = [
        {
            logo: Logo1,
            heading: "Leadership",
            desc: "fully commited to the success company"
        },
        {
            logo: Logo2,
            heading: "Leadership",
            desc: "fully commited to the success company"
        },
        {
            logo: Logo3,
            heading: "Leadership",
            desc: "fully commited to the success company"
        },
        {
            logo: Logo4,
            heading: "Leadership",
            desc: "fully commited to the success company"
        }
    ]
    return (
        <div>
            <div className="flex gap-28 mb-15 mt-9 items-center ">
                <div className="flex flex-col gap-5 w-45%">
                    <div className="flex flex-col gap-5">
                        {timeline.map((element, idx) => {
                            return (
                                <div className="flex gap-6" key={idx}>
                                    {/* Left Side */}
                                    <div className="flex flex-col items-center">
                                        <div className="h-[50px] w-[50px] bg-white flex items-center justify-center">
                                            <img src={element.logo} alt="" />
                                        </div>

                                        {/* Dotted line */}
                                        {idx !== 3 && (
                                            <div className="w-0 border-l-2 border-dashed border-gray-400 h-6 mt-1"></div>
                                        )}
                                    </div>

                                    <div>
                                        <h2 className="text-18px font-semibold">{element.heading}</h2>
                                        <p className="text-base">{element.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>


                <div className="relative shadow-blue-200">
                        <img src={spider} alt="spider"
                        className="lg:h-120 object-cover shadow-white"/>

                        <div className="bg-green-900 text-white flex h-20 w-130 absolute uppercase translate-x-17 translate-y-[-40px]">
                            <div className="flex items-center px-11 gap-3 border-r border-green-250">
                                <p className="3xl font-bold">10</p>
                                <p className="text-green-300 text-sm">years of experience</p>
                            </div>

                            <div className="flex items-center px-11 gap-3">
                                <p className="3xl font-bold">250</p>
                                <p className="text-green-300 text-sm">type of cource</p>
                            </div>
                        </div>
                        
                </div>
            </div>
        </div>
    )
}