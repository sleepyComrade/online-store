import logo from "../../assets/images/online-store.png";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/">
      <img className="header__logo" src={logo} alt="logo image" />
    </Link>
  );
}
