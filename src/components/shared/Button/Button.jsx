/* eslint-disable react/prop-types */

const Button = ({value}) => {
    return (
        <div className="flex justify-center items-center">
            <button className="text-xl font-bold text-white px-3 py-2 rounded bg-[#39bb4c]">{value}</button>
        </div>
    );
};

export default Button;