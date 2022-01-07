import React from "react"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { HiMail } from "react-icons/hi"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Footer = () => {
  const sitemap = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About Us',
      path: '/about/',
    },
    {
      name: 'Timeline',
      path: '/timeline/',
    },
    {
      name: 'Meet Olympian',
      path: '/olympian/',
    },
    {
      name: 'Sponsors',
      path: '/sponsors/',
    },
    {
      name: 'Contact',
      path: '/contact/',
    },
  ]
  const icons = [
    {
      icon: FaFacebook,
      url: 'https://www.facebook.com/potentiarobotics/'
    },
    {
      icon: FaInstagram,
      url: 'https://www.instagram.com/potentiarobotics/'
    },
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/potentia-robotics-790582204/'
    },
    {
      icon: FaGithub,
      url: 'https://github.com/PotentiaRobotics'
    },
  ]
  return (
    <footer className="flex-shrink-0">
      <div className="bg-blue">
        <div className="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 md:flex md:justify-between md:items-center text-white">
          <div className="flex items-center">
            <StaticImage placeholder='blurred' className="h-24 w-12 mr-2" src="../images/icon.png" alt="Potentia Robotics" />
            <div className="flex flex-col">
              <p className="text-center text-base poppins mb-3">
                  &copy; {new Date().getFullYear()} Potentia Robotics
              </p>
              <div className="flex justify-center space-x-3">
                {icons.map(icon => (
                  <FooterIcon url={icon.url} icon={icon.icon} />
                ))}
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-2'>
            {sitemap.map(link => {
              return (
                <Link to={link.path} className='text-white hover:text-teal poppins'>{link.name}</Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

const FooterIcon = ({ url, icon: Icon }) => {
  return (
    <div className="inline-block">
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        className="text-white hover:text-teal"
      >
        <Icon className="w-6 h-6 fill-current" />
      </a>
    </div>
  )
}

export default Footer