// import { quotes } from "../assets";

const Skills = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
   
     <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
       {content}
     </p>

    <div className="flex flex-row">
    
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
      
    </div>
  // </div>
);


export default Skills;