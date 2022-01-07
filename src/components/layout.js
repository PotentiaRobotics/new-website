import React from 'react'
import Footer from './footer'
import Header from './navbar'

const Layout = (props) => {
  return (
    <div className="flex flex-col full-h">
      <Header />
      <div className='flex-grow'>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout