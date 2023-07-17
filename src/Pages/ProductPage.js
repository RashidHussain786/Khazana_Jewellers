import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import CollectionSection from '../Sections/CollectionSection'
import Header from '../Components/Header'

const ProductPage = () => {
    // Define the number of items for pagination
  const numItems = 16;
  return (
    <>
    <Nav/>
    <CollectionSection numItems={numItems} isHomePage={true}/>
    <Footer/>
    </>
  )
}

export default ProductPage