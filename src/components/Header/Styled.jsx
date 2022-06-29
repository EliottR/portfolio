import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const MainContainer = styled.div`
  margin-top: 4.5rem;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
`

export const CntContainer = styled.div`
  font-size: 1.5rem;
  display: flex;
  position: fixed;
  z-index: 10;
`

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  align-items: flex-end;
  overflow: hidden;
`

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  color: white;
  text-transform: lowercase;
  line-height: 1.3;
  transition: 0.5s ease-out;

  &.active {
    color: black;
    transition: 0.5s ease-out;
    content: "";
    width: 0;
    height: fit-content;
    background: white;
    z-index: 0;
    animation: nav-active 0.5s forwards;
    padding-right: 5px;
    margin: 5px 0;

    @keyframes nav-active {
      from {
        width: 0;
      }

      to {
        width: 5rem;
      }
    }
  }
`

export const Span = styled.span`
  content: "";
  background-color: white;
  width: 1px;
  height: 8.5rem;
  margin-left: 0.5rem;
`
