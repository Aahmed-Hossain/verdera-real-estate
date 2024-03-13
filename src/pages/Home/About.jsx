/* eslint-disable react/no-unescaped-entities */
import about from "../.../../../assets/images/logo/aboutt.jpg.webp";
import DynamicAgents from "../../components/shared/DynamicNumber/DynamicAgents";
import DynamicClients from "../../components/shared/DynamicNumber/DynamicClients";
import DynamicProjects from "../../components/shared/DynamicNumber/DynamicProjects";
import DynamicYear from "../../components/shared/DynamicNumber/DynamicYear";

const About = () => {
  return (
    <div className="mt-16">
      <h1 className="text-center text-4xl font-bold my-2"> About Our Legacy In Real Estate History</h1>
<h1 className="text-green-500 text-xl font-semibold mt-2 text-center"> Your trusted and Supportive Real Estate Company</h1>
<h1 className="text-sm  dark:text-gray-200 text-center my-4 mb-12"> Verdera is committed to providing unparalleled service in the real estate industry. <br/> Whether you're searching for a cozy apartment, a family-friendly house.</h1>
      <div className="flex flex-col md:flex-col lg:flex-row gap-0 md:gap-4 lg:gap-6 ">
      <div className="w-full md:w-full lg:w-1/2">
      <div className="">
      <img
        src={about}
        className="object-cover rounded"
      />
    </div>
      </div>
      <div className="w-full md:w-ful lg:w-1/2  space-y-8">
       <div className="space-y-6">
       
<p className="text-[#33333380]">Welcome to Verdera Real Estate, where your dream home becomes a reality. At Verdera, we understand that finding the perfect property is not just about location; it's about creating a space that truly reflects your lifestyle and aspirations.</p>
<p className="text-[#33333380]">With a team of dedicated professionals, Verdera is committed to providing unparalleled service in the real estate industry. Whether you're searching for a cozy apartment, a family-friendly house, or a luxurious estate, we have a diverse portfolio to cater to every taste and preference.</p>
<p className="text-[#33333380]">
Our mission goes beyond transactions; it's about building lasting relationships. We pride ourselves on transparency, integrity, and a client-centric approach. From your initial inquiry to the keys in your hand, Verdera is here to guide you every step of the way.
</p>
<div className="flex flex-wrap justify-center gap-2">
       <div className="flex  items-center  text-green-500 outline-double gap-2 p-1 w-40"><DynamicProjects></DynamicProjects><span className="font-bold">Projects</span></div>
       <div className="flex  items-center  text-green-500 outline-double gap-2 p-1 w-40"> <DynamicClients></DynamicClients> <span className="font-bold">Clients</span></div>
       <div className="flex  items-center text-green-500 outline-double gap-2 p-1 w-40 "> <DynamicAgents></DynamicAgents> <span className="font-bold">Agents</span></div>
</div>
       </div>
<div className=" flex justify-center">
  <div className="flex-col  items-center p-2 space-y-1 rounded text-white bg-green-500">
    <DynamicYear></DynamicYear>
    <p className="text-lg font-extrabold">YEARS OF EXPERIENCE</p>
  </div>
</div>

      </div>
      </div>
    </div>
  );
};

export default About;
