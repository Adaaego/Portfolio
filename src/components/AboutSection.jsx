import face from '../images/bnwrmbg.png';

//styles
import styled from 'styled-components';
import { BasicLayout, Description, Hide, Image, ImageWrap } from '../styles';
//Animations
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim} from '../../animations';

//Router 
import { Link } from 'react-router-dom';


const AboutSection = () =>{

    
    return (
        <BasicLayout>
          <ImageWrap>
            <img src={face} alt="my face" />
          </ImageWrap>
         <Description>
            <motion.div>
                <Hide>
                    <motion.h2 variants={titleAnim}>Maverick, Front-end developer,</motion.h2>
                </Hide>

                <Hide>
                    <motion.h2 variants={titleAnim}>Always evolving. The <span>Lis effect</span></motion.h2>
                </Hide>

            </motion.div>
            <motion.p variants={fade}> Contact me for front-end builds that are scalable, high-performance, responsive, and built to last.</motion.p>
            <Link to="/Contact">
             <motion.button variants={fade}>Contact Me</motion.button>
            </Link>
            
         </Description>

         <Image>
            <motion.img variants={photoAnim} src={face} alt="my face" />
         </Image>
        </BasicLayout>
    )
}



export default AboutSection