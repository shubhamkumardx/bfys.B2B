import React from "react";
import NavbarHeader from "../pages/Navbar";
import FooterBfsg from "../pages/FooterBfsg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import SkinCare1 from "../Image/Candle/byredo.png";
import SkinCare2 from "../Image/Candle/diptque.png";
import SkinCare3 from "../Image/Candle/margila.png";
import HeroBannerCandle from "../Image/HomeDecor/HomeDecorBanner.png";

function Candle() {
  return (
    <div>
      <NavbarHeader />

      <section className="B3bPageTop Candle">
        <div className="container">
          <div className="HeroBanner">
            <img src={HeroBannerCandle} alt="" />
            <h3>home</h3>
          </div>

          <div>
            <div className="row g-0">
              <div className="col-lg-3 col-md-3 col-sm-6 ">
                <Link to="/brands/Byredo">
                  <div className="BrandProduct BR  ">
                    <div>
                      <img src={SkinCare1} alt="" />
                    </div>

                    <h2>Byredo</h2>
                  </div>
                </Link>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6">
                <Link to="/brands/Diptyque">
                  <div className="BrandProduct BR  ">
                    <div>
                      <img src={SkinCare2} alt="" />
                    </div>

                    <h2>Diptyque</h2>
                  </div>
                </Link>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6">
                <Link to="/brands/MaisonMargiela">
                  <div className="BrandProduct BR">
                    <div>
                      <img src={SkinCare3} alt="" />
                    </div>

                    <h2>Maison Margiela</h2>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterBfsg />
    </div>
  );
}

export default Candle;
