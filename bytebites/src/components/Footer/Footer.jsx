import styles from "./Footer.module.css"
import logo from "../../assets/images/Logo (2).png"

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <img src={logo} alt="" />
        <div className={styles.itemsContent}>
          <div className={styles.items}>
            <h5>Hosting</h5>
            <ul>
              <li className={styles.item}>Web Hosting</li>
              <li className={styles.item}>Professional Web Hosting</li>
              <li className={styles.item}>VPS Hosting</li>
              <li className={styles.item}>Cloud Hosting</li>
              <li className={styles.item}>CyberPanel Hosting</li>
            </ul>
          </div>
          <div className={styles.items}>
            <h5>VPS</h5>
            <ul>
              <li className={styles.item}>VPS Plans</li>
              <li className={styles.item}>Features</li>
              <li className={styles.item}>Control Panel</li>
              <li className={styles.item}>Scalability Options</li>
              <li className={styles.item}>Security Measures</li>
            </ul>
          </div>
          <div className={styles.items}>
            <h5>Domain</h5>
            <ul>
              <li className={styles.item}>Domain Name Search</li>
              <li className={styles.item}>Domain Transfer</li>
              <li className={styles.item}>Free Domain</li>
              <li className={styles.item}>XYZ Domain</li>
            </ul>
          </div>
          <div className={styles.items}>
            <h5>Website Builder</h5>
            <ul>
              <li className={styles.item}>Tools</li>
              <li className={styles.item}>Template</li>
              <li className={styles.item}>Portfolio</li>
              <li className={styles.item}>Tutorial</li>
            </ul>
          </div>
          <div className={styles.items}>
            <h5>Legal</h5>
            <ul>
              <li className={styles.item}>Privacy Policy</li>
              <li className={styles.item}>Terms of Conditions</li>
              <li className={styles.item}>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.middleLine} />
      <div className={styles.footerBottom}>
        <div>SpringField. 8831 United States</div>
        <div>
          LightBox <span>&copy; 2024</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
