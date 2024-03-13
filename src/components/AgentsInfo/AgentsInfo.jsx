/* eslint-disable react/no-unescaped-entities */
import { FaPhoneAlt } from "react-icons/fa";
import { agents } from "./../../../public/info";

const Testimony = () => {
  return (
    <div className="mt-12">
      <h1 className="text-center text-4xl font-bold my-2">
        
        Our Exclusive Agents
      </h1>
      <h1 className="text-green-500 text-xl font-semibold mt-2 text-center">
        
        Expertise Is Here
      </h1>
      <h1 className="text-sm  dark:text-gray-200 text-center my-4">
        
        Verdera is committed to providing unparalleled service in the real
        estate industry. <br /> Whether you're searching for a cozy apartment, a
        family-friendly house.
      </h1>

      <div className="flex flex-col lg:flex-row w-11/12 mx-auto mt-12 ">
        {/* left div for agnets */}
        <div className="w-1/2 flex flex-col  items-center  space-y-6">
    
          {agents.map((agent, idx) => (
            <div key={idx} className="flex items-center gap-x-2">
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
                <div className="flex items-center gap-1 border-2  p-2 rounded border-green-500">
                  <FaPhoneAlt className="text-green-500" />
                  <p> Call:{agent.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Testimony;
