
import Card from "../../components/Card/Card";
import useProperties from "../../hooks/useProperties";

const AllProperties = () => {
  const [properties] = useProperties();
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 pt-[6rem]">
    {
      properties?.map((item)=> <Card key={item._id} item={item} 
      ></Card>)
    }
    </div>
  )
};

export default AllProperties;
