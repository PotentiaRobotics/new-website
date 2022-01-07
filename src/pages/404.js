import * as React from "react"
import SEO from '../components/SEO'
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import Hero from "../components/index/hero"
import { StaticImage } from "gatsby-plugin-image"
import { FaArrowRight } from "react-icons/fa"

const NotFoundPage = () => {
  const { heroImage } = useStaticQuery(graphql`
    query notFoundQuery {
      heroImage: file(relativePath: { eq: "olympian_hero.png" }) {
				childImageSharp {
					fluid(quality: 95) {
						...GatsbyImageSharpFluid
					}
				}
			}
    }
  `)
  return (
    <Layout>
      <SEO title='404 No Page Found' />
      <Hero image={heroImage} title="404" tagline="Page not found! Use the navbar to go to the right page." />
    </Layout>
  )
}

export default NotFoundPage