import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Container from '../../components/Navbar/Container'

const AllProperties = () => {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    fetch(`property.json`)
      .then((res) => res.json())
      .then((data) => setProperty(data));
  }, []);
  return <Container>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 pt-[6rem]">
  {
    property?.map((item, idx)=> <Card key={idx} item={item} 
    ></Card>)
  }
  </div>
  </Container>;
};

export default AllProperties;
