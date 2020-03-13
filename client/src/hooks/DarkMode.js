import useLocalStorage from "./LocalStorage"
import { useEffect } from "react"

export const useDarkMode = (key, initialValue) =>{

    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue)

    useEffect(() => {
        
        if (darkMode === true) {
            document.body.classList.add('dark-mode');
        } else { 
            document.body.classList.remove('dark-mode')}
    }, [ darkMode ]);


    return [ darkMode, setDarkMode ]
}

export default useDarkMode;