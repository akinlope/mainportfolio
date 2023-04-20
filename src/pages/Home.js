import { motion } from "framer-motion"

const Home = () => {
    return (
        <div className=" h-screen w-4/5 mx-auto ">
            <div className=" pt-40 p-10">
                <motion.p
                    animate={{
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0
                    }}
                    initial={{
                        x: -100,
                        y: 0
                    }} className=" text-brightTxt text-2xl font-bold">Hello, my name is</motion.p>
                <motion.p
                    animate={{
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0
                    }}
                    initial={{
                        x: -500,
                        y: 0
                    }}
                    className=" font-Stretch text-mainTxt text-7xl mt-4 font-extrabold">TOOLULOPE</motion.p>
                <motion.p
                    animate={{
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0
                    }}
                    initial={{
                        x: -300,
                        y: 0
                    }} className=" text-mainTxt text-7xl mt-4 font-extrabold">I build stunning websites.</motion.p>
                <motion.p
                    animate={{
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0
                    }}
                    initial={{
                        x: -200,
                        y: 0
                    }} className=" text-mainTxt text-2xl font-bold mt-4 ">I'm a frontend developer who specializes in <br /> building exceptional digital experience.</motion.p>

                <motion.div
                    animate={{
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0
                    }}
                    initial={{
                        x: -500,
                        y: 0
                    }} className=" mt-10 w-3/6 flex justify-between">
                    {/* <a href=""> */}
                        <button className="btn rounded-[5px]"><span>View Résumé</span></button>
                    {/* </a> */}
                    <a href="https://github.com/akinlope" target="_blank" rel="noreferrer">
                        <button className=" btn rounded-[5px]"><span>View GitHub</span></button>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}

export default Home;