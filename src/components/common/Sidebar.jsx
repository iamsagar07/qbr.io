import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/qbr-logo.png'
import lightLogo from '../assets/qbr-transformed.png'
import { GoGoal } from "react-icons/go";
import { MdOutlineTaskAlt } from "react-icons/md";
import { FcSalesPerformance } from "react-icons/fc";
import { TbExchange } from "react-icons/tb";
import { SiMicrosoftteams } from "react-icons/si";
import { LuDatabaseBackup } from "react-icons/lu";
import { GiProgression } from "react-icons/gi";
import useDarkMode from "../Custom hooks/useDarkMode";

const Sidebar = () => {
    const [activeComponent, setActiveComponent] = useState(0);
    const [openSidebar, setOpenSidebar] = useState(false);
    const sidebarRef = useRef(null);

    const handleToogle = (e) => {
        setActiveComponent(e)
        setOpenSidebar(false)
    }
    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setOpenSidebar(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sidebarRef]);

    const { isDarkMode} = useDarkMode();
   

    return (
        <div>
            <button
                onClick={() => setOpenSidebar(!openSidebar)}
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            <aside
                id="default-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 hidden lg:block md:block sm:hidden"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-32 bg-white dark:bg-gray-900">
                    <ul className="space-y-2 font-medium flex flex-col gap-8">
                        <li className="absolute">
                            <Link to={'/'}>
                                {
                                    isDarkMode ? <img width={190} src={lightLogo} alt="logo" className="-my-36" /> : <img width={190} src={logo} alt="logo" className="-my-36" />

                                }
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setActiveComponent(0)}
                                to={"/"}
                                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group
                                ${activeComponent === 0
                                        ? "dark:bg-gray-900 bg-gray-100 text-black dark:text-white shadow-lg ring-blue-400"
                                        : "bg-white text-gray-800 hover:bg-gray-100 ring-gray-300"
                                    }
                                 `}
                            >
                                <GiProgression
                                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"

                                />
                                <span className="ms-3">Present Task progress</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/future-goals"}
                                onClick={() => setActiveComponent(1)}
                                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group
                                ${activeComponent === 1
                                        ? "dark:bg-gray-900 bg-gray-100 text-black dark:text-white shadow-lg ring-blue-400"
                                        : "bg-white text-gray-800 hover:bg-gray-100 ring-gray-300"
                                    }
                                 `}                            >
                                <GoGoal
                                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"

                                />
                                <span className="ms-3">Future Goals</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/task-completed"}
                                onClick={() => setActiveComponent(2)}
                                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group
                                ${activeComponent === 2
                                        ? "dark:bg-gray-900 bg-gray-100 text-black dark:text-white shadow-lg ring-blue-400"
                                        : "bg-white text-gray-800 hover:bg-gray-100 ring-gray-300"
                                    }
                                 `}                               >
                                <MdOutlineTaskAlt
                                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"

                                />
                                <span className="ms-3">Cleared Tasks</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/plans"}
                                onClick={() => setActiveComponent(3)}
                                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group
                                ${activeComponent === 3
                                        ? "dark:bg-gray-900 bg-gray-100 text-black dark:text-white shadow-lg ring-blue-400"
                                        : "bg-white text-black hover:bg-gray-100 ring-gray-300"
                                    }
                                 `}                               >
                                <TbExchange
                                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"

                                />
                                <span className="ms-3">Change in plans</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/performance-graph"}
                                onClick={() => setActiveComponent(4)}
                                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group
                                ${activeComponent === 4
                                        ? "dark:bg-gray-900 bg-gray-100 text-black dark:text-white shadow-lg ring-blue-400"
                                        : "bg-white text-gray-800 hover:bg-gray-100 ring-gray-300"
                                    }
                                 `}                               >
                                <FcSalesPerformance
                                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"

                                />
                                <span className="ms-3">Performance Graph</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/team-performnace"}
                                onClick={() => setActiveComponent(5)}
                                className={`flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group
                                ${activeComponent === 5
                                        ? "dark:bg-gray-900 bg-gray-100 text-black dark:text-white shadow-lg ring-blue-400"
                                        : "bg-white text-gray-800 hover:bg-gray-100 ring-gray-300"
                                    }
                                 `}                             >
                                <SiMicrosoftteams
                                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"

                                />
                                <span className="ms-3">Team Performance</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/employee-attendence"}
                                onClick={() => setActiveComponent(6)}
                                className={`flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group
                                ${activeComponent === 6
                                        ? "dark:bg-gray-900 bg-gray-100 text-black dark:text-white shadow-lg ring-blue-400"
                                        : "bg-white text-gray-800 hover:bg-gray-100 ring-gray-300"
                                    }
                                 `}                             >
                                <LuDatabaseBackup
                                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"

                                />
                                <span className="ms-3">Employee Attendance</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

            {openSidebar && (
                <aside
                    ref={sidebarRef}
                    className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform transform sm:-translate-x-full md:-translate-x-full lg:translate-x-0 block"
                    aria-label="Sidebar"
                >
                    <div className="h-full px-3 py-28 bg-white dark:bg-gray-800">
                        <ul className="space-y-2 font-medium flex flex-col gap-8">
                            <li>
                                <Link
                                    onClick={() => handleToogle(0)}
                                    to={"/"}
                                    className={`flex items-center p-2 text-gray-900 rounded-lg e hover:bg-gray-100 dark:hover:bg-gray-700 group
                                ${activeComponent === 0
                                            ? "dark:bg-gray-900 bg-gray-100 text-black dark:text-white shadow-lg ring-blue-400"
                                            : "bg-white text-gray-800 hover:bg-gray-100 ring-gray-300"
                                        }
                                 `}
                                >
                                    <GiProgression
                                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"

                                    />
                                    <span className="ms-3">Present Task progress</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/future-goals"}
                                    onClick={() => handleToogle(1)}
                                    className={`flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group
                                ${activeComponent === 1
                                            ? "dark:bg-gray-900 bg-gray-100 text-black dark:text-white shadow-lg ring-blue-400"
                                            : "bg-white text-gray-800 hover:bg-gray-100 ring-gray-300"
                                        }
                                 `}                            >
                                    <GoGoal
                                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"

                                    />
                                    <span className="ms-3">Future Goals</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/task-completed"}
                                    onClick={() => handleToogle(2)}
                                    className={`flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group
                                ${activeComponent === 2
                                            ? "dark:bg-gray-900 bg-gray-100 text-black dark:text-white shadow-lg ring-blue-400"
                                            : "bg-white text-gray-800 hover:bg-gray-100 ring-gray-300"
                                        }
                                 `}                               >
                                    <MdOutlineTaskAlt
                                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"

                                    />
                                    <span className="ms-3">Cleared Tasks</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/plans"}
                                    onClick={() => handleToogle(3)}
                                    className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group
                                ${activeComponent === 3
                                            ? "dark:bg-gray-900 bg-gray-100 text-black dark:text-white shadow-lg ring-blue-400"
                                            : "bg-white text-gray-800 hover:bg-gray-100 ring-gray-300"
                                        }
                                 `}                               >
                                    <TbExchange
                                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"

                                    />
                                    <span className="ms-3">Change in plans</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/performance-graph"}
                                    onClick={() => handleToogle(4)}
                                    className={`flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group
                                ${activeComponent === 4
                                            ? "dark:bg-gray-900 bg-gray-100 text-black dark:text-white shadow-lg ring-blue-400"
                                            : "bg-white text-gray-800 hover:bg-gray-100 ring-gray-300"
                                        }
                                 `}                               >
                                    <FcSalesPerformance
                                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"

                                    />
                                    <span className="ms-3">Performance Graph</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/team-performnace"}
                                    onClick={() => handleToogle(5)}
                                    className={`flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group
                                ${activeComponent === 5
                                            ? "dark:bg-gray-900 bg-gray-100 text-black dark:text-white shadow-lg ring-blue-400"
                                            : "bg-white text-gray-800 hover:bg-gray-100 ring-gray-300"
                                        }
                                 `}                             >
                                    <SiMicrosoftteams
                                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"

                                    />
                                    <span className="ms-3">Team Performance</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/employee-attendence"}
                                    onClick={() => handleToogle(6)}
                                    className={`flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group
                                ${activeComponent === 6
                                            ? "dark:bg-gray-900 bg-gray-100 text-black dark:text-white shadow-lg ring-blue-400"
                                            : "bg-white text-gray-800 hover:bg-gray-100 ring-gray-300"
                                        }
                                 `}                             >
                                    <LuDatabaseBackup
                                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"

                                    />
                                    <span className="ms-3">Employee Attendance</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>
            )}
        </div>
    );
};

export default Sidebar;
