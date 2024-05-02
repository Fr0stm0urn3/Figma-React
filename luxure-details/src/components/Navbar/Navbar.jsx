import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { useState, useEffect } from "react"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobileMenuOpen(false)
    })
  }, [])

  return (
    <nav className={styles.navbar}>
      <h2 className={styles.title}>LuxureDetails</h2>
      <ul className={`${styles.list} ${styles.desc}`}>
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
      <button className={`${styles.btn} ${styles.desc}`}>Get a quote</button>
      <FaBars
        className={styles.hamburger}
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      />
      {isMobileMenuOpen && (
        <div className={styles.hamburgerMenu}>
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
        </div>
      )}
    </nav>
  )
}

export default Navbar
