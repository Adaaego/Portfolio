import face from '../images/bnwpic.jpeg';

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
                    <motion.h2 variants={titleAnim}>Just an Igbo girl that</motion.h2>
                </Hide>

                <Hide>
                    <motion.h2 variants={titleAnim}>Codes boldly.<span>  The Lis Effect</span></motion.h2>
                </Hide>

            </motion.div>
            <motion.p variants={fade}> Reach out for projects, collabs, dev magic or just say hello

</motion.p>
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