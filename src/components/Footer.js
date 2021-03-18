import React from "react"
import * as styles from "./Footer.module.css"
import { FaFacebook, FaTwitter, FaDiscord } from "react-icons/fa"

const footersIcons = [
  { icon: <FaFacebook className={styles.footerIcon} /> },
  { icon: <FaTwitter className={styles.footerIcon} /> },
  { icon: <FaDiscord className={styles.footerIcon} /> },
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <article className={styles.footerContainer}>
        <div className={styles.footerText}>
          {footersIcons.map((item) => (
            <a href="/">{item.icon}</a>
          ))}
        </div>
        <div className={styles.footerText}>
          <h4>
            <span>Tea Station</span> Project Based on HTML & CSS course, please
            refer www.johnsmilga.com
          </h4>
        </div>
      </article>
    </footer>
  )
}

export default Footer
