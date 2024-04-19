import styles from "./SectionTwo.module.css"

import headerImg from "../../assets/images/Div [framer-mlL6I].png"

import { FaArrowRight } from "react-icons/fa"
import cardImg from "../../assets/images/Div [framer-r0fgs5].png"
import iconSvg1 from "../../assets/images/Icon (2).png"
import iconSvg2 from "../../assets/images/Icon (3).png"
import iconSvg3 from "../../assets/images/Icon (4).png"
import iconSvg4 from "../../assets/images/Icon (5).png"
import iconSvg5 from "../../assets/images/Icon (6).png"
import iconSvg6 from "../../assets/images/Icon (7).png"

const SectionTwo = () => {
  return (
    <>
      <img src={headerImg} alt="" className={styles.headerImg} />
      <section className={styles.container}>
        <div className={styles.content}>
          <h2>Easy setup and instant output</h2>
          <p className={styles.subtitle}>
            Nothing has been more easy for designers and more customizable for developers
          </p>
          <div className={styles.buttons}>
            <button className={styles.bookBtn}>Book demo</button>
            <button className={styles.watchBtn}>Watch Video</button>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>Sync your tokens</h3>
              <p>
                Specify is natively compatible with Figma, GitHub, Notion, Raycast, and
                many more to come. Our REST API and CLI help you to connect even more.
              </p>
              <button>
                <FaArrowRight />
                Discover all available apps
              </button>
            </div>
            <div className={styles.card}>
              <h3>Customize outputs</h3>
              <p>
                Specify's open source parsers help you generate design tokens and assets
                that match your company standards.
              </p>
              <button>
                Discover all parsers <FaArrowRight />
              </button>
              <img src={cardImg} alt="" />
            </div>
          </div>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h5>
                <span>
                  <img src={iconSvg1} alt="" />
                </span>{" "}
                Stay flexible
              </h5>
              <p>
                Sync tokens from multiple sources to one repository, extract them in any
                structure using our SDK, GitHub integration, or CLI. We got you covered
                once you want to scale.
              </p>
            </div>
            <div className={styles.box}>
              <h5>
                <span>
                  <img src={iconSvg2} alt="" />
                </span>{" "}
                Stay flexible
              </h5>
              <p>
                Sync tokens from multiple sources to one repository, extract them in any
                structure using our SDK, GitHub integration, or CLI. We got you covered
                once you want to scale.
              </p>
            </div>
            <div className={styles.box}>
              <h5>
                <span>
                  <img src={iconSvg3} alt="" />
                </span>{" "}
                Stay flexible
              </h5>
              <p>
                Sync tokens from multiple sources to one repository, extract them in any
                structure using our SDK, GitHub integration, or CLI. We got you covered
                once you want to scale.
              </p>
            </div>
            <div className={styles.box}>
              <h5>
                <span>
                  <img src={iconSvg4} alt="" />
                </span>{" "}
                Stay flexible
              </h5>
              <p>
                Sync tokens from multiple sources to one repository, extract them in any
                structure using our SDK, GitHub integration, or CLI. We got you covered
                once you want to scale.
              </p>
            </div>
            <div className={styles.box}>
              <h5>
                <span>
                  <img src={iconSvg5} alt="" />
                </span>{" "}
                Stay flexible
              </h5>
              <p>
                Sync tokens from multiple sources to one repository, extract them in any
                structure using our SDK, GitHub integration, or CLI. We got you covered
                once you want to scale.
              </p>
            </div>
            <div className={styles.box}>
              <h5>
                <span>
                  <img src={iconSvg6} alt="" />
                </span>{" "}
                Stay flexible
              </h5>
              <p>
                Sync tokens from multiple sources to one repository, extract them in any
                structure using our SDK, GitHub integration, or CLI. We got you covered
                once you want to scale.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionTwo
