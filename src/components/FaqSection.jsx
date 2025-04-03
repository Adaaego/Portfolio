
import styled from 'styled-components';
import { BasicLayout } from '../styles';
import Toggle from './Toggle';
import { LayoutGroup, motion } from 'framer-motion';
import useScroll from './useScroll';
import {fade} from '../../animations'

const FaqSection = () => {
    const [element, controls] = useScroll();
    return(
        <Faq>
        <h2> FAQ <span>Any Questions?</span></h2>

<LayoutGroup>
<Toggle title='How do i start?'>
        <div className="question">

            <div className="answer">
                <motion.p  ref={element} variants={fade} animate ={controls} initial="hidden">Lorem ipsum dolor sit amet.</motion.p>
                <motion.p ref={element} variants={fade} animate ={controls} initial="hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, aliquid.</motion.p>
            </div>
        </div>
        </Toggle>

<Toggle title='Daily schedule'>
        <div className="question">
            <div className="answer">
                <motion.p ref={element} variants={fade} animate ={controls} initial="hidden">Lorem ipsum dolor sit amet.</motion.p>
                <motion.p ref={element} variants={fade} animate ={controls} initial="hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, aliquid.</motion.p>
            </div>
        </div>
    </Toggle>

     <Toggle title='Payment Methods'>
        <div className="question">
            <div className="answer">
                <motion.p ref={element} variants={fade} animate ={controls} initial="hidden">Lorem ipsum dolor sit amet.</motion.p>
                <motion.p ref={element} variants={fade} animate ={controls} initial="hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, aliquid.</motion.p>
            </div>
        </div>
    </Toggle>

    <Toggle title='Services Offered'>
        <div className="question">
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, aliquid.</p>
            </div>
        </div>
    </Toggle>
    </LayoutGroup>

        </Faq>
    )
}

const Faq = styled(BasicLayout)`
display: block;
span{
    display: block;
}
h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}
.faq-line{
    background:#cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100% ;

}
.question{
    padding: 3rem 0rem;
    cursor: pointer;
}

.answer{
 padding: 2rem 0rem;
 p{
    padding: 1rem 0rem;
 }
}
    
`

export default FaqSection