/* eslint-disable react/no-unescaped-entities */

import { FaPhoneVolume } from "react-icons/fa6";


const ReviewCard3 = () => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-md max-w-md mx-auto my-2">
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src="https://i.ibb.co/MBqFSTs/staff-1-jpg.webp" alt="Client" />
          </div>
        </div>
        <p className="text-center mt-4 text-gray-800">
        "A culinary haven! The menu showcases a delightful array of dishes, each a masterpiece. The cozy ambiance with subtle decor creates an intimate and enjoyable setting for a memorable dining experience."
        </p>
        <div className="text-center mt-4">
          <p className="text-gray-600 font-semibold">Rogen Jampa</p>
          <p className="text-gray-500">RogenJampa@gmail.com</p>
          <div className="flex gap-3 items-center justify-center"> <p><FaPhoneVolume className="text-green-500"></FaPhoneVolume></p><p className="text-gray-500">+66459678953465377475947</p></div>
        </div>
      </div>
    );
};

export default ReviewCard3;