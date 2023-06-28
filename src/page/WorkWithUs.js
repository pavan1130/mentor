import React from "react";
import styles from "../page/WorkWithUs.module.css";
import workWithUsImage from "../page/W.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import styles from "./MyComponent.module.css";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const WorkWithUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <div className={styles.blueStrip}></div>
      <h2 className={`${styles.heading} ${styles.bigHeading}`}>WORK WITH US</h2>
      <div className={styles.workWithUsContainer}>
        <div className={styles.leftColumn}>
          <p className={styles.boldText}>
            Let’s reshape the <br />
            future together
          </p>
          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="First Name"
                className={styles.textInput}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="Last Name"
                className={styles.textInput}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                placeholder="Email ID"
                className={styles.textInput}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="tel"
                placeholder="Mobile No."
                className={styles.textInput}
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              SUBMIT
            </button>
          </form>
        </div>
        <div className={styles.rightColumn}>
          <img
            src={workWithUsImage}
            alt="WorkWithUs"
            className={styles.image}
          />
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <a href="/">TERMS</a>
            <a href="/">PRIVACY</a>
            <a href="/">COOKIES</a>
          </div>
          <div className={styles.footerIcons}>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WorkWithUs;
