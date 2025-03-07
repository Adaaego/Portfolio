import styled from 'styled-components';

const Nav = () => {
    return(
        <StyledNav>
            <h1>
                <a id='logo' href="#">The Lis Effect</a></h1>
            <ul>
                <li>
                    <a href="#">1. About Me</a></li>
                <li>
                    <a href="#">2. Projects</a>
                </li>
                <li>
                    <a href="#"> 3. Contact Me</a>
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
`;


export default Nav;