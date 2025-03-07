import face from '../images/face.jpg';
import styled from 'styled-components';
import { BasicLayout, Description, Hide, Image } from '../styles';

const AboutSection = () =>{
    return (
        <BasicLayout>
         <Description>
            <div className="title">
                <Hide>
                    <h2>Maverick, Front-end developer,</h2>
                </Hide>

                <Hide>
                    <h2>Always evolving.</h2>
                </Hide>

                <Hide>
                    <h2>The <span>Lis effect</span></h2>
                </Hide>

            </div>
            <p> Contact me for scalable, high-performance 
            front-end solutions—responsive, optimized, and built to last.</p>

            <button>Contact Me</button>
         </Description>

         <Image>
            <img src={face} alt="guy holding camera" />
         </Image>
        </BasicLayout>
    )
}



export default AboutSection