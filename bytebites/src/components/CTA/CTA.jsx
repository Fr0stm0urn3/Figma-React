import styles from "./CTA.module.css"

const CTA = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Ready To Experience Exceptional Hosting?</h2>
        <p>
          We provide the best hosting and domain services for all your needs with
          unlimited support services
        </p>
        <button>Get Started Now</button>
      </div>
    </section>
  )
}

export default CTA
