import React from "react"
import * as styles from "./About.module.css"
import Img from "../images/about-bcg.jpeg"

const About = () => {
  return (
    <section>
      <div className={styles.sectionCenter + " clearfix"}>
        <article className={styles.aboutImg}>
          <div className={styles.aboutPictureContainer}>
            <img alt="tea-kettle" src={Img} className={styles.aboutPicture} />
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
        </article>
      </div>
    </section>
  )
}

export default About
