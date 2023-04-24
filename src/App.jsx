import React from "react"
import styles from "./style";
import {Cards, Skills, Training, Offered, Navbar, Hero, } from "./components";

const App = () => (

    <div className="bg-primary w-full overflow-hidden">
    
     <div className={'${styles.paddingX} ${styles.flexcenter}'}>
      <div className={'${styles.boxWidth}'}>
        <Navbar/>
      </div>
     </div>

     <div className={'bg-primary ${styles.flexStart'}>
      <div className={'$styles.boxWidth'}>
        <Hero/>
      </div>
     </div>

     <div className={'bg-primary ${styles.paddingX} ${styles.flexStart'}>
      <div className={'$styles.boxWidth'}>
        <Training/>
        <Skills/>
        <Cards/>
        <Offered />
      </div>
     </div>
    </div>
);

export default App