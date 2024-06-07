import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Aboutme from '../components/Aboutme'
import Footer from '../components/Footer'
import Navi from '../components/Navi'


function AboutPage() {
  return (
    <div>
        <Navi/>
        <Aboutme/>
        <Footer/>
    </div>
  )
}

export default AboutPage