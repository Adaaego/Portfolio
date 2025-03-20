import { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation} from "react-router-dom";
import { MovieState } from "../movieState";
import { div } from "framer-motion/client";

//animations 
import { motion } from "framer-motion";
import { PageAnimation } from "../../animations";


const MovieDetail = () =>{

    //finding the url
    const location = useLocation();
    const url = location.pathname;

    //use state
    const [movies, setMovies] = useState(MovieState());
    const [movie, setMovie] = useState(null)
    
    //useEffect
    useEffect (() => {
        const currentMovie = movies.find(movie => movie.url === url);
        setMovie(currentMovie);
    }, [movies, url])
    

    return(
        <div>
            {movie && (
                <Details variants={PageAnimation} initial ="hidden" animate="show" exit = "exit">
                    <Headline>
                    <h2>{movie.title}</h2>
                    <img src={movie.mainImg} alt="main-image" />
                    </Headline>
                    <Awards> 
                        {movie.awards.map((award) => 
                         <Award  title ={award.title}
                         description = {award.description}
                         key={award.id}/>
                         )}
                    </Awards>
                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt="movie" />
                    </ImageDisplay>
                </Details>
              

            )}
        </div>
    )
};

const Details = styled(motion.div)`
color: #fff;

`;

const Headline =styled.div`
min-height: 90vh;
padding-top : 20vh;
position: relative;

h2{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
}

img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
}
`;
const Awards = styled.div`
min-height: 80vh;
display: flex;
margin: 5rem 10rem;
align-items: center;
justify-content : space-around;
    
`;

const AwardStyle = styled.div`
    padding: 5rem;
    h3{
        font-size : 2rem;
    }
    .line{
        width: 70%;
        background : #23d997;
        height: 0.5rem ;
        margin: 1rem 0;
    }
    p{
        padding: 2rem 0 ;
    }
`;

const ImageDisplay = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height: 100vh;
        object-fit : cover;
    }
`

//Award component
const Award = ({title, description}) =>{
    return(
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}

export default MovieDetail;