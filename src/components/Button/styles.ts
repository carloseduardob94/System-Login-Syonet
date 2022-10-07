import styled from 'styled-components'

export const ButtonCustom = styled.button`
  border: 30px;
  border-radius: 8px;
  width: 100%;
  height: 25%;

  color: #fff;
  font-size: 1.4rem;
  background-color: #661717;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2) 0 6px 20px 0 rgba(0, 0, 0, 0,2);
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  cursor: pointer;

  &:hover{
  background-color: #862d2d;
  color: #000;
  }
`