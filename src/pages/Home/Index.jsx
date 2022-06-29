import React from "react"
// import { motion } from "framer-motion"
import { Name } from "../../components/Name/Index"
import { Portrait } from "../../components/Portrait/Index"

export const Home = () => {
  return (
    <>
      <Name />
      <div className="home">
        <Portrait />
      </div>
    </>
  )
}
