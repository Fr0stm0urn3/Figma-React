import styles from "./Hero.module.css"
import img from "../../assets/images/Subtract.png"

const Hero = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Luxury car detailing</h1>
      <p className={styles.text}>
        Experience the prestige of a professionally detailed car, radiating elegance and
        refinement at every turn.
      </p>
      <p className={styles.connect}>
        Let's connect <span>font</span>
      </p>
      <img src={img} alt="" className={styles.img} />
    </section>
  )
}

export default Hero
