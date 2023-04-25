import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="px-8 lg:px-20 sticky top-0 backdrop-blur-xl z-[100]">
            <nav className="flex justify-between items-center py-6 font-monte z-[100] sticky top-0">
                <h1 className="text-3xl font-bold">Remine</h1>
                <ul
                    className={`lg:flex items-center lg:space-x-20 uppercase font-semibold text-base transition-all ${
                        show
                            ? "flex-col absolute top-20 items-start bg-white w-full inline-block py-4"
                            : "hidden"
                    }  lg:relative`}
                >
                    <li className="p-4 py-2  cursor-pointer  hover:text-white hover:bg-green-900 transition-transform hover:rounded-3xl hover:-translate-y-1">
                        Home
                    </li>
                    <li className="p-4 py-2  cursor-pointer hover:text-white hover:bg-green-900 transition-transform hover:rounded-3xl hover:-translate-y-1">
                        About
                    </li>
                    <li className="p-4 py-2  cursor-pointer hover:text-white hover:bg-green-900 transition-transform hover:rounded-3xl hover:-translate-y-1">
                        Contact
                    </li>
                    <li className="p-4 py-2  cursor-pointer text-white bg-green-900  transition-transform rounded-3xl hover:-translate-y-1">
                        Sign in
                    </li>
                </ul>
                <RxHamburgerMenu
                    className="lg:hidden text-3xl cursor-pointer"
                    onClick={() => setShow(!show)}
                />
            </nav>
        </div>
    );
};

export default Header;
