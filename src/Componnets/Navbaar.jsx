import { Navlinks } from "../Data/NavLinks";


export default function Navbaar(){
    return(
        <div className="h-14 bg-black text-white flex justify-center ">
            <div className="w-9/12 bg-red-500 flex">
                <ul className="flex  items-center gap-x-6">
                    <li>
                        home
                    </li>
                    <li>
                        about
                    </li>
                </ul>
            </div>
        </div>
    )
}