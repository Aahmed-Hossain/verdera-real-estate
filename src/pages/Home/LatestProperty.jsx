/* eslint-disable react/no-unescaped-entities */
import Card from "../../components/Card/Card";
import Heading from "../../components/shared/Heading";
import Loading from "../../components/shared/Loading/Loading";
import useProperties from "../../hooks/useProperties";
import SubHeading from './../../components/shared/SubHeading';
import SubHeading2 from './../../components/shared/SubHeading2';

const LatestProperty = () => {
  const [properties, isLoading] = useProperties();
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="my-4">
     <Heading text='Latest Properties'/>
     <SubHeading subHeading='Where every brick holds a story of love and belonging'/>
     <SubHeading2 subHeading2={"Verdera is committed to providing unparalleled service in the real estate industry<.Whether you're searching for a cozy apartment, a family-friendly house."}/>
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
