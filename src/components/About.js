import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "./About.module.css"
import Image from "gatsby-image"

const query = graphql`
  {
    file(relativePath: { eq: "about-bcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <section>
      <div className={styles.sectionCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.aboutPictureContainer}>
            <Image fluid={fluid} className={styles.aboutPicture} />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <div className={styles.sectionTitle}>
            <h3>about our</h3>
            <h2>tea station</h2>
          </div>
          <div className={styles.aboutText}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              scelerisque enim eu tortor congue, vitae.
            </p>
          </div>
          <div className={styles.aboutText}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              scelerisque enim eu tortor congue, vitae.
            </p>
          </div>
          <button className={styles.btn}>Learn more</button>
        </article>
      </div>
    </section>
  )
}

export default About
