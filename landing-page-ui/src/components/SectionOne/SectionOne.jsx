import styles from "./SectionOne.module.css"
import image from "../../assets/images/image 1.png"

import svg1 from "../../assets/images/svg42519691.png"
import svg2 from "../../assets/images/Icon.png"
import svg3 from "../../assets/images/Icon (1).png"

const SectionOne = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Taking design tokens to the next level</h2>
      <div className={styles.subtitle}>
        Specify helps you gain control of your design system across teams and products
      </div>
      <div className={styles.buttons}>
        <button className={styles.bookBtn}>Book demo</button>
        <button className={styles.readBtn}>React vision</button>
      </div>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <div className={styles.card}>
            <h3>
              <span>
                <img src={svg1} alt="" />
              </span>{" "}
              Unified Design Language
            </h3>
            <p>
              Centralize tokens from Figma Styles, Figma Variables, Tokens Studio, or your
              own JSON file and ensure a consistent design language across all your
              digital products. Specify supports over 50 token types.
            </p>
          </div>
          <div className={styles.card}>
            <h3>
              <span>
                <img src={svg2} alt="" />
              </span>{" "}
              Effortless collaboration
            </h3>
            <p>
              Specify provides a collaborative space where designers can sync design
              tokens, and developers can seamlessly integrate design tokens into their
              platform.
            </p>
          </div>
          <div className={styles.card}>
            <h3>
              <span>
                <img src={svg3} alt="" />
              </span>{" "}
              Customizable workflow
            </h3>
            <p>
              Tailor Specify to fit your team's unique workflow. No matter how specific
              your design and development processes are, our platform adapts to your
              needs.
            </p>
          </div>
        </div>
        <img src={image} alt="" className={styles.img} />
      </div>
    </section>
  )
}

export default SectionOne
