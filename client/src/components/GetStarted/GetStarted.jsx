import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Commencez avec DARAK</span>
          <span className="secondaryText">
          Abonnez-vous et découvrez des devis super attractifs de notre part <br />
          Trouvez bientôt votre résidence
          </span>
          <button className="button" href>
            <a href="mailto:zainkeepscode@gmail.com">Commencer</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
