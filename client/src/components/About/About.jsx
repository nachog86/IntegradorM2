import React from "react";
import styles from "./About.module.css";
import backgroundImage from "./../../images/da5d9223f42f44be980e0ea50853824e.jpg";
import profileImage from "./../../images/IMG_3162.png";

const About = () => {
  return (
    <div className={styles.container}>
      <img className={styles.backgroundImage} src={backgroundImage} alt="Background" />
      <div className={styles.myDescriptionContainer}>
        <img className={styles.profileImage} src={profileImage} alt="Profile" />
        <div className={styles.descriptionBox}>
          <h2>Hola! Soy Ignacio Gomez</h2>
          <p>Soy estudiante de Full Stack y este es mi primer Proyecto!</p>
          <p>Espero que te Guste!</p>
        </div>
      </div>
    </div>
  );
};

export default About;

