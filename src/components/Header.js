import React from "react"
import * as styles from "./Header.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <header className={styles.header}>
      <StaticImage
        src="../images/main.jpg"
        alt=""
        layout="fullWidth"
        className={styles.image}
      />
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
