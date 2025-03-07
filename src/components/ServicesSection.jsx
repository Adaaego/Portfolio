//import icons
import code from "../images/code.svg";
import api from "../images/cloud-api.svg";
import responsive from "../images/responsive.svg";
import improvement from "../images/improvement.svg";
import home from "../images/home2.png";

//styles
import styled from "styled-components";
import { BasicLayout, Description, Hide, Image, StyledIcon } from '../styles';




const ServicesSection = () => {
    return(
        <Services>

            <Description>
                <h2>High <span>quality</span>services</h2>

                <Cards>

                    <Card>
                        <div className="icon">
                            <StyledIcon src={code} alt="code"/>
                            <h3>Scalable Front-end</h3>
                        </div>
                        <p>Clean, efficient, and maintainable code for high-performance applications.</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <StyledIcon src={responsive} alt="responsive"/>
                            <h3>Responsive Web Design</h3>
                        </div>
                        <p>Ensuring seamless experiences across all devices.</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <StyledIcon src={improvement} alt="improvement"/>
                            <h3>Optimization</h3>
                        </div>
                        <p>Faster load times, improved SEO, and smooth user interactions.</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <StyledIcon src={api} alt="api"/>
                            <h3>API Integration</h3>
                        </div>
                        <p>Connecting front-end applications with powerful back-end services.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home} alt="home-logo"/>
            </Image>
        </Services>
    )
}

const Services = styled(BasicLayout)`
   h2{
    padding-bottom: 5rem; 
   }
   p{
    width: 70%;
    padding : 2rem 0rem 4rem 0rem ;
   }
`;
const Cards = styled.div`
  flex-basis: 20rem;
    display: flex;
    flex-wrap : wrap; 
`;

const Card = styled.div`
    flex-basis: 20rem; /* Ensures a uniform width */
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`;

export default ServicesSection