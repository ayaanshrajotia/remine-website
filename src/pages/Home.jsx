import Header from "../components/Header";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="px-8 lg:px-20">
                {/* SECTION 1 */}
                <section className="flex flex-col lg:flex-row lg:py-14 py-4 w-[100%] font-monte lg:mb-32">
                    <motion.section
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 100 }}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                        className="basis-[40%] flex flex-col gap-9 mt-4"
                    >
                        <h1 className="uppercase text-4xl lg:text-7xl font-bold">
                            Waste Recycle
                        </h1>
                        <p className="text-base lg:text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aliquam mollitia repellendus, quidem cumque
                            porro sapiente ipsa veritatis necessitatibus atque
                            numquam, molestiae ipsam blanditiis corrupti fuga
                            vero! Ducimus minima sint animi.
                        </p>
                        <a
                            href="#"
                            className="uppercase bg-green-900 font-medium self-start p-3 px-10 text-white rounded-full ease-out duration-100 drop-shadow-xl hover:-translate-y-1 hover:drop-shadow-md"
                        >
                            Read more
                        </a>
                    </motion.section>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 100 }}
                        transition={{
                            ease: "easeOut",
                            duration: 0.5,
                            delay: 0.2,
                        }}
                        className="lg:flex items-start justify-center grow relative  hidden md:visible"
                    >
                        <img
                            src="https://img.freepik.com/premium-vector/recycling-home-illustration_608781-658.jpg?w=2000"
                            alt=""
                            className="w-[90%] absolute -top-24 -z-10"
                        />
                    </motion.div>
                </section>
                {/* SECTION 2 */}
                <section className="flex flex-col lg:flex-row py-14 w-[100%] font-monte">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 100, delay: 0.4 }}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                        className="lg:flex justify-start grow relative hidden md:visible"
                    >
                        <img
                            src="https://img.freepik.com/free-vector/electricity-lighting-composition-with-characters-electricians-with-power-line-gear-lamp_1284-54213.jpg?w=2000"
                            alt=""
                            className="w-[90%] absolute -top-8 -z-10"
                        />
                    </motion.div>
                    <motion.section
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 100, delay: 0.8 }}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                        className="basis-[50%] flex flex-col gap-9 mt-4 lg:mb-32"
                    >
                        <h1 className="uppercase text-4xl lg:text-7xl font-bold">
                            Li Batteries
                        </h1>
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aliquam mollitia repellendus, quidem cumque
                            porro sapiente ipsa veritatis necessitatibus atque
                            numquam, molestiae ipsam blanditiis corrupti fuga
                            vero! Ducimus minima sint animi.
                        </p>
                        <a
                            href="#"
                            className="uppercase bg-green-900 font-medium self-start p-3 px-10 text-white rounded-full ease-out duration-100 drop-shadow-xl hover:-translate-y-1 hover:drop-shadow-md"
                        >
                            Read more
                        </a>
                    </motion.section>
                </section>
                <div className="w-[80vw] h-[1px] bg-slate-800 mb-10 lg:mb-20 mx-auto"></div>
                {/* SECTION 3 */}
                <section className="mb-32 ">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-10">Our Team</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                        <div className="flex items-center gap-4  w-[380px] p-2 transition-transform hover:-translate-y-1">
                            <img
                                src="https://i.pinimg.com/736x/46/d7/f1/46d7f1fd07df59ea7bcc7f52ec7e989f.jpg"
                                alt=""
                                className="rounded-full w-24 border-4 border-green-950"
                            />
                            <div>
                                Lorem ipsum dolor, sit amet
                                <br /> adipisicing elit. Harum totam sin dolor
                            </div>
                        </div>
                        <div className="flex items-center gap-4  w-[380px] p-2 transition-transform hover:-translate-y-1">
                            <img
                                src="https://i.pinimg.com/736x/46/d7/f1/46d7f1fd07df59ea7bcc7f52ec7e989f.jpg"
                                alt=""
                                className="rounded-full w-24 border-4 border-green-950"
                            />
                            <div>
                                Lorem ipsum dolor, sit amet
                                <br /> adipisicing elit. Harum totam sin dolor
                            </div>
                        </div>{" "}
                        <div className="flex items-center gap-4  w-[380px]  p-2 transition-transform hover:-translate-y-1">
                            <img
                                src="https://i.pinimg.com/736x/46/d7/f1/46d7f1fd07df59ea7bcc7f52ec7e989f.jpg"
                                alt=""
                                className="rounded-full w-24 border-4 border-green-950"
                            />
                            <div>
                                Lorem ipsum dolor, sit amet
                                <br /> adipisicing elit. Harum totam sin dolor
                            </div>
                        </div>
                        <div className="flex items-center gap-4  w-[380px] p-2 transition-transform hover:-translate-y-1">
                            <img
                                src="https://i.pinimg.com/736x/46/d7/f1/46d7f1fd07df59ea7bcc7f52ec7e989f.jpg"
                                alt=""
                                className="rounded-full w-24 border-4 border-green-950"
                            />
                            <div>
                                Lorem ipsum dolor, sit amet
                                <br /> adipisicing elit. Harum totam sin dolor
                            </div>
                        </div>
                        <div className="flex items-center gap-4  w-[380px] p-2 transition-transform hover:-translate-y-1">
                            <img
                                src="https://i.pinimg.com/736x/46/d7/f1/46d7f1fd07df59ea7bcc7f52ec7e989f.jpg"
                                alt=""
                                className="rounded-full w-24 border-4 border-green-950"
                            />
                            <div>
                                Lorem ipsum dolor, sit amet
                                <br /> adipisicing elit. Harum totam sin dolor
                            </div>
                        </div>
                        <div className="flex items-center gap-4  w-[380px] p-2 transition-transform hover:-translate-y-1">
                            <img
                                src="https://i.pinimg.com/736x/46/d7/f1/46d7f1fd07df59ea7bcc7f52ec7e989f.jpg"
                                alt=""
                                className="rounded-full w-24 border-4 border-green-950"
                            />
                            <div>
                                Lorem ipsum dolor, sit amet
                                <br /> adipisicing elit. Harum totam sin dolor
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
