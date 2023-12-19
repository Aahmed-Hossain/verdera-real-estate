/* eslint-disable react/no-unescaped-entities */
import Card from "../../components/Card/Card";
import Loading from "../../components/shared/Loading/Loading";
import useProperties from "../../hooks/useProperties";

const LatestProperty = () => {
  const [properties, isLoading] = useProperties();
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="my-4">
      <h1 className="text-center text-5xl font-bold my-2"> Latest Properties</h1>
<h1 className="text-green-500 text-xl font-semibold mt-2 text-center"> 
"Where every brick holds a story of love and belonging"</h1>
<h1 className="text-sm  dark:text-gray-200 text-center mt-2 mb-12">Verdera is committed to providing unparalleled service in the real estate industry.
Whether  you're searching  <br /> for a cozy apartment, a family-friendly house.</h1>
      </div>
      <div className="grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 my-4">
      
      {properties?.slice(0,6).map((item) => (
        <Card key={item._id} item={item} isLoading={isLoading}></Card>
      ))}
    </div>
    </div>
  );
};

export default LatestProperty;
