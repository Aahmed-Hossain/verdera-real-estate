
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
import { FaHouseUser } from "react-icons/fa";
import {  FaDollarSign} from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import useSoldProperties from '../../../hooks/useSoldProperties';
import useAuth from '../../../hooks/useAuth';
import PageTitle from '../../../components/PageTitle/PageTitle';
  const Statistics = () => {
    const {user} = useAuth();
    const [soldProperties] = useSoldProperties();
    const totalPrice = soldProperties.reduce((total, item)=>total + parseFloat(item.payment.price), 0)
    const revenue = parseFloat((totalPrice * 0.10).toFixed(2));
    const data = soldProperties?.map(item => ({
        title: item.payment?.property_title || ' Title',
        price: parseFloat(item.payment?.price) || 0, 
      }));
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${
          x + width / 2
        },${y + height / 3}
            ${x + width / 2}, ${y}
            C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
          y + height
        } ${x + width}, ${y + height}
            Z`;
      };
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
    
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
  
    return (
      <div>
        <h2 className="text-3xl text-center font-bold">Hi , Welcome</h2>
        <h3 className="text-center text-xl font-bold  mb-8">
          {user?.displayName}
        </h3>
        <div className=" flex justify-center my-4 ">
        <div className="stats shadow-xl border">
          <div className="stat">
            <div className="stat-figure text-green-500 text-5xl">
              {" "}
              <FaDollarSign></FaDollarSign>
            </div>
            <div className="stat-title">Total Sold Amount</div>
            <div className="stat-value">${totalPrice}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-green-500 text-5xl">
              <GiMoneyStack></GiMoneyStack>
            </div>
            <div className="stat-title"> Total Revenue</div>
            <div className="stat-value">${revenue}</div>
            <div className="stat-desc">↗︎ 400 (10%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-green-500 text-5xl">
              <FaHouseUser></FaHouseUser>
            </div>
            <div className="stat-title">Total Sold Properties</div>
            <div className="stat-value">{soldProperties.length}</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
        <div className='flex items-center justify-center'>
        <BarChart 
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="title" />
      <YAxis />
      <Bar dataKey="price" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data?.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
        </div>
        <PageTitle title={"Dashboard | Statistics"}></PageTitle>
      </div>
    );
  };
  
  export default Statistics;
  