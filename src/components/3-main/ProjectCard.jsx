import { memo } from "react";
import styles from "./ProjectCard.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DOMPurify from "dompurify";

// eslint-disable-next-line react/display-name
const Card = memo(({ project, handleProjectClick }) => {
  // تنظيف الوصف باستخدام DOMPurify
  const sanitizedDescription = DOMPurify.sanitize(project.description);

  return (
    <motion.div
      className={styles.project}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.8 }}
      onClick={() => handleProjectClick(project)}
    >
      <img
        className={styles.projectImg}
        src={project.image}
        alt={project.name}
        loading="lazy"
      />
      <div className={styles.box}>
        <h2 className={styles.projectName}>{project.name}</h2>

        {/* عرض الوصف بعد تصفيته */}
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
        />
      </div>
      <div className={`${styles.links} flex space-between`}>
        <div className="flex gap-10">
          <a className={styles.icon} href={project.link}>
            <span className="icon-link"></span>
          </a>
          <a className={styles.icon} href={project.github}>
            <span className="icon-github"></span>
          </a>
        </div>
        <Link
          className={`${styles.more} flex`}
          to={"/more"}
          state={{ project }}
        >
          more
          <span
            className="arrow-right icon-arrow-right"
            style={{ alignSelf: "end" }}
          ></span>
        </Link>
      </div>
    </motion.div>
  );
});

export default Card;
