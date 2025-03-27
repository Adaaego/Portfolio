
import styled from 'styled-components';
import { BasicLayout } from '../styles';
import Toggle from './Toggle';

const FaqSection = () => {
    return(
        <Faq>
        <h2> FAQ <span>Any Questions?</span></h2>

        <div className="question">
            <h4>How do i start?</h4>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, aliquid.</p>
            </div>
            <div className="faq-line"></div>
        </div>

<Toggle>
        <div className="question">
            <h4>Daily Schedule</h4>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, aliquid.</p>
            </div>
            <div className="faq-line"></div>
        </div>
    </Toggle>

     <Toggle>
        <div className="question">
            <h4>Payment methods</h4>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, aliquid.</p>
            </div>
            <div className="faq-line"></div>
        </div>
    </Toggle>

    <Toggle>
        <div className="question">
            <h4>Services offered</h4>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, aliquid.</p>
            </div>
            <div className="faq-line"></div>
        </div>
    </Toggle>

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