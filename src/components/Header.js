import React from "react"
import * as styles from "./Header.module.css"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <h2 className={styles.bannerText}>Over one hundred Lavours of </h2>
        <h1 className={styles.bannerTitle}>
          Specially <br /> Crafted Tea
        </h1>
        <Link to="/skills" className={"btn " + styles.bannerBtn}>
          explore
        </Link>
      </div>
    </header>
  )
}

export default Header
