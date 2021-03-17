import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Dividier from "../components/Dividier"
import Skills from "../components/Skills"
import About from "../components/About"

const index = () => {
  return (
    <Layout>
      <Header />
      <Dividier />
      <Skills />
      <About />
    </Layout>
  )
}

export default index
