import styles from "./Pricing.module.css"
import { FaCheck, FaArrowRight } from "react-icons/fa"

const Pricing = () => {
  return (
    <section id="pricing" className={styles.container}>
      <div className={styles.content}>
        <h3>Pricing</h3>
        <p className={styles.subTitle}>
          Explore our pricing plans tailored to fit your needs
        </p>
        <button className={styles.titleBtn}>
          Monthly <li>Yearly +20% off</li>
        </button>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h4>Basic</h4>
            <div className={styles.price}>
              $9.99<span>/month</span>
            </div>
            <p>Essential features for beginners.</p>
            <a href="/" className={styles.getStartedBtn}>
              Get started with Basics <FaArrowRight className={styles.arrowIcon} />
            </a>
            <ul>
              <li>
                <FaCheck className={styles.icon} /> Basic Platform Access
              </li>
              <li>
                <FaCheck className={styles.icon} /> Email Support
              </li>
              <li>
                <FaCheck className={styles.icon} /> Limited Data Storage
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h4>Pro</h4>
              <div>Most Popular</div>
            </div>
            <div className={styles.price}>
              $9.99<span>/month</span>
            </div>
            <p>Essential features for beginners.</p>
            <a href="/" className={styles.getStartedBtn}>
              Get started with Basics <FaArrowRight className={styles.arrowIcon} />
            </a>
            <ul>
              <li>
                <FaCheck className={styles.icon} /> Basic Platform Access
              </li>
              <li>
                <FaCheck className={styles.icon} /> Email Support
              </li>
              <li>
                <FaCheck className={styles.icon} /> Limited Data Storage
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h4>Premium</h4>
            <div className={styles.price}>
              $9.99<span>/month</span>
            </div>
            <p>Essential features for beginners.</p>
            <a href="/" className={styles.getStartedBtn}>
              Get started with Basics <FaArrowRight className={styles.arrowIcon} />
            </a>
            <ul>
              <li>
                <FaCheck className={styles.icon} /> Basic Platform Access
              </li>
              <li>
                <FaCheck className={styles.icon} /> Email Support
              </li>
              <li>
                <FaCheck className={styles.icon} /> Limited Data Storage
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.pricingFooter}>
        <div className={styles.left}>
          <h2>Unlock the Power of Web3 Today!</h2>
          <p>Join us on the journey to the decentralized future.</p>
        </div>
        <button>Get Started</button>
      </div>
    </section>
  )
}

export default Pricing
