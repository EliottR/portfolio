import React from "react"
import { Name } from "../../components/Name/Index"
import { Portrait } from "../../components/Portrait/Index"

export const Profile = () => {
  return (
    <>
      <Name />
      <div className="profile" id="ppp">
        <Portrait />
      </div>
    </>
  )
}
