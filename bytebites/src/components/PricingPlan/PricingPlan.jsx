import styles from "./PricingPlan.module.css"
import { FaChevronDown } from "react-icons/fa"

const PricingPlan = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>The Perfect-Web Hosting Plan</h2>
          <p>Crafted Hosting Solutions For Every Need</p>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <h3>
              $<span className={styles.price}>2.62</span>
              <span className={styles.month}>/month</span>
            </h3>
            <div className={styles.borderBottom} />
            <div className={styles.subscription}>
              <h5>Premium</h5>
              <p>Prioritizing top-tier performance</p>
            </div>
            <button>Add To Chart</button>
            <div className={styles.features}>
              <h5>Features</h5>
              <span>
                <FaChevronDown />
              </span>
            </div>
          </div>
          <div className={styles.item}>
            <h3>
              $<span className={styles.price}>2.62</span>
              <span className={styles.month}>/month</span>
            </h3>
            <div className={styles.borderBottom} />

            <div className={styles.subscription}>
              <h5>Premium</h5>
              <p>Prioritizing top-tier performance</p>
            </div>
            <button>Add To Chart</button>
            <div className={styles.features}>
              <h5>Features</h5>
              <span>
                <FaChevronDown />
              </span>
            </div>
          </div>
          <div className={styles.item}>
            <h3>
              $<span className={styles.price}>2.62</span>
              <span className={styles.month}>/month</span>
            </h3>
            <div className={styles.borderBottom} />

            <div className={styles.subscription}>
              <h5>Premium</h5>
              <p>Prioritizing top-tier performance</p>
            </div>
            <button>Add To Chart</button>
            <div className={styles.features}>
              <h5>Features</h5>
              <span>
                <FaChevronDown />
              </span>
            </div>
          </div>
        </div>
        <h3>Don't see what you are looking for?</h3>
        <div className={styles.contactBtn}>
          <button>Contact Sales Agent</button>
        </div>
      </div>
    </section>
  )
}

export default PricingPlan
