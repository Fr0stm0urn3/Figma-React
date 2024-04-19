import styles from "./SectionFour.module.css"

import { FaArrowCircleRight } from "react-icons/fa"

import cardImage1 from "../../assets/images/Div [framer-1kmh5bw].png"
import cardImage2 from "../../assets/images/Div [framer-py5bty].png"

const SectionFour = () => {
  return (
    <section className={styles.container}>
      <h2>Design tokens are the heart of your design system</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h4>Design tokens and assets</h4>
          <p>
            Specify supports colors, text styles, shadows, dimensions, bitmaps, vectors,
            font files, and many more. All of them are automatically synced and updated.
          </p>
          <button>
            View documentation <FaArrowCircleRight />
          </button>
          <img src={cardImage1} alt="" />
        </div>
        <div className={styles.card}>
          <h4>Export production-ready code</h4>
          <p>
            Use our templates to generate design tokens for any platform, ranging from
            CSS, Tailwind, React to React Native, Flutter, Style Dictionary and more.
          </p>
          <button>
            Discover out templates <FaArrowCircleRight />
          </button>
          <img src={cardImage2} alt="" />
        </div>
      </div>
      <h2>Start automating your design system today</h2>
      <button className={styles.bookButton}>Book demo</button>
    </section>
  )
}

export default SectionFour
