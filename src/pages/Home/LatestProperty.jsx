import Card from "../../components/Card/Card";
import Loading from "../../components/shared/Loading/Loading";
import useProperties from "../../hooks/useProperties";

const LatestProperty = () => {
  const [properties, isLoading] = useProperties();
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="grid grid-cols-3 gap-4 mb-3">
      {properties?.slice(0,6).map((item) => (
        <Card key={item._id} item={item} isLoading={isLoading}></Card>
      ))}
    </div>
  );
};

export default LatestProperty;
