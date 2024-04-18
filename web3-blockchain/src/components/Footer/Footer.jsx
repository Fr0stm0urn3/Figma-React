import styles from "./Footer.module.css"
import logo from "../../assets/images/LOGO (3).png"
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <div className={styles.borderTop} />
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.topContent}>
            <div>
              <img src={logo} alt="" />
            </div>
            <ul>
              <li>Solution</li>
              <li>Pricing</li>
              <li>Get Started</li>
              <li>Use cases</li>
              <li>Documentation</li>
            </ul>
          </div>
          <div className={styles.borderMiddle} />
          <div className={styles.bottomContent}>
            <div>BWS - All rights reserved - 2024</div>
            <button>Operation System</button>
            <div className={styles.icons}>
              <FaInstagram className={styles.mediaIcon} />
              <FaFacebook className={styles.mediaIcon} />
              <FaYoutube className={styles.mediaIcon} />
              <FaLinkedin className={styles.mediaIcon} />
              <FaTwitter className={styles.mediaIcon} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
