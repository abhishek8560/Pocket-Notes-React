import react from "react";
import styles from "./WelcomeMessage.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import image from "../assets/welcome.png";

function WelcomeMessage() {
  return (
    <div className={styles.welcomeMessageContainer}>
      <img className={styles.image} src={image} alt="Image" />
      <h1>Pocket Notes</h1>
      <p>
        "Welcome to your personal sanctuary for ideas and inspiration, where
        every thought finds its perfect space!"
      </p>
      <p>
        "Unlock your creativity, organize your thoughts, and capture the moments
        that matter - Where Ideas Flourish!"
      </p>

      <h2>Created by : Abhishek Yadav</h2>
      <p className={styles.icons}>
        <a href="https://github.com/abhishek8560" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-yadav-185647180?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BCXw67mlYRkW0UVGojukJIw%3D%3D"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </p>
      <p className={styles.email}>abhishekyadav6149@gmail.com</p>
    </div>
  );
}

export default WelcomeMessage;
