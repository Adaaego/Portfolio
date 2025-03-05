//import icons
import code from "../images/code.svg";
import api from "../images/cloud-api.svg";
import responsive from "../images/responsive.svg";
import improvement from "../images/improvement.svg";
import tools from "../images/tools.png";



const ServicesSection = () => {
    return(
        <div className="services">

            <div className="description">
                <h2>High <span>quality</span>services</h2>

                <div className="cards">

                    <div className="card">
                        <div className="icon">
                            <img src={code} alt="code"/>
                            <h3>Scalable Front-end</h3>
                        </div>
                        <p>Clean, efficient, and maintainable code for high-performance applications.</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={responsive} alt="responsive"/>
                            <h3>Responsive Web Design</h3>
                        </div>
                        <p>Ensuring seamless experiences across all devices.</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={improvement} alt="improvement"/>
                            <h3>Performance Optimization</h3>
                        </div>
                        <p>Faster load times, improved SEO, and smooth user interactions.</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={api} alt="api"/>
                            <h3>API Integration</h3>
                        </div>
                        <p>Connecting front-end applications with powerful back-end services.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={tools} alt="tools-logo"/>
            </div>
        </div>
    )
}

export default ServicesSection