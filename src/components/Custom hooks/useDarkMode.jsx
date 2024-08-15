import { useState, useEffect } from "react";

function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const dark = isDarkMode;

    // ________________________User machine display auto color for dark___________________//
    // useEffect(() => {
    //     if (
    //         window.matchMedia &&
    //         window.matchMedia("(prefers-color-scheme: dark)").matches
    //     ) {
    //         setIsDarkMode(true);
    //     }
    // }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };
    return { isDarkMode, toggleDarkMode, dark };
}

export default useDarkMode;
