import React from "react"
import ReactDOM from "react-dom/client"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home/Index"
import { Contact } from "./pages/Contact/Index"
import { NotFound } from "./pages/NotFound/Index"
import { Projects } from "./pages/Projects/Index"
import { Profile } from "./pages/Profile/Index"
import { Header } from "./components/Header/Index"
import { GlobalStyle } from "./Styled"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
)
