// import { quotes } from "../assets";

const Skills = ({ content, name}) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5">
     <p className="font-poppins font-normal text-[25px] leading-[32px] text-white my-10 flex-1 flex flex-col px-10 py-11 rounded-[20px] text-white">
       {content}
     </p>
    <div className="flex">

        <h4 className="font-poppins font-semibold text-[30px] leading-[32px]flex-1 flex flex-col px-10 py-11 rounded-[20px] text-white">
          {name}
        </h4>
      </div>
    </div>
  
);


export default Skills;