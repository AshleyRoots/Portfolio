import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-logo">
        <img
          src={`${import.meta.env.BASE_URL}images/AR-logo-vector.svg`}
          alt="Ashley Roots, home"
          width="1079"
          height="727"
        />
      </Link>

      <nav aria-label="Main">
        <ul className="site-nav">
          <li>
            <NavLink to="/work">Work</NavLink>
          </li>
          <li>
            <NavLink to="/lab">Lab</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
