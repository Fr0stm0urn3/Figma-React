import styles from "./Navbar.module.css"
import logo from "../../assets/images/Logo (2).png"
import { FaAngleDown, FaGlobe, FaBars } from "react-icons/fa"
import { useState } from "react"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <ul className={styles.items}>
          <li className={styles.item}>
            Hosting{" "}
            <span>
              <FaAngleDown />
            </span>
          </li>
          <li className={styles.item}>Vps</li>
          <li className={styles.item}>
            Website Builder{" "}
            <span>
              <FaAngleDown />
            </span>
          </li>
          <li className={styles.item}>
            Domain{" "}
            <span>
              <FaAngleDown />
            </span>
          </li>
        </ul>
        <div className={styles.buttons}>
          <button className={styles.btn}>
            <span>
              <FaGlobe className={styles.globe} />
            </span>{" "}
            Eng
          </button>
          <button className={styles.btn}>Sign Up</button>
        </div>
        <div
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <FaBars />
        </div>
      </div>
      <div className={`${isMobileMenuOpen ? styles.active : styles.notVisible} `}>
        <ul className={styles.itemsActive}>
          <li className={styles.itemActive}>Hosting</li>
          <li className={styles.itemActive}>Vps</li>
          <li className={styles.itemActive}>Website Builder</li>
          <li className={styles.itemActive}>Domain</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
