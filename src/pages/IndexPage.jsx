import React from 'react'
import Index from '../components/Index'
import PreviewMe from '../components/PreviewMe'
import PreviewPorto from '../components/PreviewPorto'
import '../App.css'
import Navi from '../components/Navi'
import Footer from '../components/Footer'

function IndexPage() {
  return (
    <>
    <Navi/>
    <Index/>
    <PreviewMe/>
    <PreviewPorto/>
    <Footer/>
    </>
  )
}

export default IndexPage