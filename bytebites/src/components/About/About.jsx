import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <h3>35,000</h3>
          <p>Websites already thriving with us!</p>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.innerRightContent}>
            <h4>
              Experience the power of speed with our cutting-edge hosting infrastructure
            </h4>
            <button>Read Our Story</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
