import * as React from "react"
import SEO from '../components/SEO'
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import Hero from "../components/index/hero"

const OlympianPage = () => {
  const { heroImage } = useStaticQuery(graphql`
    query olympianPageQuery {
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
      <SEO title='Olympian' />
      <Hero image={heroImage} title="Meet Olympian" />
      <div className='mx-auto max-w-screen-xl py-12 pt-12 px-4 sm:px-8 md:px-12'>
        <p className='text-center text-xl'>Coming soon.</p>
      </div>
    </Layout>
  )
}

export default OlympianPage