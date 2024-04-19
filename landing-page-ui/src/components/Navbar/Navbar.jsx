import styles from "./Navbar.module.css"
import logo from "../../assets/images/svg3987107727.png"
import { useState, useEffect } from "react"
import { FaBars } from "react-icons/fa"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", () => setIsMobileMenuOpen(false))
  }, [])

  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <img src={logo} alt="" />
        <ul>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>
        <div className={styles.buttons}>
          <button className={styles.signButton}>Sign in</button>
          <button className={styles.startButton}>Start for free</button>
        </div>
        <FaBars
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        />
      </div>
      {isMobileMenuOpen && (
        <div className={styles.menu}>
          <ul>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
          <div className={styles.buttons}>
            <button className={styles.signButton}>Sign in</button>
            <button className={styles.startButton}>Start for free</button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
