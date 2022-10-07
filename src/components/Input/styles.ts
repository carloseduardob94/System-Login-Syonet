import styled from 'styled-components'

export const Container = styled.div`  
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  > label {
    margin-bottom: 0.6em;
    font-weight: bold;
    width: 30rem;
  }

  > input {
    
    width: 30rem;
    padding: 0.7em;
    border-radius: 5px;
    border: none;
    
    &:hover {
      color: #555;
    }
  }
`