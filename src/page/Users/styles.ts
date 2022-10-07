import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 3rem;

  > header{
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(33, 35, 38, 0.2) 0px 10px 10px -10px;
    border-radius: 5px;

    img {
      width: 12rem;
    }

    p {
      margin-top: 1rem;
      margin-left: 2rem;
      font-size: 1.2rem;

      span {
        font-weight: bold;
        font-size: 1.3rem;
      }
    }

    button {
      padding-right: .3rem;
      width: 7.5rem;
      height: 2rem
    }

  }

  > div{
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 5rem;
    display: flex;
    gap: 2rem;
  }
`