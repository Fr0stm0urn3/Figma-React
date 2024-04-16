import styles from "./Details.module.css"
import { Link } from "react-router-dom"
import car1 from "../../assets/images/Rectangle 5.png"
import car2 from "../../assets/images/Rectangle 6.png"
import car3 from "../../assets/images/Rectangle 4.png"
import car4 from "../../assets/images/Group 363.png"

const Details = () => {
  return (
    <section className={styles.container}>
      <h5 className={styles.heading}>Luxury car detailing</h5>
      <div className={styles.line} />
      <div className={styles.descHeader}>
        <h3 className={styles.title}>Love in Every Detail</h3>
        <p className={styles.desc}>
          Immerse yourself in luxury with our bespoke detailing packages tailored to your
          car's unique needs.
        </p>
      </div>
      <div className={styles.details}>
        <div className={styles.detail}>
          <img src={car1} alt="" />
          <h4>Entry level detail</h4>
          <p>Treat your luxury car to a thorough hand wash and wax application.</p>
          <Link to={"#"}>Learn more</Link>
        </div>
        <div className={styles.detail}>
          <img src={car2} alt="" />
          <h4>Entry level detail</h4>
          <p>Treat your luxury car to a thorough hand wash and wax application.</p>
          <Link to={"#"}>Learn more</Link>
        </div>
        <div className={styles.detail}>
          <img src={car3} alt="" />
          <h4>Entry level detail</h4>
          <p>Treat your luxury car to a thorough hand wash and wax application.</p>
          <Link to={"#"}>Learn more</Link>
        </div>
      </div>
      <img className={styles.thumbnail} src={car4} alt="" />
    </section>
  )
}

export default Details
