import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="d-flex">
            <div className="col-12 col-md-3 col-lg-3 ">
                <Header />            
            </div>
            <div className=" col-md-8 col-lg-8">
              <Outlet />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Layout;