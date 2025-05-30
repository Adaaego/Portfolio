//animations 
import { motion } from "framer-motion";
import { PageAnimation, titleAnim  } from "../../animations";
import styled from "styled-components";
import ScrollUp from "../components/ScrollUp";
const ContactMe = () =>{
    return(
       
        <ContactStyle
        exit="exit"
        variants={PageAnimation}
        initial="hidden"
        animate="show"
      >
         <ScrollUp/>
        <Title>
          <Hide>
            <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
          </Hide>
        </Title>
        <div>
          <Hide>
            <Social variants={titleAnim}>
              <Circle />
              <h2>Send Us A Message</h2>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim}>
              <Circle />
              <h2>Send an email.</h2>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim}>
              <Circle />
              <h2>Social Media</h2>
            </Social>
          </Hide>
        </div>
      </ContactStyle>
    );
  };
  
  const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 1500px) {
      padding: 2rem;
      font-size: 1rem;
    }
  `;
  const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 1500px) {
      margin-top: 5rem;
    }
  `;
  const Hide = styled.div`
    overflow: hidden;
  `;
  const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #ffffff;
  `;
  const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
      margin: 2rem;
    }
  `;
  
  export default ContactMe;