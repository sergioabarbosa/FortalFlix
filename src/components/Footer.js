import React from "react";
import GiHubIcon from '../images/GiHubIcon.svg'
import linkedinIcon from '../images/linkedinIcon.svg'
import { Link } from 'react-router-dom';
import { FooterS } from "../pages/styles";

function Footer() {
  return (
    <FooterS background="grey" className="footer">
      <div>© 2021 Sérgio Alves Barbosa</div>

        <div>
        <Link to={`https://github.com/sergioabarbosa`}>
        <img
          name="botão github"
          type="image"
          target="_blank" 
          className="github-bottom-btn"
          src={ GiHubIcon }
          alt="Github"/>
        </Link>
        
        </div>
        <div>
        <Link to={`https://www.linkedin.com/in/sergio-alves-barbosa/`}>
        <img
          name="linkedin"
          type="image"
          className="linkedin-bottom-btn"
          src={ linkedinIcon }
          alt="Linkedin"/>
          </Link>
        </div>
    </FooterS>
  );
}
export default Footer;
