import "./Header.scss";
import Logo from "/images/logo.svg";

const Header: React.FC = () => {
  return (
    <header className="Header">
      <img src={Logo} alt="" />
      <button className="btn">Try It Free</button>
    </header>
  );
};

export default Header;
