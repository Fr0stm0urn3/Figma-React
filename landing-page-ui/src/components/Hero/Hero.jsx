import styles from "./Hero.module.css"
import heroImg from "../../assets/images/Video.png"

import img from "../../assets/images/Link [framer-kfCFp].png"
import img1 from "../../assets/images/Link [framer-kfCFp] (1).png"
import img2 from "../../assets/images/Link [framer-kfCFp] (2).png"
import img3 from "../../assets/images/Link [framer-kfCFp] (3).png"
import img4 from "../../assets/images/Link [framer-kfCFp] (4).png"
import img5 from "../../assets/images/Link [framer-kfCFp] (5).png"
import img6 from "../../assets/images/Link [framer-kfCFp] (6).png"

const Hero = () => {
  return (
    <>
      <section id="hero" className={styles.container}>
        <div className={styles.content}>
          <h1>You Design Token Engine</h1>
          <div>
            <p>Flexible and powerful, Specify makes it easy to build the exact</p>
            <p>Design Token workflow your Design System needs.</p>
          </div>
          <div className={styles.buttons}>
            <button className={styles.bookBtn}>Book demo</button>
            <button className={styles.startBtn}>Start for free</button>
          </div>

          <img src={heroImg} alt="" />
        </div>
      </section>
      <div className={styles.imagesText}>Specify is loved by</div>
      <div className={styles.images}>
        <img src={img} alt="" />
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
      </div>
    </>
  )
}

export default Hero
