/* eslint-disable react/no-unescaped-entities */
import { FaPhoneAlt } from "react-icons/fa";
import { agents } from "../../../info";
import Heading from "../shared/Heading";
import SubHeading from "../shared/SubHeading";
import SubHeading2 from "../shared/SubHeading2";

const AgentsInfo = () => {
  return (
    <div className="border">
      <Heading text='Our Exclusive Agents'/>
      <SubHeading subHeading="Expertise Is Here"/>
      <SubHeading2 subHeading2={`Verdera is committed to providing unparalleled service in the real estate industry.< Whether you're searching for a cozy apartment, a
        family-friendly house.`} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center ">
    
          {agents.map((agent, idx) => (
            <div key={idx} className="flex items-center justify-center gap-x-2 border rounded py-8 p-1 shadow-md w-full hover:shadow-lg">
              <img
                className="object-cover w-32 h-32 rounded-full"
                src={agent.image}
                alt=""
              />

              <div className="space-y-3">
                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  {agent.name}
                </h1>

                <p className="text-base text-gray-500 dark:text-gray-400">
                  {agent.email}
                </p>
                <div className="flex items-center gap-1 border-2  p-1 rounded border-green-500 ">
                  <FaPhoneAlt className="text-green-500" />
                  <p> Call:{agent.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};
export default AgentsInfo;
