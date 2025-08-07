import React from 'react'
import NavbarApp from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'

export default function Layout() {
  return (
    <div>
      <NavbarApp />
      <Content />
      <Footer />
    </div>
  )
}
