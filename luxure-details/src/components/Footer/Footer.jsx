import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.details}>
          <h3>LuxureDetails</h3>
          <p>
            Experience the prestige of a professionally detailed car, radiating elegance
            and refinement at every turn.
          </p>
        </div>
        <div className={styles.lists}>
          <div className={styles.list}>
            <h5>Website</h5>
            <ul>
              <li>Services</li>
              <li>Pricing</li>
              <li>About</li>
            </ul>
          </div>
          <div className={styles.list}>
            <h5>Contact</h5>
            <ul>
              <li>Get a quote</li>
              <li>Contact form</li>
              <li>Email us</li>
            </ul>
          </div>
          <div className={styles.list}>
            <h5>Social Media</h5>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.middleLine} />
      <div className={styles.end}>
        <div className={styles.copyright}>LuxureDetails &copy; 2024</div>
        <div className={styles.policies}>
          <div>Cookie policy</div>
          <div>Terms and services</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
