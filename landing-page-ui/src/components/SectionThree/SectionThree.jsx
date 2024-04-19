import styles from "./SectionThree.module.css"

import cardImg1 from "../../assets/images/Div [framer-t1d97j].png"
import cardImg2 from "../../assets/images/Div [framer-t1d97j] (1).png"
import cardImg3 from "../../assets/images/Div [framer-t1d97j] (2).png"

const SectionThree = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Trusted by product teams</h2>
        <p>
          Book your demo start automating the distribution of your design - your team will
          love it
        </p>
        <div className={styles.buttons}>
          <button className={styles.bookBtn}>Book demo</button>
          <button className={styles.startBtn}>Get Started with Specify</button>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={cardImg1} alt="" />
            <div>
              "The automation from design to code with Specify is incredibly powerful. The
              ability to reference the same tokens and assets in Figma — and in our
              codebase — saves us an incredible amount of time, while reducing manual,
              error-prone work.”
            </div>
          </div>
          <div className={styles.card}>
            <img src={cardImg2} alt="" />
            <div>
              "The automation from design to code with Specify is incredibly powerful. The
              ability to reference the same tokens and assets in Figma — and in our
              codebase — saves us an incredible amount of time, while reducing manual,
              error-prone work.”
            </div>
          </div>
          <div className={styles.card}>
            <img src={cardImg3} alt="" />
            <div>
              "The automation from design to code with Specify is incredibly powerful. The
              ability to reference the same tokens and assets in Figma — and in our
              codebase — saves us an incredible amount of time, while reducing manual,
              error-prone work.”
            </div>
          </div>
          <div className={styles.card}>
            <img src={cardImg2} alt="" />
            <div>
              "The automation from design to code with Specify is incredibly powerful. The
              ability to reference the same tokens and assets in Figma — and in our
              codebase — saves us an incredible amount of time, while reducing manual,
              error-prone work.”
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionThree
