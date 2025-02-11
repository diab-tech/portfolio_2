import { memo, useEffect } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import DOMPurify from "dompurify";
import styles from "./projectCard.module.css";

const Card = ({ project, handleProjectClick }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  const sanitizedDescription = DOMPurify.sanitize(project.description);

  return (
    <div
      data-aos="zoom-in"
      className={styles.project}
      onClick={() => handleProjectClick(project)}
      role="link"
      tabIndex={0}
      aria-label={`Project card for ${project.name}. Click to view details.`}
    >
      <img
        className={styles.projectImg}
        src={project.image}
        alt={project.name}
        loading="lazy"
      />
      <div className={styles.box}>
        <h2 className={styles.projectName}>{project.name}</h2>
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  handleProjectClick: PropTypes.func.isRequired,
};

Card.displayName = "ProjectCard"; // إصلاح التحذير حول display name

export default memo(Card); // ✅ تمرير المكون بعد تعريف propTypes
