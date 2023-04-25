import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="bg-green-950 px-20 py-8 font-monte">
            <div className="flex flex-col lg:flex-row justify-evenly gap-10 lg:gap-0">
                {/* USEFUL LINKS */}
                <div className="flex flex-col items-center  gap-6  text-white basis-1/3">
                    <h2 className="uppercase text-lg">Useful Links</h2>
                    <div className="flex flex-col gap-2 items-center ">
                        <div className="cursor-pointer transition-all hover:font-bold">
                            About us
                        </div>
                        <div className="cursor-pointer transition-all hover:font-bold">
                            Team Diary
                        </div>
                        <div className="cursor-pointer transition-all hover:font-bold">
                            Blog
                        </div>
                        <div className="cursor-pointer transition-all hover:font-bold">
                            Terms & Conditions
                        </div>
                        <div className="cursor-pointer transition-all hover:font-bold">
                            Privacy
                        </div>
                        <div className="cursor-pointer transition-all hover:font-bold">
                            Contact us
                        </div>
                    </div>
                </div>
                <div className="w-[100%] h-[1px] bg-white lg:mb-20 mx-auto opacity-30 lg:hidden"></div>
                {/* NEWSLETTER */}
                <div className="text-white flex flex-col items-center gap-8 basis-1/3">
                    <h2 className="uppercase text-lg">Newsletter</h2>
                    <input
                        type="text"
                        className="rounded-md px-6 py-2 text-black outline-none w-[350px] text-sm"
                        placeholder="Your Email Address "
                    />
                    <div className="uppercase border-[1px] p-3 px-5 rounded-full cursor-pointer  transition-colors hover:bg-white hover:text-green-950">
                        Subscribe Now
                    </div>
                </div>
                <div className="w-[100%] h-[1px] bg-white lg:mb-20 mx-auto opacity-30 lg:hidden"></div>
                {/* CONTACT */}
                <div className="text-white flex flex-col items-center gap-6 basis-1/3">
                    <h2 className="uppercase text-lg">Contact</h2>
                    <p className="text-center">
                        123, XYZ Road, <br />
                        Bengaluru, Karnataka, India
                    </p>
                    <div className="flex gap-6">
                        <BsInstagram className="text-xl text-white cursor-pointer transition-transform hover:scale-125" />
                        <BsTwitter className="text-xl text-white cursor-pointer transition-transform hover:scale-125" />
                        <FiLinkedin className="text-xl text-white cursor-pointer transition-transform hover:scale-125" />
                        <BsFacebook className="text-xl text-white cursor-pointer transition-transform hover:scale-125" />
                    </div>
                </div>
            </div>
            <div className="w-[100%] h-[1px] bg-white lg:mb-20 mx-auto opacity-30 mt-10 lg:hidden"></div>
            <p className="text-white font-medium text-center mt-14 lg:mt-8">
                © Copyright 2023 Remine
            </p>
        </footer>
    );
};

export default Footer;
