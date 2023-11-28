/* eslint-disable react/prop-types */

import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

const CategoryItems = ({ label, icon: Icon, selected }) => {
  console.log(selected);
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const handleCategory = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery = { ...currentQuery, category: label };
    const url = qs.stringifyUrl({ url: "/", query: updatedQuery });
    navigate(url);
  };
  params.get("category")
  console.log('Log the category value',params.get("category")); // Log the category value
  return (
    <div
      onClick={handleCategory}
      className={`flex flex-col justify-center items-center border-b-2 hover:border-b-2 hover:border-green-500 transition cursor-pointer ${
        selected ? "border-b-2 border-green-500" : ""
      }`}
    >
      <Icon className="text-2xl "></Icon>
      <div> {label}</div>
    </div>
  );
};

export default CategoryItems;
