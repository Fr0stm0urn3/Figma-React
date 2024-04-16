import styles from "./Booking.module.css"
import { Link } from "react-router-dom"

const Booking = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Book your luxury car detailing today</h2>
      <p className={styles.desc}>
        Click the link bellow. Fill out the details and we’ll get back to you in less than
        24 hours.
      </p>
      <Link className={styles.quote} to="#">
        Get a quote now
      </Link>
    </section>
  )
}

export default Booking
