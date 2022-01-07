import React from 'react'
import BackgroundImage from 'gatsby-background-image'

const Hero = ({ image, title, tagline }) => {
  return (
    <BackgroundImage 
      className={`bg-no-repeat bg-center bg-cover overflow-hidden index-bg text-center px-8 text-white ${tagline?'h-screen':'partial-height'}`}
      fluid={[
        "linear-gradient(rgba(41, 50, 65, 0.8), rgba(41, 50, 65, 0.8))",
        image.childImageSharp.fluid,
    ]}>
      <div className={`${tagline?'h-screen':'partial-height'} mt-40 mx-auto max-w-screen-xl px-4 sm:mt-32 sm:px-6 md:mt-36 lg:mt-36 xl:mt-44`}>
        <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-6xl sm:leading-none md:text-7xl mb-8 poppins">{title}</h1>
        {tagline && <h4 className="mt-3 max-w-md mx-auto text-base font-bold text-orange italic sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">{tagline}</h4>}
      </div>
    </BackgroundImage>
  )
}

export default Hero