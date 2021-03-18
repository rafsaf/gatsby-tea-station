import React from "react"
import { Helmet } from "react-helmet"
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tea Station</title>
        <meta name="description" content="Tea Station project with Gatsby.js" />
      </Helmet>
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
