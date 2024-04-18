import styles from "./Hero.module.css"
import frame from "../../assets/images/Frame 427320892.png"

import image1 from "../../assets/images/Logo (4).png"
import image2 from "../../assets/images/Logo (5).png"
import image3 from "../../assets/images/Logo (6).png"
import image4 from "../../assets/images/Logo (7).png"
import image5 from "../../assets/images/Logo (8).png"
import image6 from "../../assets/images/Logo (9).png"

const Hero = () => {
  return (
    <>
      <section id="hero" className={styles.container}>
        <div className={styles.header}>
          <h1>Build the Future with Web</h1>
          <p className={styles.subTitle}>
            Discover how we can help you connect with the next generation of the internet
          </p>
          <div className={styles.buttons}>
            <button className={styles.signBtn}>Sign Up</button>
            <button className={styles.contactBtn}>Contact sales</button>
          </div>
          <div className={styles.perks}>
            <div className={styles.perk}>
              <div className={styles.perkHeader}>
                <img src={frame} alt="" />
                <h4>Cross-Chain Access</h4>
              </div>
              <p>Seamlessly interact with diverse blockchain networks.</p>
            </div>
            <div className={styles.perk}>
              <div className={styles.perkHeader}>
                <img src={frame} alt="" />
                <h4>Cross-Chain Access</h4>
              </div>
              <p>Seamlessly interact with diverse blockchain networks.</p>
            </div>
            <div className={styles.perk}>
              <div className={styles.perkHeader}>
                <img src={frame} alt="" />
                <h4>Cross-Chain Access</h4>
              </div>
              <p>Seamlessly interact with diverse blockchain networks.</p>
            </div>
            <div className={styles.perk}>
              <div className={styles.perkHeader}>
                <img src={frame} alt="" />
                <h4>Cross-Chain Access</h4>
              </div>
              <p>Seamlessly interact with diverse blockchain networks.</p>
            </div>
            <div className={styles.perk}>
              <div className={styles.perkHeader}>
                <img src={frame} alt="" />
                <h4>Cross-Chain Access</h4>
              </div>
              <p>Seamlessly interact with diverse blockchain networks.</p>
            </div>
            <div className={styles.perk}>
              <div className={styles.perkHeader}>
                <img src={frame} alt="" />
                <h4>Cross-Chain Access</h4>
              </div>
              <p>Seamlessly interact with diverse blockchain networks.</p>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.heroFooter}>
        <h3>Trusted by the worlds leaders</h3>
        <div className={styles.images}>
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
          <img src={image6} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero
