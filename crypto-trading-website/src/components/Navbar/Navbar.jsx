import styles from "./Navbar.module.css"
import logo from "../../assets/images/LOGO (10).png"
import { FaChevronDown, FaBars } from "react-icons/fa"
import { useState, useEffect } from "react"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", () => setIsMobileMenuOpen(false))
  }, [])

  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <img src={logo} className={styles.logo} alt="" />
        <ul className={styles.lists}>
          <li>Copytrade</li>
          <li>Markets</li>
          <li>Trades</li>
          <li>
            Earn <span>New</span>
          </li>
        </ul>
        <div className={styles.navButtons}>
          <button className={styles.lBtn}>
            <div className={styles.blueCircle} /> Mainnet <FaChevronDown />
          </button>
          <button className={styles.rBtn}>
            <div className={styles.blueCircle} /> xuQ...yZ23d
          </button>
        </div>
        <div
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <FaBars />
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className={styles.hamburgerMenu}>
          <div className={styles.hamburgerMenuInner}>
            <ul className={styles.lists}>
              <li>Copytrade</li>
              <li>Markets</li>
              <li>Trades</li>
              <li>
                Earn <span>New</span>
              </li>
            </ul>
            <div className={styles.navButtons}>
              <button className={styles.lBtn}>
                <div className={styles.blueCircle} /> Mainnet <FaChevronDown />
              </button>
              <button className={styles.rBtn}>
                <div className={styles.blueCircle} /> xuQ...yZ23d
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
