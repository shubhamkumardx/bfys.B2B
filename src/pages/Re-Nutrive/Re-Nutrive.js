import React from 'react';
import NavbarHeader from "../Navbar";
import FooterBfsg from "../FooterBfsg";
import main from "../../Image/B2B-Website-UI/Default-main.png";
import Logo from "../../Image/B2B-Website-UI/misio-mar-logo.png";

const ReNutrive = () => {
    return (
        <div>
        <NavbarHeader />
        <section>
          <div className="container">
            <div className="mt-5"></div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 m-auto">
                <div className="BnadLogo w-100">
                  <img className="img-fluid" src={main} />
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 m-auto ">
               
                <div className="autoHeight" id="ScrollRight">
                  <p class="seti">
                    Coming Soon
                  </p>
                 
                 
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterBfsg />
      </div>
    );
}

export default ReNutrive;
