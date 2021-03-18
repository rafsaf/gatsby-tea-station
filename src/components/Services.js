import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "./Services.module.css"
import Image from "gatsby-image"
import { FaMugHot, FaHouseDamage, FaMortarPestle } from "react-icons/fa"

const servicesData = (data) => {
  return [
    {
      icon: <FaMortarPestle className={styles.serviceIcon} />,
      title: "Custom Recipes",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque enim eu tortor congue, vitae.",
      fluid: data.one.childImageSharp.fluid,
    },
    {
      icon: <FaHouseDamage className={styles.serviceIcon} />,
      title: "Home Delivery",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque enim eu tortor congue, vitae.",
      fluid: data.two.childImageSharp.fluid,
    },
    {
      icon: <FaMugHot className={styles.serviceIcon} />,
      title: "Tea Aging",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque enim eu tortor congue, vitae.",
      fluid: data.three.childImageSharp.fluid,
    },
  ]
}

const Service = ({ icon, title, text, fluid }) => {
  return (
    <article className={styles.service}>
      {icon}
      <div className={styles.servicePicture}>
        <Image fluid={fluid} className={styles.serviceImage} />
      </div>
      <div className={styles.serviceInfo}>
        <h3>{title}</h3>
        <p>{text}</p>
        <a href="/" className={styles.btn}>
          read more
        </a>
      </div>
    </article>
  )
}

const query = graphql`
  {
    one: file(relativePath: { eq: "product-1.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    two: file(relativePath: { eq: "product-2.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    three: file(relativePath: { eq: "product-3.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Services = () => {
  const data = useStaticQuery(query)

  return (
    <section className={styles.sectionCenter}>
      <article>
        <div className={styles.sectionTitle}>
          <h3>explore</h3>
          <h2>our services</h2>
        </div>
      </article>
      {servicesData(data).map((item) => (
        <Service
          key={item.title}
          icon={item.icon}
          title={item.title}
          text={item.text}
          fluid={item.fluid}
        />
      ))}
    </section>
  )
}

export default Services
