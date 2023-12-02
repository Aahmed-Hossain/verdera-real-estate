/* eslint-disable react/no-unescaped-entities */

import { FaPhoneVolume } from "react-icons/fa6";


const ReviewCard2 = () => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-md max-w-md mx-auto my-2">
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src="https://i.ibb.co/CBfG8Vs/staff-3-jpg.webp" alt="Client" />
          </div>
        </div>
        <p className="text-center mt-4 text-gray-800">
        "An exceptional gastronomic journey! The culinary creations are a symphony of taste and presentation. The warm and inviting ambiance adds to the pleasure of savoring extraordinary dishes."
        </p>
        <div className="text-center mt-4">
          <p className="text-gray-600 font-semibold">Babb Joe</p>
          <p className="text-gray-500">BabbJoe@gmail.com</p>
          <div className="flex gap-3 items-center justify-center"> <p><FaPhoneVolume className="text-green-500"></FaPhoneVolume></p><p className="text-gray-500">+66459678953465377475947</p></div>
        </div>
      </div>
    );
};

export default ReviewCard2;