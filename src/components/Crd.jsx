import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./Skills";

const Crd = () => (
  <section id="skills" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

   
    <h1 className="font-poppins font-semibold ss:text-[40px] text-[42px] text-center text-white ss:leading-[100.8px] leading-[75px] w-full">
         Skills
        </h1>
    
   

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Crd;