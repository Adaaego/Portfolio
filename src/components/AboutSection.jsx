import face from '../images/face.jpg';
import styled from 'styled-components';
import { BasicLayout, Description, Hide, Image } from '../styles';
import { motion } from 'framer-motion';

const AboutSection = () =>{

    const container = {
        hidden :{ x : 100},
        show :{x : 0, transition : {duration : 0.75, ease: "easeOut", staggerChildren: 0.2}}

    };

    const titleAnim ={
        hidden : {opacity : 0},
        show : {opacity :1, transition :{duration : 1} }
    }
    return (
        <BasicLayout>
         <Description>
            <motion.div className="title" variants={container} initial ="hidden" animate="show">
                <Hide>
                    <motion.h2 variants={titleAnim}>Maverick, Front-end developer,</motion.h2>
                </Hide>

                <Hide>
                    <h2>Always evolving.</h2>
                </Hide>

                <Hide>
                    <h2>The <span>Lis effect</span></h2>
                </Hide>

            </motion.div>
            <p> Contact me for scalable, high-performance 
            front-end solutions— responsive, optimized, and built to last.</p>

            <button>Contact Me</button>
         </Description>

         <Image>
            <img src={face} alt="guy holding camera" />
         </Image>
        </BasicLayout>
    )
}



export default AboutSection