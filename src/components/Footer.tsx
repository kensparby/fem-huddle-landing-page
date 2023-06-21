import "./Footer.scss";
import Logo from "/images/logo.svg";
import IconLocation from "/images/icon-location.svg";
import IconPhone from "/images/icon-phone.svg";
import IconEmail from "/images/icon-email.svg";

const Footer: React.FC = () => {
  return (
    <div className="Footer">
      <img className="logo" src={Logo} alt="" />
      <div className="contactinfo">
        <div className="location">
          <img src={IconLocation} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="phone">
          <img src={IconPhone} alt="" />
          <p>+1-543-123-4567</p>
        </div>
        <div className="email">
          <img src={IconEmail} alt="" />
          <p>example@huddle.com</p>
        </div>
      </div>
      <ul className="sitenav">
        <li className="link">
          <a href="#">About Us</a>
        </li>
        <li className="link">
          <a href="#">What We Do</a>
        </li>
        <li className="link">
          <a href="#">FAQ</a>
        </li>
        <li className="link">
          <a href="#">Career</a>
        </li>
        <li className="link">
          <a href="#">Blog</a>
        </li>
        <li className="link">
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <div className="socials">
        <div className="links">
          <div className="icon-facebook">
            <img src="images/facebook-f.svg" alt="" />
          </div>
          <div className="icon-twitter">
            <img src="/images/twitter.svg" alt="" />
          </div>
          <div className="icon-instagram">
            <img src="/images/instagram.svg" alt="" />
          </div>
        </div>
        <p>© Copyright 2018 Huddle. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
