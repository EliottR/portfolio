import styled from "styled-components"

export const Container = styled.div`
  position: fixed;
  top: 50%;
  z-index: 10;
  cursor: pointer;
`

export const Content = styled.div`
  text-transform: uppercase;
  font-size: 9rem;
  line-height: 1;
`

export const FirstName = styled.div`
  margin-left: 6rem;
`

export const SurName = styled.span`
  opacity: 0.6;
  position: absolute;
  transform: translateY(-50%);
`
