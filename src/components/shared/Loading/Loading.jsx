import Lottie from "lottie-react";
import lottie from '../../../assets/images/lottie/loader.json'
const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <Lottie className='w-[40%] h-[40%]' animationData={lottie}></Lottie>
      </div>
    );
};

export default Loading;