import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Dividier from "../components/Dividier"
import Skills from "../components/Skills"
import About from "../components/About"
import Products from "../components/Products"
import Services from "../components/Services"
import Footer from "../components/Footer"

const index = () => {
  return (
    <Layout>
      <Header />
      <Dividier />
      <Skills />
      <About />
      <Products />
      <Services />
      <Footer />
    </Layout>
  )
}

export default index
