import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info"></article>
        <div className="underline"></div>
        <h1>im paul</h1>
        <h4>developer/engineer</h4>
        <Image fluid={fluid} className="hero-img" />
        <Link to="/contact" className="btn">
          Contact Me
        </Link>
        <SocialLinks />
      </div>
    </header>
  )
}

export default Hero
