import React from "react"
import * as styles from "./Skills.module.css"
import { FaMugHot, FaGlassCheers, FaBomb, FaMortarPestle } from "react-icons/fa"

const skillsData = [
  {
    icon: <FaMugHot />,
    title: "made in US",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque enim eu tortor congue, vitae.",
  },
  {
    icon: <FaGlassCheers />,
    title: "relaxation",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque enim eu tortor congue, vitae.",
  },
  {
    icon: <FaBomb />,
    title: "energy",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque enim eu tortor congue, vitae.",
  },
  {
    icon: <FaMortarPestle />,
    title: "family recipe",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque enim eu tortor congue, vitae.",
  },
]

const Skill = ({ icon, title, text }) => {
  return (
    <article className={styles.skill}>
      <span className={styles.skillIcon}>{icon}</span>
      <h4>{title}</h4>
      <p className={styles.skillText}>{text}</p>
    </article>
  )
}

const Skills = () => {
  return (
    <section className={styles.skills}>
      {skillsData.map((item) => (
        <Skill
          key={item.title}
          title={item.title}
          text={item.text}
          icon={item.icon}
        />
      ))}
    </section>
  )
}

export default Skills
