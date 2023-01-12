import React, { useState, useEffect } from "react";
import axios from "axios";
import{ LanguageContext, languages } from "contexts/LanguageContext";
import { getCookie, setCookie } from "../../cookieParser"; 

export default function LanguageContextWRapper(props){
    const [language, setLanguage] = useState(getCookie("lang") ?? "en");
    const [content, setContent] = useState({});

    function changeLanguage(lang){
        setLanguage(lang);
        setCookie("lang", lang);
    }

     useEffect(() => {
        axios
            .get(`/translations/${language}.json`)
            .then((res) => {
                setContent(res.data);
            })
            .catch((err) => console.log(err));
    }, [language]);

    return(
        <LanguageContext.Provider value={{language: language, content: content, changeLanguage: changeLanguage}}>
            {props.children}
        </LanguageContext.Provider>
    );
}