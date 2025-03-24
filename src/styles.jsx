import styled from "styled-components";


export const BasicLayout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`

export const Description = styled.div`
    flex: 1;
    z-index: 2;

     h2{
        font-weight :lighter;
    }
`
export const Image = styled.div`
flex : 1;
overflow: hidden;
z-index: 2;

img{
    width: 100%;
    height: 80vh;
    object-fit :cover;
}
    
`
export const Hide = styled.div`
    overflow: hidden;
`
export const StyledIcon = styled.img`
    width: 50px;
    height: 45px;
`
