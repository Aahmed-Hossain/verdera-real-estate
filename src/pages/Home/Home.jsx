import Banner from "./Banner";
import PageTitle from "../../components/PageTitle/PageTitle";
import LatestProperty from "./LatestProperty";
import About from "./About";
import AgentsInfo from "../../components/AgentsInfo/AgentsInfo";
import MyReview from "../DashBoard/User/MyReview/MyReview";
const Home = () => {
  return (
    <div className="pt-[4.8rem]">
      <PageTitle title={"Verdera | Home"}></PageTitle>
      <Banner></Banner>
      <LatestProperty></LatestProperty>
      <About></About>
      <MyReview></MyReview>
      <AgentsInfo></AgentsInfo>
      
      
    </div>
  );
};

export default Home;
