import styles from "./Form.module.css"

const Form = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Get in touch</h2>
          <p className={styles.subTitle}>
            Contact us for additional details or assistance
          </p>
        </div>

        <form>
          <label htmlFor="postName">Name</label>
          <input type="text" id="postName" name="postName" placeholder="Name" />
          <label htmlFor="postEmail">Email</label>
          <input type="text" id="postEmail" email="postEmail" placeholder="E-mail" />
          <label htmlFor="postMessage">Message</label>
          <textarea
            type="text"
            id="postMessage"
            message="postMessage"
            placeholder="Add your message"
          />
          <button type="button">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Form
