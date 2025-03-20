//animations 
import { motion } from "framer-motion";
import { PageAnimation } from "../../animations";

const ContactMe = () =>{
    return(
        <motion.div  variants={PageAnimation} initial ="hidden" animate="show" exit = "exit">
            <h1>You can reach me on 0535702336</h1>
        </motion.div>
    )
}

export default ContactMe;