import React from "react"
import * as styles from "./Header.module.css"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
  {
    file(relativePath: { eq: "main-bcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Header = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className={styles.header}>
      <Image fluid={fluid} className={styles.image} />

      <div className={styles.banner}>
        <h2 className={styles.bannerText}>Over one hundred Lavours of </h2>
        <h1 className={styles.bannerTitle}>
          Specially <br /> Crafted Tea
        </h1>
        <a href="/" className={styles.btn + " " + styles.bannerBtn}>
          explore
        </a>
      </div>
    </header>
  )
}

export default Header
