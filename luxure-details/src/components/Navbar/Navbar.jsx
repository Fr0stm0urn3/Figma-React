import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.title}>LuxureDetails</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link to="#">Services</Link>
        </li>
        <li className={styles.listItem}>
          <Link to="#">Pricing</Link>
        </li>
        <li className={styles.listItem}>
          <Link to="#">About</Link>
        </li>
        <li className={styles.listItem}>
          <Link to="#">Contact</Link>
        </li>
      </ul>
      <button className={styles.btn}>Get a quote</button>
    </nav>
  )
}

export default Navbar
