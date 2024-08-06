import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="synesthesia_logo" />
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About Our Project</NavLink>
          </li>
          <li>
            <NavLink to={"/generate"}>Try It Out</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
