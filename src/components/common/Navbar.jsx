import { FaSun, FaMoon } from "react-icons/fa";
import useDarkMode from "../Custom hooks/useDarkMode";

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <div className="w-full flex justify-center items-center">
            <nav className=" w-full-800 border-gray-200 dark:bg-gray-900  ">
                <div className="flex justify-center lg:gap-x-64 items-center mx-auto lg:ml-80 md:ml-64">
                    <div className="text-sm lg:text-4xl md:text-3xl sm:text-lg kalam py-5 ml-2 lg:ml-24 sm:ml-16 dark:text-white w-auto animate-fade-in-down">
                        QUARTERLY BUISNESS REVIEW
                    </div>
                    <div>
                        <div className="lg:p-5 lg:-mt-2 ml-16 lg:ml-32 md:mr-5 ">
                            <button
                                onClick={toggleDarkMode}
                                className=" block rounded-full lg:p-2 md:p-2 sm:p-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-blue-400"
                            >
                                {isDarkMode ? (
                                    <FaSun className="w-6 h-6" />
                                ) : (
                                    <FaMoon className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
