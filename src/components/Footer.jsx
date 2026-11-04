function Footer() {
  // Worked out each time the page loads, so the year never goes stale
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>&copy; {year} Ashley Roots</p>

      <nav aria-label="Footer">
        <ul className="site-footer-nav">
          <li>
            <a href="/work">Work</a>
          </li>
          <li>
            <a href="/lab">Lab</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="mailto:ashleyaroots@gmail.com">Email</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
