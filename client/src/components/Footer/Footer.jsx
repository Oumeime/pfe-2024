import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo-removebg-preview.png" alt="" width={120} />
          <span className="secondaryText">
          Notre vision est de faire de chaque endroit  <br />
          le meilleur lieu de vie possible pour vous.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText"> Aravat , Tvz, Carafor </span>
          <div className="flexCenter f-menu">
            <span>Propriété</span>
            <span>Services</span>
            <span>Produit</span>
            <span>À propos de nous</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
