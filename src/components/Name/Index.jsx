import React from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Container, Content, FirstName, SurName } from "./Styled"

gsap.registerPlugin(ScrollTrigger)

export const Name = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const nameContainerRef = useRef(null)
  const nameRef = useRef(null)
  const firstnameRef = useRef(null)
  const surnameRef = useRef(null)

  useEffect(() => {
    if (location.pathname === "/") {
      gsap.to(nameContainerRef.current, {
        scrollTrigger: {
          trigger: nameContainerRef.current,
          start: 0,
          scrub: 2,
          onLeave: function (self) {
            self.disable()
            self.animation.progress(1)
          },
        },
        fontSize: "2rem",
        marginTop: "4.5rem",
        y: 0,
        top: 0,
      })

      gsap.to(nameRef.current, {
        scrollTrigger: {
          trigger: nameRef.current,
          start: 0,
          scrub: 0.8,
          onLeave: function (self) {
            self.disable()
            self.animation.progress(1)
          },
        },
        fontSize: "2rem",
      })

      gsap.to(firstnameRef.current, {
        scrollTrigger: {
          trigger: firstnameRef.current,
          start: 0,
          scrub: 0.8,
          onLeave: function (self) {
            self.disable()
            self.animation.progress(1)
          },
        },
        marginLeft: 0,
      })

      gsap.to(surnameRef.current, {
        scrollTrigger: {
          trigger: surnameRef.current,
          start: 0,
          scrub: 0.8,
          onLeave: function (self) {
            self.disable()
            self.animation.progress(1)
          },
        },
        yPercent: -100,
        xPercent: 50,
      })
    } else {
      gsap.set(nameContainerRef.current, {
        fontSize: "2rem",
        marginTop: "4.5rem",
        y: 0,
        top: 0,
      })

      gsap.set(nameRef.current, {
        fontSize: "2rem",
      })

      gsap.set(firstnameRef.current, {
        marginLeft: 0,
      })

      gsap.set(surnameRef.current, {
        yPercent: -100,
        xPercent: 50,
      })
    }
  }, [location.pathname])

  const handleClick = () => {
    navigate("/")
  }

  return (
    <Container ref={nameContainerRef} onClick={handleClick}>
      <Content ref={nameRef}>
        <FirstName ref={firstnameRef}>eliott </FirstName>
        <SurName ref={surnameRef}>raheriarisoa</SurName>
      </Content>
    </Container>
  )
}
