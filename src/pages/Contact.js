import { motion } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { useState } from "react";
import { slideInContact, slideInForm } from "../Motion";

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangeMessasge = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            name: name,
            email: email,
            message: message
        });
    }

    return (
        <div className=" h-screen w-4/5 mx-auto">
            <div className=" pt-32 sm:pt-24 p-5">
                <motion.div variants={slideInContact} animate="animate" initial="initial"
                className=" flex-col justify-center text-center">
                    <p className=" font-nunito text-2xl sm:text-xl md:text-xl text-mainTxt mt-4 font-bold ">Fastest way to</p>
                    <p className="font-Stretch text-5xl sm:text-3xl md:text-3xl mt-2 font-extrabold text-brightTxt">COONTACT</p>
                    <p className=" font-nunito text-2xl sm:text-xl md:text-xl text-mainTxt mt-2 font-bold ">Me</p>
                </motion.div>


                <motion.form variants={slideInForm} animate="animate" initial="initial"  
                className=" flex  justify-center mt-10">
                    <div className=" w-3/5">
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input onChange={handleChangeName} type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brightTxt focus:outline-none focus:ring-0 focus:border-brightTxt peer" placeholder=" " required />
                                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brightTxt peer-focus:dark:text-brightTxt peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input onChange={handleChangeEmail} type="emial" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brightTxt focus:outline-none focus:ring-0 focus:border-brightTxt peer" placeholder=" " required />
                                <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brightTxt peer-focus:dark:text-brightTxt peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>
                        </div>
                        <textarea onChange={handleChangeMessasge} name="" id="" cols="" rows="4" className=" focus:outline-none mt-4 w-full bg-bgBlack text-sm text-mainTxt border-gray-500 resize-none border-b" placeholder=" Leave a message.." />
                        <div className=" flex justify-center mt-4">
                            <button onClick={handleSubmit} className=" sm:p-1 mt-3 p-2 pl-8 pr-8 flex items-center border-2 border-brightTxt rounded hover:bg-brightTxt hover:text-bgBlack text-xl text-brightTxt font-bold ease-in-out duration-300">
                                <span>SEND</span>
                                <PaperAirplaneIcon width={20} className=" sm:w-4 -rotate-45 ml-2" />
                            </button>
                        </div>
                    </div>
                </motion.form>
            </div>
        </div>
    );
}

export default Contact;