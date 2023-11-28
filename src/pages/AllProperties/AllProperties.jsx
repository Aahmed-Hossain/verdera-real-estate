import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

const AllProperties = () => {
  const [property, setProperty] = useState([]);
  const hookAxios = useAxios();
  const getFoods = async () => {
    const res = await hookAxios.get(
      `/allFoods?page=${page}&limit=${limit}&sortField=price&sortOrder=${price}&category=${category}`
    );
    return res;
  };
  const {
    data: foods,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["foods", page, price, category],
    queryFn: getFoods,
  });
  console.log("all foods", foods);
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    return <p>Something Went Wrong:{error}</p>;
  }
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 pt-[6rem]">
    {
      property?.map((item, idx)=> <Card key={idx} item={item} 
      ></Card>)
    }
    </div>
  )
};

export default AllProperties;
