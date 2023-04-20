import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid"
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className="h-screen flex justify-center items-center">
            <div>
                <p className=" font-extrabold text-7xl text-brightTxt">Oops, Sorry page not found!</p>
                <div className=" mt-20">
                    <div className=" flex justify-around">
                        <div className=" hover:bg-brightTxt rounded-[10px]">
                            <button onClick={()=> {navigate("/")}} className=" flex items-center font-bold text-2xl p-5 border-2 border-brightTxt rounded-[10px] "><HomeIcon width={25} className=" text-mainTxt" /><span className=" pl-1 text-mainTxt">Go Home</span></button>
                        </div>
                        <div className=" hover:bg-brightTxt rounded-[10px]">
                            <button onClick={()=> {navigate(-1)}} className=" flex items-center font-bold text-2xl p-5 border-2 border-brightTxt rounded-[10px]"><span className=" pr-1 text-mainTxt">Go Back</span><ArrowUturnLeftIcon width={25} className=" text-mainTxt" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;