import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  max-width: 1050px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-weight: 100;
  font-size: 1rem;
  width: 30rem;
  opacity: 0;
`

export const Img = styled.img`
  width: 26rem;
  filter: grayscale(1) brightness(2);
  display: block;
`
