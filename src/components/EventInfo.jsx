import styles from "./EventInfo.module.css";
import PropTypes from "prop-types";

const EventInfo = ({ title, text }) => {
  return (
    <div className={styles.eventInfo}>
      <div className={styles.infoTitle}>{title}</div>
      <div className={styles.infoText}>{text}</div>
    </div>
  );
};

EventInfo.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default EventInfo;
