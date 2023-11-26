import { NavLink, Link } from "react-router-dom";
import Logo from "../Logo";
import styles from "./PageNav.module.css";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <Logo />
      </Link>
      <ul>
        <li>
          <NavLink to="/pricing">Preço</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
        <li>
          <NavLink className={styles.ctaLink} to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
