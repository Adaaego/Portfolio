import face from '../images/face.jpg'

const AboutSection = () =>{
    return (
        <div>
         <div className="description">
            <div className="title">
                <div className="hide">
                    <h2>Maverick, Front-end developer</h2>
                </div>

                <div className="hide">
                    <h2>Always evolving</h2>
                </div>

                <div className="hide">
                    <h2>The <span>Lis effect</span>t</h2>
                </div>

            </div>
            <p> Contact me for scalable, high-performance 
            front-end solutions—responsive, optimized, and built to last.</p>

            <button>Contact Me</button>
         </div>

         <div className="image">
            <img src={face} alt="guy holding camera" />
         </div>
        </div>
    )
}

export default AboutSection