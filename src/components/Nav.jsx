import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <StyledNav>
            <h1>
                <Link id='logo' to="/">The Lis Effect</Link></h1>
            <ul>
                <li>
                    <Link to="/">1. About Me</Link></li>
                <li>
                    <Link to="/Projects">2. Projects</Link>
                </li>
                <li>
                    <Link to="/Contact"> 3. Contact Me</Link>
                </li>
            </ul>
        </StyledNav>
    )
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    justify-content :space-between;
    align-items: center;
    padding: 1rem 10rem;
    margin: auto;
    position: sticky;
    top: 0;
    z-index: 10;

    #logo{
        font-family: "Chewy", system-ui;
        font-size :1.5rem;
        font-weight : lighter;

    }
 
    a{
        color: #fff;
        text-decoration : none;
    }
    ul{
        display: flex;
        list-style :none;
    }
    li{
        padding-left : 10rem;
        position: relative;
    }
    @media screen and (max-width: 1225px){
        ul{
            display: none;
        }
    }
`;


export default Nav;