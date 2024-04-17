import styles from "./Navbar.module.css"
import logo from "../../assets/images/Logo (2).png"
import { FaAngleDown, FaGlobe } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <div>
          <img src={logo} alt="logo" />
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
        <div>
          <button className={styles.btn}>
            <span>
              <FaGlobe className={styles.globe} />
            </span>{" "}
            Eng
          </button>
          <button className={styles.btn}>Sign Up</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
