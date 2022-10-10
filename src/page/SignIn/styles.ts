import styled from 'styled-components'

export const Container = styled.div`
  background-color: #e0dada;
  width: 50rem;
  height: 37.5rem;
  border-radius: 8px;

  margin: 6.25rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  > img{
    width: 17.25rem;
    margin-top: 5rem;
    margin-bottom: 3rem;
  }

  #buttonsContainer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    

    button{
      width: 13rem;
      height: 3rem;
      font-size: 1.2rem;
    }
  }
  
`