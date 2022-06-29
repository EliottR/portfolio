import portrait from "../../assets/portrait.jpeg"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Container, Content, Img } from "./Styled"

gsap.registerPlugin(ScrollTrigger)

export const Portrait = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const imgRef = useRef()
  const contentRef = useRef()
  const portraitRef = useRef()

  useEffect(() => {
    const img = imgRef.current
    const content = contentRef.current

    if (location.pathname === "/profile") {
      gsap.set(img, {
        filter: "grayscale(0) brightness(1)",
      })

      gsap.set(content, {
        opacity: 1,
      })
    } else if (location.pathname === "/") {
      let tl = gsap
        .timeline({
          paused: false,
        })
        .to(img, {
          filter: "grayscale(0) brightness(1)",
        })
        .to(content, {
          opacity: 1,
        })

      ScrollTrigger.create({
        animation: tl,
        trigger: portraitRef.current,
        start: "top 72",
        scrub: true,
        pin: true,

        // onLeave: function (self) {
        //   self.scroll(self.start) // <-- sets position to start of ScrollTrigger
        //   self.disable()
        //   self.animation.progress(1)
        // },
        onLeave: () => {
          navigate("/profile")
        },
      })
    }
  }, [location.pathname, navigate])

  return (
    <Container ref={portraitRef}>
      <Content ref={contentRef}>
        <p>
          Moi c’est Eliott, je compte 8523 jours à mon actif, ou encore 1217
          semaines et 4 jours, ou pour être plus compréhensible, j’ai 23 ans, 17
          semaines et 3 jours.
        </p>
        <p>
          J’ai toujours été passionné par l’informatique, les nouvelles
          technologies et la musique, et j’ai choisi de me concentrer
          professionnellement sur le domaine du développement web.
        </p>
        <p>
          Vous découvrirez ici mes différents projets, en espérant que cela vous
          plaise : bonne visite.
        </p>
        <p>xoxo</p>
      </Content>
      <Img src={portrait} alt="portrait Eliott" ref={imgRef} />
    </Container>
  )
}
