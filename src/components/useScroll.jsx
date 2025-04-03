import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

const useScroll = () =>{
    const controls = useAnimation();
    const [element, view] = useInView();
    useEffect(() => {
        if (view) {
            controls.start("show");
        } else {
            controls.start("hidden");
        }
    }, [view, controls]); // Fix: useEffect ensures it runs only when `inView` changes

    return [element, controls];
};


export default useScroll;