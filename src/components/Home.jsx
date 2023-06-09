import styles from "../style";
import {myPic} from "../assets";


const Home = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[32px] text-center text-white ss:leading-[100.8px] leading-[75px]">
          
            <span className="text-gradient">Khumbulani Njilo</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
           
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[40px] text-[42px] text-center text-white ss:leading-[100.8px] leading-[75px] w-full">
           Software Developer
        </h1>
        <p className={`${styles.paragraph} text-[25px] leading-[32px] text-center flex-col px-10 py-12 rounded-[20px] feedback-card`}>


          Over the years, I have been focusing on programming courses for junior developers to improve my
          knowledge of Java, Python and JavaScript, and received overwhelmingly positive feedback 
          from my peers. I am a full stack software developer looking for an opportunity to learn and grow in the field
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={myPic} alt="pic" className="bg-blue-400 hover w-[83%] h-[83%] rounded-full mx-auto " />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
      
      </div>
    </section>
  );
};

export default Home;

