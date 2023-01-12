import React, { useState, useEffect } from "react";
import{ AppearanceContext, themes } from "contexts/AppearanceContext";
import { getCookie, setCookie } from "../../cookieParser"; 

export default function ThemeContextWrapper(props) {
    const [theme, setTheme] = useState(getCookie("theme"));

    function changeTheme(theme){
        setTheme(theme);
        setCookie("theme", theme);
    }
    useEffect(() => {
        switch(theme){
            case themes.light:
                document.body.classList.add(themes.light);
                break;
            case themes.dark:
                document.body.classList.remove(themes.light);
                break;
            case themes.system:
                default:
                if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
                    document.body.classList.remove(themes.light);
                }else document.body.classList.add(themes.light);
        }
    }, [theme]);

    return(
        <AppearanceContext.Provider value={{theme: theme, changeTheme: changeTheme}}>
            {props.children}
        </AppearanceContext.Provider>
    );
}