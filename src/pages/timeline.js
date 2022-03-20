import * as React from "react"
import SEO from '../components/SEO'
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import Hero from "../components/index/hero"
import TimelineData from '../data/timeline.json'
import { Chrono } from "react-chrono";
import { StaticImage } from "gatsby-plugin-image"

const TimelinePage = () => {
  const { heroImage } = useStaticQuery(graphql`
    query timelinePageQuery {
      heroImage: file(relativePath: { eq: "olympian_hero.png" }) {
				childImageSharp {
					fluid(quality: 95) {
						...GatsbyImageSharpFluid
					}
				}
			}
    }
  `)

  // let items = []
  // for (let i = 0; i < TimelineData.length; i++) {
  //   let item = TimelineData[i];
  //   let newItem = {
  //     title: item.date,
  //     cardTitle: item.title,
  //     cardDetailedText: item.desc,
  //     media: {
  //       type: "IMAGE",
  //       source: {
  //         url: `../images/${item.img}`
  //       }
  //     }
  //   };
  //   items.push(newItem)
  // }

  return (
    <Layout>
      <SEO title='Timeline' />
      <Hero image={heroImage} title="Timeline" />
      <div className='mx-auto max-w-screen-md py-12 pt-12 px-4 sm:px-8 md:px-12'>
        <div className="mx-auto">
          <ol class="relative border-l border-gray-300 dark:border-gray-700 ml-6 md:ml-0">                  
            {TimelineData.map(item => {
              return (
                <li class="mb-10 ml-6 timeline-container">
                    <span class="flex absolute -left-6 justify-center items-center w-12 h-12 bg-blue-100 timeline-circle rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </span>
                    <p className="text-sm bg-orange mb-2 ml-6  rounded-full px-4 py-1 text-white shadow font-semibold inline">{item.date}</p>
                    <h3 class="poppins mb-1 mt-2 ml-6 text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    {/* <time class="block mb-2  ml-6 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.date}</time> */}
                    <p class="text-base ml-6 mb-4 font-normal text-gray-500 dark:text-gray-400">{item.desc}</p>
                    <StaticImage placeholder='blurred' className="object-cover object-center" src={`../images/${item.img}`} alt="Potentia Robotics" />
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </Layout>
  )
}

export default TimelinePage