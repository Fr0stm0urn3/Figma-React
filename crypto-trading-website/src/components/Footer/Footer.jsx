import styles from "./Footer.module.css"
import logo from "../../assets/images/LOGO (10).png"

const Footer = () => {
  return (
    <footer className={styles.container}>
      <img src={logo} alt="" />
      <div className={styles.middleLine} />
      <div>Copyright &copy; 2024 BULL-EYE Reserved.</div>
    </footer>
  )
}

export default Footer
