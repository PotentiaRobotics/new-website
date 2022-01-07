import * as React from "react"
import SEO from '../components/SEO'
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import Hero from "../components/index/hero"
import { StaticImage } from "gatsby-plugin-image"
import { FaArrowRight } from "react-icons/fa"

const IndexPage = () => {
  const { heroImage } = useStaticQuery(graphql`
    query indexPageQuery {
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
      <SEO title='Home' />
      <Hero image={heroImage} title="Potentia Robotics" tagline="The first high school team to design and build a humanoid robot." />
      <div className='mx-auto max-w-screen-xl py-12 pt-12 px-4 sm:px-8 md:px-12'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='text-lg'>
            <h1 className="poppins text-darkblue font-bold text-3xl mb-6">Who We Are</h1>
            <p className='mb-4'>
            Potentia Robotics is the <strong>first high school team</strong> to design and build a <strong>fully-functional 
            humanoid robot</strong> entirely from scratch. It's run by students from the Thomas Jefferson 
            High School for Science and Technology (TJHSST).
            </p>
            <p>
            At Potentia Robotics, we want to push the boundaries of what high-school students can 
            achieve. Our ultimate goal is to <strong>further STEM knowledge</strong> in the K-12 community while 
            leading by example and showing other students that age isn't a limiting factor for 
            any project, no matter how large-scale.
            </p>
          </div>
          <div>
            <StaticImage placeholder='blurred' className="rounded-lg shadow-md w-100 h-auto mb-8" src="../images/team_picture.png" alt="Potentia Robotics" />
            <Link to='/about/' className='px-6 py-4 bg-darkblue text-white rounded-md hover:bg-black'>
              <div className="inline font-semibold align-middle">
                Meet the Team <FaArrowRight className='ml-2 inline' />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-teal">
        <div className='mx-auto max-w-screen-xl py-12 pt-12 px-4 sm:px-8 md:px-12'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <StaticImage placeholder='blurred' className="rounded-lg shadow-md w-100 h-auto" src="../images/olympian_waving.png" alt="Olympian" />
            </div>
            <div className='text-lg'>
              <h1 className="poppins text-darkblue font-bold text-3xl mb-6">What We're Building</h1>
              <p className='mb-8'>
              We're building <strong>Olympian</strong>: our low-cost, 6-foot tall, bipedal humanoid robot with a human-like dynamically stable gait, limb mobility, and balance capabilities, that can be controlled effectively and efficiently from afar. [ADD MORE TECHNICAL DETAILS HERE]
              </p>
              <Link to='/olympian/' className='px-6 py-4 bg-darkblue text-white rounded-md hover:bg-black'>
                <div className="text-base inline font-semibold align-middle">
                  Meet Olympian <FaArrowRight className='ml-2 inline' />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className='mx-auto max-w-screen-xl py-12 pt-12 px-4 sm:px-8 md:px-12 text-center'>
          <h1 className="poppins text-darkblue font-bold text-3xl mb-8">Timeline</h1>
          <Link to='/olympian/' className='px-6 py-4 bg-darkblue text-white rounded-md hover:bg-black'>
            <div className="text-base inline font-semibold align-middle">
              Full Timeline <FaArrowRight className='ml-2 inline' />
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage