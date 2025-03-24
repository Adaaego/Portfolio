import face from '../images/face.jpg';
import Wave from './Wave';

//styles
import styled from 'styled-components';
import { BasicLayout, Description, Hide, Image } from '../styles';
//Animations
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim} from '../../animations';

//Router 
import { Link } from 'react-router-dom';


const AboutSection = () =>{

    
    return (
        <BasicLayout>
         <Description>
            <motion.div>
                <Hide>
                    <motion.h2 variants={titleAnim}>Maverick, Front-end developer,</motion.h2>
                </Hide>

                <Hide>
                    <motion.h2 variants={titleAnim}>Always evolving.</motion.h2>
                </Hide>

                <Hide>
                    <motion.h2 variants={titleAnim}>The <span>Lis effect</span></motion.h2>
                </Hide>

            </motion.div>
            <motion.p variants={fade}> Contact me for scalable, high-performance 
            front-end solutions— responsive, optimized, and built to last.</motion.p>
            <Link to="/Contact">
             <motion.button variants={fade}>Contact Me</motion.button>
            </Link>
            
         </Description>

         <Image>
            <motion.img variants={photoAnim} src={face} alt="guy holding camera" />
         </Image>
         <Wave />
        </BasicLayout>
    )
}



export default AboutSection