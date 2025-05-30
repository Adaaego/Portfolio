import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";

//animations 
import { motion } from "framer-motion";
import { PageAnimation } from "../../animations";

//scroll functionality
import ScrollUp from "../components/ScrollUp";


const AboutUs = () =>{
    return(
        <motion.div variants={PageAnimation} initial ="hidden" animate="show" exit = "exit">
           <AboutSection />
           <ServicesSection />
           <FaqSection />
           <ScrollUp/>
        </motion.div>
       
      
    )
}

export default AboutUs;