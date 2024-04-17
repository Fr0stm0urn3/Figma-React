import styles from "./Hero.module.css"
import HeroImage from "../../assets/images/Click. deploy. thrive..png"
import { FaCheck, FaArrowAltCircleRight } from "react-icons/fa"

import logo from "../../assets/images/Fictional company logo.png"
import logo1 from "../../assets/images/Fictional company logo (1).png"
import logo2 from "../../assets/images/Fictional company logo (2).png"
import logo3 from "../../assets/images/Fictional company logo (3).png"
import logo4 from "../../assets/images/Fictional company logo (4).png"
import logo5 from "../../assets/images/Fictional company logo (5).png"

const Hero = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div>
            <img src={HeroImage} alt="" />
          </div>
          <div className={styles.innerContent}>
            <p className={styles.desc}>
              We provide the best hosting and domain services for all your needs with
              unlimited support services
            </p>
          </div>
        </div>
        <ul className={styles.lists}>
          <li className={styles.list}>
            <FaCheck /> Free Domain
          </li>
          <li className={styles.list}>
            <FaCheck /> Free Website Migration
          </li>
          <li className={styles.list}>
            <FaCheck /> 24/7 Customer Support
          </li>
          <li className={`${styles.list} ${styles.btn}`}>
            Get started now <FaArrowAltCircleRight />
          </li>
        </ul>
      </section>
      <div className={styles.images}>
        <img src={logo} alt="" />
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
      </div>
    </>
  )
}

export default Hero
