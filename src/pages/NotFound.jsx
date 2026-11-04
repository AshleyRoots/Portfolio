import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main>
      <section className="work">
        <h1>Page not found</h1>
        <p>
          This page doesn't exist yet, or it has moved.{" "}
          <Link to="/">Go back to the homepage</Link>.
        </p>
      </section>
    </main>
  );
}

export default NotFound;
