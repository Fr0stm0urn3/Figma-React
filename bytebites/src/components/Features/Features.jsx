import styles from "./Features.module.css"
import image from "../../assets/images/img.png"
import imageBottomLeft from "../../assets/images/Frame 143.png"
import imageBottomRight from "../../assets/images/Frame 1000006421.png"

const Features = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <h3>Fast Websites, Always</h3>
          <p>You website will load super fast because we use the latest</p>
          <div className={styles.lists}>
            <div className={styles.list}>
              <div>ByteBites </div>
              <div className={styles.chart} />
            </div>
            <div className={styles.list}>
              <div>Other 1</div>
              <div className={styles.chart} />
            </div>
            <div className={styles.list}>
              <div>Other 2</div>
              <div className={styles.chart} />
            </div>
            <div className={styles.list}>
              <div>Other 3</div>
              <div className={styles.chart} />
            </div>
            <div className={styles.list}>
              <div>Other 4</div>
              <div className={styles.chart} />
            </div>
          </div>
        </div>
        <div className={styles.story}>
          <div className={styles.storyContent}>
            <h3>Grow Your Website Easily</h3>
            <button>Read Our Story</button>
            <div className={styles.visitor}>
              <div>+56%</div>
              <div>Visitor</div>
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <h3>Help When You Need It</h3>
          <p>Need help? We're here 24/7. Our team is super friendly</p>
          <img src={image} alt="" />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.bottomLeft}>
          <h3>Keep Your Website Safe</h3>
          <p>
            We've got a bunch of security tools to make sure your website stays safe from
            bad stuff
          </p>
          <img src={imageBottomLeft} alt="" />
        </div>
        <div className={styles.bottomRight}>
          <h3>Great Service, Affordable Prices</h3>
          <p>
            We give you a lot for your money. Big websites or small, we have a plan that
            fits your budget and gives you everything you need.
          </p>
          <img src={imageBottomRight} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Features
