import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollUp = () =>{
        const {pathname} = useLocation(); //to get the current url pathname 
        useEffect(() =>{
            window.scroll({
                top:0,
                left : 0
            })
        }, [pathname]);
        return null;
    
};

export default ScrollUp;