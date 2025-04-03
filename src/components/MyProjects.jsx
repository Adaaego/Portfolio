
import styled from 'styled-components';
import { Link   } from 'react-router-dom';
//images
import athlete from '../images/athlete-small.png';
import theracer from '../images/theracer-small.png';
import goodtimes from '../images/goodtimes-small.png';

//animations 
import { motion } from "framer-motion";
import { PageAnimation, projectHeading, lineAnim, slideInRight} from "../../animations";
//SCROLL
import useScroll from './useScroll';





const MyProjects = () =>{
    const [element, controls] = useScroll();
    const [elementTwo, controlsTwo] = useScroll();


    return(
        <Work variants={PageAnimation} initial ="hidden" animate="show" exit = "exit">
            <Movie variants={slideInRight}>
             <motion.h2 variants={projectHeading} >Employee management dashboard</motion.h2>
             <motion.div  variants={lineAnim} className="line"></motion.div>
             <Link to = "/Projects/the-athlete">
             <img src={athlete} alt="athlete" /></Link>
            </Movie>

            <Movie ref={element} animate={controls} variants={slideInRight} initial="hidden">
             <motion.h2 variants={projectHeading}>The Racer</motion.h2>
             <motion.div className="line" variants={lineAnim}></motion.div>
             <Link to = "/Projects/the-racer">
             <img src={theracer} alt="racer" /></Link>
            </Movie>

            <Movie ref={elementTwo} animate={controlsTwo} variants={slideInRight} initial="hidden">
             <motion.h2 variants={projectHeading}>Employee management dashboard</motion.h2>
             <motion.div className="line" variants={lineAnim}></motion.div>
             <Link to="/Projects/good-times">
             <img src={goodtimes} alt="goodtimes" /></Link>
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;

    h2{
        padding: 1rem 0rem;
        color : #cccccc
    }
`;

const Movie = styled(motion.div)`
    padding-bottom : 10rem;

    .line{
        height: 0.5rem;
        background : #cccccc;
        margin-bottom : 3rem;
    }

    img{
        width: 100%;
        height: 70vh;
        object-fit : cover;
    }
`

export default MyProjects;