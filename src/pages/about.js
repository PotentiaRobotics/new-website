import * as React from "react"
import SEO from '../components/SEO'
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import Hero from "../components/index/hero"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaArrowRight } from "react-icons/fa"
import TeamData from '../data/team.json'
import { useState } from "react"

const AboutPage = () => {
  const teams = ["Leads", "Software", "Engineering", "Electronics", "Business"]
  const { heroImage, teamImages } = useStaticQuery(graphql`
    query aboutPageQuery {
      heroImage: file(relativePath: { eq: "olympian_hero.png" }) {
				childImageSharp {
					fluid(quality: 95) {
						...GatsbyImageSharpFluid
					}
				}
			}
      teamImages: allFile(filter: { relativeDirectory: { eq: "team" } }) {
        edges {
          node {
            childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  quality: 95
                  width: 192
                  height: 192
                )
            }
            name
          }
        }
      }
    }
  `)
  const [curTeam, setCurTeam] = useState('Leads');
  return (
    <Layout>
      <SEO title='About Us' />
      <Hero image={heroImage} title="About Us" />
      <div className='mx-auto max-w-screen-xl py-12 pt-12 px-4 sm:px-8 md:px-12'>
      <div className='flex space-x-6 justify-center flex-wrap'>
        {teams.map(team => {
          return (
            <button className={"font-bold px-8 py-4 mb-6 text-black rounded-md shadow " + (team == curTeam ? "bg-blue-100 hover:bg-blue-100" : "bg-gray-100 hover:bg-gray-200")} onClick={() => setCurTeam(team)}>{team}</button>
          )
        })}
      </div>
      <p className='max-w-4xl mx-auto text-center my-6 text-lg text-gray-500'>{TeamData[curTeam].description}</p>
      <div className='max-w-3xl mx-auto grid grid-cols-1 gap-6'>
        {TeamData[curTeam].data.map(member => {
          return (
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <GatsbyImage
                className="rounded-full shadow-md w-48 h-48 sm:w-48 sm:h-48 md:mr-6 sm:flex-shrink-0 mx-auto mb-2 sm:mb-0"
                image={getImage(
                  teamImages.edges.find(
                    x => x.node.name === member.img
                  ).node.childImageSharp.gatsbyImageData
                )}
                alt={member.name}
              />
              <div>
                <p className='font-bold poppins text-lg mb-1'>{member.name}</p>
                <p className='text-sm italic text-darkblue mb-3 font-semibold'>{member.pos}</p>
                <p className="text-sm text-gray-500">{member.bio}</p>
              </div>
            </div>
          )
        })}
      </div>
      </div>
    </Layout>
  )
}

export default AboutPage