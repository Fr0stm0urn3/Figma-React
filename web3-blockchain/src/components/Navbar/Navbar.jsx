import styles from "./Navbar.module.css"
import logo from "../../assets/images/LOGO (3).png"
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
    <>
      <nav className={styles.container}>
        <div className={styles.content}>
          <img src={logo} alt="" href="/" />
          <ul className={styles.lists}>
            <li>
              <button href="#">Home</button>
            </li>
            <li>
              <button href="#pricing">Pricing</button>
            </li>
            <li>
              <button href="#features">Features</button>
            </li>
            <li>
              <button href="#">Contact</button>
            </li>
          </ul>
          <FaBars
            className={styles.hamburger}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          />
          <button className={styles.signUpBtn}>Sign up</button>
        </div>
        {isMobileMenuOpen && (
          <div className={styles.menu}>
            <ul className={styles.menuLists}>
              <li>
                <button href="#">Home</button>
              </li>
              <li>
                <button href="#pricing">Pricing</button>
              </li>
              <li>
                <button href="#features">Features</button>
              </li>
              <li>
                <button href="#">Contact</button>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <div className={styles.borderBottom} />
    </>
  )
}

export default Navbar
