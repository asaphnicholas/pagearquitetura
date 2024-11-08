import { Link } from "react-router-dom";

// ASSETS
import "./Footer.css";
import BrasilLogo from "../../assets/brazilicon.svg";
import UsaLogo from "../../assets/usaicon.svg";
import FacebookLogo from "../../assets/facebookicon.svg";
import InstagramLogo from "../../assets/instagramicon.svg";
import LinkedinLogo from "../../assets/linkedinicon.svg";
import TwiterLogo from "../../assets/twitericon.svg";
import Logo from "../../assets/dnc-logo.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="d-flex jc-space-between">
          <div className="footer-logo-col">
            <img src={Logo} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
