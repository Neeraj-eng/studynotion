import HilightText from "./HilightText"
import Konw_your_progress from "../../../assets/Images/Know_your_progress.png"
import compare from "../../../assets/Images/Compare_with_others.png"
import lessons from "../../../assets/Images/Plan_your_lessons.png"
import CTAbutton from "./CTAbutton"

export default function LearningLanguageSection() {
    return (
        <div className="flex flex-col gap-5 items-center">
            <div className="text-4xl font-semibold text-center">
                Your swiss knife for <HilightText text={"Learning any language"} />
            </div>
            <div className="text-center text-richblack-600 mx-auto text-base font-medium w-[70%]">Using spin making learning multiple languages esay. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</div>
            
            <div className="items-center mt-5 justify-center flex">
                <img src={Konw_your_progress}
                    alt="Know_your_progress"
                    className="object-contain -mr-32" />
                <img src={compare}
                    alt="compare"
                    className="object-contain" />
                <img src={lessons}
                    alt="lessons"
                    className="object-contain -ml-36" />
            </div>

            <div>
                <CTAbutton active={true} linkto={"/signup"}>
                    Learn More
                </CTAbutton>
            </div>
        </div>
    )
}