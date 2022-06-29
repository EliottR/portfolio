import React from "react"
import {
  CntContainer,
  MainContainer,
  Navigation,
  Span,
  StyledLink,
} from "./Styled"

export const Header = () => {
  return (
    <MainContainer className="header">
      <CntContainer className="header_content">
        <Navigation className="header_content_navigation">
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="profile">Profil</StyledLink>
          <StyledLink to="projects">Projets</StyledLink>
          <StyledLink to="contact">Contact</StyledLink>
        </Navigation>
        <Span></Span>
      </CntContainer>
    </MainContainer>
  )
}
