import styles from "./Footer.module.css"

import logo from "../../assets/images/svg3987107727.png"
import svg from "../../assets/images/Image (2).png"

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.middleLine} />
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <div>
            <img src={logo} className={styles.logo} alt="" />
          </div>
          <div className={styles.soc}>
            <img src={svg} className={styles.svg} alt="" /> SOC 2 Type II Certified
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.ulCover}>
            <h5>Product</h5>
            <ul>
              <li>Documentation</li>
              <li>Changelog</li>
              <li>Pricing </li>
              <li>Parsers</li>
              <li>
                SDTF <span>NEW</span>
              </li>
              <li>Use Cases</li>
              <li>Launch Week</li>
              <li>Feedback</li>
            </ul>
          </div>
          <div className={styles.ulCover}>
            <h5>Resources</h5>
            <ul>
              <li>Guide</li>
              <li>Blog</li>
              <li>Customers </li>
              <li>Help Center</li>
            </ul>
          </div>
          <div className={styles.ulCover}>
            <h5>Company</h5>
            <ul>
              <li>Press kit</li>
              <li>Climate</li>
              <li>Jobs </li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className={styles.ulCover}>
            <h5>Discord</h5>
            <ul>
              <li>Twitter</li>
              <li>Github</li>
              <li>Dribble </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.middleLine} />
      <div className={styles.bottomFooter}>
        <ul>
          <li>Privacy policy</li>
          <li>Terms of use</li>
          <li>Security</li>
        </ul>
        <div>&copy; Specify &#xB7; All rights reserved</div>
      </div>
    </footer>
  )
}

export default Footer
