import styles from "./Services.module.css"
import img from "../../assets/images/Rectangle 7.png"

const Services = () => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.title}>We will take good care of your car</h3>
        <img src={img} alt="" />
      </div>
      <div className={styles.middleLine} />
      <div className={styles.services}>
        <div className={styles.service}>
          <h3>Precise work</h3>
          <p>
            We uphold the highest standards of professionalism when servicing your
            vehicles.
          </p>
        </div>
        <div className={styles.service}>
          <h3>Premium Products and Services</h3>
          <p>
            Ensure your car's longevity with a periodic exterior protection treatment.
          </p>
        </div>
        <div className={styles.service}>
          <h3>High-Level Security and Privacy</h3>
          <p>
            We understand the importance of privacy and security for their our clientele.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
