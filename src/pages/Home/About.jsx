/* eslint-disable react/no-unescaped-entities */
import about from "../.../../../assets/images/logo/aboutt.jpg.webp";
import DynamicAgents from "../../components/shared/DynamicNumber/DynamicAgents";
import DynamicClients from "../../components/shared/DynamicNumber/DynamicClients";
import DynamicProjects from "../../components/shared/DynamicNumber/DynamicProjects";
import DynamicYear from "../../components/shared/DynamicNumber/DynamicYear";

const About = () => {
  return (
    <div className="flex mt-6">
      <div className="w-1/2">
      <div className="">
      <img
        src={about}
        className="object-cover w-full h-full rounded-full"
      />
    </div>
      </div>
      <div className="w-1/2 p-12 space-y-6">
       <div className="space-y-8">
       <h4 className="text-center font-bold text-xl text-green-500 my-8">WELCOME TO VERDERA REAL STATE AGENCY</h4>

<p className="text-[#33333380]">Welcome to Verdera Real Estate, where your dream home becomes a reality. At Verdera, we understand that finding the perfect property is not just about location; it's about creating a space that truly reflects your lifestyle and aspirations.</p>
<p className="text-[#33333380]">With a team of dedicated professionals, Verdera is committed to providing unparalleled service in the real estate industry. Whether you're searching for a cozy apartment, a family-friendly house, or a luxurious estate, we have a diverse portfolio to cater to every taste and preference.</p>
<p className="text-[#33333380]">
Our mission goes beyond transactions; it's about building lasting relationships. We pride ourselves on transparency, integrity, and a client-centric approach. From your initial inquiry to the keys in your hand, Verdera is here to guide you every step of the way.
</p>
<div className="flex justify-between ">
       <div className="flex  items-center gap-3 text-green-500 outline-double p-2 "> <DynamicProjects></DynamicProjects> <span className="font-bold">+ Projects</span></div>
       <div className="flex  items-center gap-2 text-green-500 outline-double p-2"> <DynamicClients></DynamicClients> <span className="font-bold">+Clients</span></div>
       <div className="flex  items-center gap-3 text-green-500 outline-double p-2"> <DynamicAgents></DynamicAgents> <span className="font-bold">+ Agents</span></div>
</div>
       </div>
<div className=" flex justify-center ">
  <div className="flex-col w-1/2 items-center p-2 space-y-1 rounded text-white bg-green-500">
    <DynamicYear></DynamicYear>
    <p className="text-lg font-extrabold">YEARS OF EXPERIENCE</p>
  </div>
</div>

      </div>


      {/* <div className="relative">
      <div className="absolute top-3 right-3 rounded text-white opacity- bg-green-500">
        <div className="flex-col justify-start items-center p-4 space-y-1"> <DynamicYear></DynamicYear>
        <p className="text-lg font-extrabold">YEARS OF EXPERIENCE</p>
        </div>
      </div>
      </div> */}


    </div>
  );
};

export default About;
