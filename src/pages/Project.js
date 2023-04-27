import { motion } from "framer-motion";
import HoverVideoPlayer from "react-hover-video-player";
import { videoArr } from "../helpers"


const Project = () => {
    return (
        <div className=" h-screen pt-20 mx-auto w-full">
            <div className=" flex justify-center">
                <div>
                    <motion.div
                        animate={{
                            x: 0,
                            y: 0,
                            scale: 1,
                            rotate: 0,
                            transition: {
                                type: "spring",
                                stiffness: 500

                            }
                        }}
                        initial={{
                            x: 100,
                            y: 0
                        }}

                        className=" w-fit"
                    >
                        <p className="font-nunito text-2xl text-mainTxt mt-2 font-bold text-center" >Some of the</p>
                        <p className="font-Stretch text-5xl mt-2 font-extrabold text-brightTxt">PROOJECTS</p>
                        <p className="font-nunito text-2xl text-mainTxt mt-2 font-bold text-center">I've worked on.</p>
                    </motion.div>
                </div>
            </div>

            <div className=" w-full mt-20 flex justify-around">
                <div className=" grid grid-cols-2 w-3/5">

                    {
                        videoArr.map((elem, i) => {
                            return (
                                <div className=" flex justify-around">
                                    <div className=" bg-slate-100 pb-4 rounded-[10px] h-[350px] mb-10  w-80">
                                        <HoverVideoPlayer

                                            videoSrc={elem.url}
                                            pausedOverlay={
                                                <img
                                                    src={elem.thumbnail}
                                                    alt=" "
                                                    className=" w-full h-full object-cover rounded-t-[10px] "
                                                />
                                            }
                                            loadingOverlay={
                                                <div className="loading-overlay">
                                                    <div className="loading-spinner" />
                                                </div>
                                            }
                                        />
                                        {/* card information */}
                                        <div className=" text-center mt-2 mb-2">
                                            <p className=" text-2xl text-bgBlack font-bold">{elem.name}</p>
                                            <p className=" p-2 text-mainTxt">{elem.disc}</p>
                                        </div>
                                        {/* card button */}
                                        <div className=" flex justify-around mt-2">
                                            <a href={elem.link} target="_blank" rel="noreferrer">
                                                <button className=" bg-bgBlack p-2 pl-4 pr-4 text-mainTxt font-bold rounded-[10px]"><span>View site</span></button>
                                            </a>
                                            <a href={elem.visit} target="_blank" rel="noreferrer">
                                                <button className=" p-2 pl-4 pr-4 border border-bgBlack rounded-[10px] text-bgBlack font-bold"><span>View code</span></button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>


            </div>
        </div>
    );
}

export default Project;



