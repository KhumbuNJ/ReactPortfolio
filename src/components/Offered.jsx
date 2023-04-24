import React from 'react'
import styles from '../style';
const Offered = () => (
  <section id="whyme">
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-row bg-black-gradient-2 rounded-[25px] box-shadow`}>
    <div className="flex-1 flex flex-col text-center">
      <h2 className={styles.heading2}>Why me?</h2>
      <h1 className={`${styles.heading1} text-center text-white`}>
        I can collaborate in teams of any size meaning that communicating is something
         I do really well
      </h1>
      <h1 className={`${styles.heading1} text-center text-white`}>
         Confortable working in a fast paced or high pressure environment
      </h1>
      <h1 className={`${styles.heading1} text-center text-white`}>
        Willing to learn more, more and more
        </h1>
      <h1 className={`${styles.heading1} text-center text-white`}>
      If you’re wondering why I’m interested in joining SovTech
      , working in such a dynamic environment would be an amazing opportunity to grow professionally.
      </h1>
      <p>.</p>
    </div>
  </section>

    
 </section>
);

export default Offered