import { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation} from "react-router-dom";
import { MovieState } from "../movieState";


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
                <Details>
                    <Headline>
                    <h2>{movie.title}</h2>
                    <img src={movie.mainImg} alt="main-image" />
                    </Headline>
                </Details>
              

            )}
        </div>
    )
};

const Details = styled.div`

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


    
`

export default MovieDetail;