import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Activites from '../components/Activites'
import BackToTop from '../components/BackToTop'
import About from '../components/About'
import TimeLine from '../components/TimeLine'
import Themes from '../components/Themes'
import Committee from '../components/Committee'
import Partner from '../components/Partner'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Tech-Huma | Home </title>
        <meta name='description' content='Home of Tech-Huma' />
        <meta name='keywords' content='Home, Tech-Huma' />
        <meta name='author' content='Tech-Huma' />
      </Helmet>
      <div className='h-auto w-screen bg-white relative'>
        <Navbar />
        <Hero />
        <About />
        <TimeLine />
        <Themes />
        <Committee />
        <Partner />
        <Contact />
        <Footer />
        {/* <Activites/> */}
        <BackToTop />
      </div>
    </>
  )
}

export default Home