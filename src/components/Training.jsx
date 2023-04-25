import styles from "../style";

const Training = () => (
  <section id="training">
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}  `}>
    <div className="flex-col">
      <h2 className={`${styles.heading2}flex-1 flex flex-col px-10 py-22 rounded-[20px] text-center`}>Training:</h2>
      <h2 className={`${styles.heading2}flex-1 flex flex-col px-10 py-22 rounded-[20px] text-center`}>WeThinkCode_</h2>
      <p className={`${styles.paragraph} text-[25px] leading-[32px] text-center flex-col px-10 py-12 rounded-[20px] feedback-card`}>
        An intense coding bootcamp focused on learning programming by doing indivual, group projects using git to manage the software and existing codebases. The mission is to provide an
      effective platform for training youth in digital skills.
        Learnership under Systems Development
      </p>
      
    </div>
  </section>
 </section>
);

export default Training;