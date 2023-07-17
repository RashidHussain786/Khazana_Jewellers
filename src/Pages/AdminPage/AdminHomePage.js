import React from 'react'
import JewelleryList from '../../Components/JewelleryList'
import AdminNav from '../../Components/AdminNav'
import AdminFooter from '../../Components/AdminFooter'


const AdminHomePage = () => {
  return (
    <>
    <AdminNav/>
    <JewelleryList/>
    <AdminFooter/>
    </>
  )
}

export default AdminHomePage