import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "./Products.module.css"
import Image from "gatsby-image"

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

const Products = () => {
  const data = useStaticQuery(query)

  return (
    <section className={styles.products}>
      <div className={styles.sectionCenter}>
        <article className={styles.productsInfo}>
          <div className={styles.sectionTitle}>
            <h3>check out</h3>
            <h2>our product</h2>
          </div>
          <p className={styles.productText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            scelerisque enim eu tortor congue, vitae.
          </p>
          <a className={styles.btn} href="/">
            check out
          </a>
        </article>
        <article className={styles.productsInventory}>
          <div className={styles.product}>
            <Image
              fluid={data.one.childImageSharp.fluid}
              className={styles.productImg}
            />
            <h4>ginger peach tea</h4>
            <h4 className={styles.productPrice}>$6.99</h4>
          </div>
          <div className={styles.product}>
            <Image
              fluid={data.two.childImageSharp.fluid}
              className={styles.productImg}
            />
            <h4>fruit sangria</h4>
            <h4 className={styles.productPrice}>$5.99</h4>
          </div>
          <div className={styles.product}>
            <Image
              fluid={data.three.childImageSharp.fluid}
              className={styles.productImg}
            />
            <h4>white tea</h4>
            <h4 className={styles.productPrice}>$9.99</h4>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Products
