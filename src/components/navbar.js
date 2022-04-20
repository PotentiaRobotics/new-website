import { Link } from "gatsby"
import React, { useCallback, useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import HamburgerMenu from "react-hamburger-menu"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false) // for mobile navbar open/closed
  const [scrollState, setScrollState] = useState(window.scrollY <= 10 ? 'top' : 'scroll') // for navbar bg transition
  let listener = null
  useEffect(() => {
    listener = document.addEventListener('scroll', e => {
      const scrolled = window.scrollY
      if (scrolled > 10) {
        if (scrollState !== 'scroll') {
          setScrollState('scroll')
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top")
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])
  const links = [
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
      name: 'Contact Us',
      path: '/contact/',
    },
  ]
  return (
    <nav className={'fixed inset-x-0 top-0 z-30 ' + (scrollState=='top' ? 'bg-transparent shadow-none' : 'bg-blue shadow-md')}>
      <div className="max-w-8xl mx-auto px-2 lg:px-4">
        <div className='flex justify-between h-16'>
          <Link to="/" className='items-center inline-flex'>
            <StaticImage placeholder='blurred' className="w-24 h-10 mr-2" src="../images/logo_tr_bg.png" alt="Potentia Robotics" />
          </Link>
          <div className="flex">
            <div className="hidden lg:ml-8 lg:flex space-x-8">
              {links.map(link => (
                <Link
                  to={link.path}
                  key={link.path}
                  className="items-center inline-flex text-teal poppins hover:text-darkteal"
                  activeClassName="items-center inline-flex poppins text-teal font-bold hover:text-teal"
                >
                  {link.name}
                </Link>
              ))}
              <div className='inline-flex items-center'>
                <a href="https://gofundme.com" target='_blank' className='poppins py-2 px-4 rounded-md blue bg-teal hover:bg-darkteal shadow'>
                  Donate
                </a>
              </div>
            </div>
            <div className='flex items-center '>
              <HamburgerMenu
                isOpen={isOpen}
                menuClicked={useCallback(() => {
                  setIsOpen((isOpen) => !isOpen)
                }, [])}
                width={18}
                height={15}
                strokeWidth={2}
                animationDuration={0.2}
                color="#FFFFFF"
                className='lg:hidden cursor-pointer mr-2'
              />
            </div>
          </div>
        </div>
      </div>
      <div className={(isOpen ? `opacity-100 ${scrollState === 'top' && "pt-2"} visible` : "opacity-0 invisible") + " block lg:hidden duration-200 ease-linear absolute w-full top-full bg-gray-800 left-0 shadow"}>
        {links.map(link => {
          return (
            <Link
              to={link.path}
              className="w-full mb-2 block pl-3 pr-4 py-2 outline-none hover:bg-gray-700 hover:text-gray-200 items-center text-md font-medium leading-5 text-gray-300 focus:outline-none"
              activeClassName="w-full block pl-3 pr-4 py-2 bg-gray-600 hover:bg-gray-600 outline-none focus:outline-none items-center text-md font-medium leading-5 text-gray-200 hover:text-gray-200"
            >
              {link.name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar