import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  a {
    background-color: #661717;
    border-radius: 8px;
    width: 20rem;
    height: 3rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
    
    &:hover{
      background-color: #862d2d;
      color: #000;
    }
  }


`