import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ProjectCard({
  number,
  title,
  category,
  description,
  image,
  link,
  linkText = "Read the case study",
  featured = false,
  compact = false,
  accent,
  badge,
}) {
  const classes = [
    "project",
    featured && "project--featured",
    compact && "project--compact",
    accent && `project--${accent}`,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <article className={classes}>
      <div className="project-content">
        <span className="project-number">{number}</span>

        <p className="project-category">{category}</p>

        <h3>{title}</h3>

        <p className="project-description">{description}</p>

        <Link to={link} className="project-link">
          {linkText}
          <span className="visually-hidden">: {title}</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>

      <div className="project-visual">
        <Link
          to={link}
          className="project-visual-link"
          tabIndex={-1}
          aria-hidden="true"
        >
          {featured ? (
            <div className="browser-window">
              <div className="browser-bar">
                <div className="browser-controls">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="browser-tab">
                  <span className="browser-tab-icon">AR</span>
                  Pathway Hub
                </div>

                <div className="browser-address">ashley.instructure.com</div>

                <div className="browser-menu">•••</div>
              </div>

              <img src={image} alt="" />
            </div>
          ) : (
            <img src={image} alt="" />
          )}
        </Link>
        {badge && (
          <span className="project-badge" aria-hidden="true">
            {badge}
          </span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
