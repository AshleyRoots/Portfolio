import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Single-page apps keep the scroll position when the route changes.
// This jumps back to the top on every new page, but leaves in-page
// links like #work alone so they can still scroll to their section.
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
