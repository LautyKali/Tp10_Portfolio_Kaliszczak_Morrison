import React from "react";
import { Outlet } from "react-router-dom";
import Nav from '../../components/Layout/js/Nav'
import Footer from '../../components/Layout/js/Footer';
import "../css/Layout.css";


function Layout({  }) {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}


export default Layout