import styles from "../style";

const Training = () => (
  <section id="training">
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[25px] box-shadow`}>
    <div className="flex-col">
      <h2 className={styles.heading2}>Training:</h2>
      <h2 className={styles.heading2}>WeThinkCode_</h2>
      <p className={`${styles.paragraph} text-white`}>
        An intense coding bootcamp focused on learning programming by doing indivual, group projects using git to manage the software and existing codebases
      </p>
    </div>
  </section>
 </section>
);

export default Training;