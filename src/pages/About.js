import man from "../image/man.jpeg";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa"
import { BsPhone, BsWhatsapp } from "react-icons/bs"


const About = () => {
    return (
        <div className=" h-screen w-4/5 mx-auto  ">
            <div className=" flex pt-32 justify-center">
                <motion.div
                    animate={{
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0,
                        
                    }}
                    initial={{
                        x: 0,
                        y: 0
                    }}
                    className="">
                    <p className=" font-nunito text-2xl text-mainTxt mt-2 font-bold text-center">Brief Information</p>
                    <p className=" font-Stretch text-5xl mt-2 font-extrabold text-brightTxt">ABOOUT</p>
                    <p className=" font-nunito text-2xl text-mainTxt mt-2 font-bold text-center ">Me</p>
                </motion.div>
            </div>


            <div className="flex justify-between mt-10">
                {/* owner's progile */}
                <motion.div
                    animate={{
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0,
                        transition: {
                            type: "spring",
                            stiffness: 300
                            
                        }
                    }}
                    initial={{
                        x: 300,
                        y: 0
                    }}
                    className="flex w-1/2 bg-slate-200 rounded-md p-2 pb-10">
                    {/* img */}
                    <div className="">
                        <img className=" rounded-md" src={man} alt="" />
                    </div>
                    {/* write up */}
                    <div className="">
                        <div className=" p-3 break-words">
                            <p className="font-semibold p-3 text-center">My name is AKINRIMISI TOLULOPE SOLOMON, I'm from Lagos state Nigeria. I'm a web developer whos specializes in developing stunnimg websites. I've been working as a web developer since 2022 till date and I have worked on numerous projects with different companies and individuals.</p>
                        </div>
                        {/* icons */}
                        <div className=" flex justify-around">
                            <a href="tel:+2349035680981">
                                <div className=" cursor-pointer">
                                    <div className=" flex justify-center">
                                        <BsPhone width={30} />
                                    </div>
                                    <p>Call me</p>
                                </div>
                            </a>
                            <a href="mailto:akinrimisitt@gmail.com">
                                <div className=" cursor-pointer">
                                    <div className=" flex justify-center">
                                        <FaEnvelope width={30} />
                                    </div>
                                    <p>Mail me</p>
                                </div>
                            </a>
                            <a href="https://wa.me/+2349035680981?text=Hi,%20I%20will%20be%20needing%20your%20experties%20in...">
                                <div className=" cursor-pointer">
                                    <div className=" flex justify-center">
                                        <BsWhatsapp width={30} />
                                    </div>
                                    <p>Chat me</p>
                                </div>
                            </a>
                            {/* <div>

                            </div> */}
                        </div>
                    </div>
                </motion.div>
                {/* technologies */}
                <motion.div
                    animate={{
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0,
                        transition: {
                            type: "spring",
                            stiffness: 300
                            
                        }
                    }}
                    initial={{
                        x: -300,
                        y: 0
                    }}
                    className=" w-5/12 bg-slate-200 rounded-md p-2 pb-10">
                    <div className=" flex justify-center pt-2 font-bold mt-5">
                        <p>SKILLS</p>
                    </div>

                    {/* each front & back end */}
                    <div className=" flex justify-around">
                        <div>
                            <p className=" font-bold mt-5 mb-5">FRONT-END</p>
                            <div className=" flex items-center">
                                <div className=" w-3 h-3 bg-[#ffc3a0] mr-2 rounded-[10px]"></div>
                                <p>HTML</p>
                            </div>
                            <div className=" flex items-center">
                                <div className=" w-3 h-3 bg-[#753a88] mr-2 rounded-[10px]"></div>
                                <p>CSS3</p>
                            </div>
                            <div className=" flex items-center">
                                <div className=" w-3 h-3 bg-[#6dd5ed] mr-2 rounded-[10px]"></div>
                                <p>Tailwind</p>
                            </div>
                            <div className=" flex items-center">
                                <div className=" w-3 h-3 bg-[#734b6d] mr-2 rounded-[10px]"></div>
                                <p>React</p>
                            </div>
                            <div className=" flex items-center">
                                <div className=" w-3 h-3 bg-[#d6ae7b] mr-2 rounded-[10px]"></div>
                                <p>JavaScript</p>
                            </div>
                        </div>


                        <div>
                            <p className=" font-bold mt-5 mb-5">BACK-END</p>
                            <div className=" flex items-center">
                                <div className=" w-3 h-3 bg-[#19547b] mr-2 rounded-[10px]"></div>
                                <p>Firebase</p>
                            </div>
                            <div className=" flex items-center">
                                <div className=" w-3 h-3 bg-[#004e92] mr-2 rounded-[10px]"></div>
                                <p>Node.js</p>
                            </div>
                            <div className=" flex items-center">
                                <div className=" w-3 h-3 bg-[#dd2476] mr-2 rounded-[10px]"></div>
                                <p>Python</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;