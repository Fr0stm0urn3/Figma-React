import styles from "./Features.module.css"

import codeImg from "../../assets/images/IERC20~1.PNG"
import buttonsImg from "../../assets/images/Button container.png"
import cryptoImg from "../../assets/images/Vertical container.png"

const Features = () => {
  return (
    <section id="features" className={styles.container}>
      <h2>Explore Out Feature</h2>
      <div className={styles.subTitle}>
        Discover the powerful features that make out platform stand out
      </div>
      <div className={styles.content}>
        <div className={styles.topContent}>
          <div className={styles.card}>
            <h5>Ready to go services</h5>
            <p>Streamlining solutions for swift success</p>
            <div className={styles.buttons}>
              <div className={styles.button}>Powerful APIs</div>
              <div className={styles.button}>Powerful APIs</div>
              <div className={styles.button}>Powerful APIs</div>
              <div className={styles.button}>Powerful APIs</div>
              <div className={styles.button}>Powerful APIs</div>
              <div className={styles.button}>Powerful APIs</div>
            </div>
          </div>
          <div className={styles.card}>
            <h5>For growing teams</h5>
            <p>Tailored support to give you progress</p>
            <div className={styles.inviteBtn}>Invite user to this team</div>
          </div>
        </div>
        <div className={styles.bottomContent}>
          <div className={styles.card}>
            <h5>Powerful APIs for developers</h5>
            <p>Seamless Integration for your company</p>
            <div>
              <img src={codeImg} alt="" />
            </div>
          </div>
          <div className={styles.card}>
            <h5>The best blockchains out there</h5>
            <p> Pioneering paths in decentralized solutions</p>
            <img src={cryptoImg} alt="" />
          </div>
          <div className={styles.card}>
            <h5>Web 3.0 development</h5>
            <p>Crafting tomorrow's digital landscape today</p>
            <img src={buttonsImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
