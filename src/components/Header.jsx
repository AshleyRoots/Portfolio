function Header() {
  return (
    <header className="site-header">
      <a href="/" className="site-logo">
        <img
          src="/images/AR-logo-vector.svg"
          alt="Ashley Roots, home"
          width="1079"
          height="727"
        />
      </a>

      <nav aria-label="Main">
        <ul className="site-nav">
          <li>
            <a href="/work">Work</a>
          </li>
          <li>
            <a href="/lab">Lab</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
