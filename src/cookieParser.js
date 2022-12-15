const getCookie = (cname) => {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");

    for(let cookie of cookieArray){
        while(cookie.charAt(0) === ' '){
            cookie = cookie.substring(1);
        }
        if(cookie.indexOf(name) === 0){
            return cookie.substring(name.length, cookie.length);
        }
    }
}
const setCookie = (cname, cvalue, expires) => {
    document.cookie = `${cname}=${cvalue}; path=/;${(" "+expires) || "Tue, 19 Jan 2038 04:14:07 GMT"}`
}
const checkCookie = () => {

}

export{
    getCookie,
    setCookie,
    checkCookie
}