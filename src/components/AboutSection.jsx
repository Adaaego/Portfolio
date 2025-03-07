import face from '../images/face.jpg';
import styled from 'styled-components'

const AboutSection = () =>{
    return (
        <About>
         <Description>
            <div className="title">
                <Hide>
                    <h2>Maverick, Front-end developer</h2>
                </Hide>

                <Hide>
                    <h2>Always evolving</h2>
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
        </About>
    )
}

//styled components 
const About = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: #fff;
`

const Description = styled.div`
    flex: 1;
     h2{
        font-weight :lighter;
    }
`
const Image = styled.div`
flex : 1;
overflow: hidden;
img{
    width: 100%;
    height: 80vh;
    object-fit :cover;
}
    
`
const Hide = styled.div`
    overflow: hidden;
`

export default AboutSection