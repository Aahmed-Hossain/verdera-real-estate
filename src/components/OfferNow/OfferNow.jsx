import { useLoaderData, useLocation, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from '../../hooks/useAuth';
import PageTitle from "../PageTitle/PageTitle";
import { axiosSecure } from "../../hooks/useAxiosSecure";
const OfferNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state || {};
  // console.log( 'data', data);
  const property = useLoaderData();
  // console.log('offer  property',property);
  const {
    property_image,
    property_title,
    property_category,
    property_location,
    price_range,
    property_area,
    agent_image,
    agent_name,
    agent_email,
  } = property || {};
  const { user } = useAuth();
  const handleOfferNow = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const email = user?.email;
    const date = form.date.value;
    const offer = {
      customerName: name,
      email,
      date,
      price,
      property_image,
      status:'Pending',
      property_area,
    agent_name,
    agent_email,
    property_location,
    property_category,
    agent_image,
    property_title
    };
      axiosSecure.post(`/offers`, offer)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire("Great!", "Your Offer placed successfully!", "success");
        }
        form.reset();
        navigate("/dashboard/myProperties");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-base-00 pt-[4.5rem]">
      <PageTitle title={"Verdera | Offer Now"}></PageTitle>
      <div className=" ">
      <h2 className="text-center flex justify-center my-4  font-bold text-xl md:text-3xl lg:text-4xl text-[#61d473]">
        {property_title || data?.property_title }
      </h2>
      </div>
      <div className="relative  h-[16rem] md:h-[22rem]">
        <img src={property_image || data?.property_image} className="h-[16rem] md:h-[22rem] w-full rounded-xl" />
        <div className="absolute inset-0 bg-black opacity-10 rounded-xl"></div>
      </div>
      
      <div className="flex items-center gap-x-2 my-4">
            <img
              className="object-cover w-16 h-16 rounded-full"
              src={agent_image || data?.agent_image}
              alt=""
            />
            <div>
              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                {agent_name || data?.agent_name}
              </h1>
              <p className="text-base text-gray-500 dark:text-gray-400">
                {agent_email || data?.agent_email}
              </p>
            </div>
            <div className="border-l-2 border-green-500 ml-3 text-xl">
              <h2 className="text-[#33333380] mx-2">Agent</h2>
            </div>
          </div>
      <form onSubmit={handleOfferNow}>
        <div className="flex gap-4">
          <div className="w-1/2 ">
            <div className="form-control  ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                placeholder="Your Name"
                name="name"
                className="input border border-green-500 focus:outline-none focus:border-2 focus:border-green-500"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input border border-green-500 focus:outline-none focus:border-2 focus:border-green-500"
                defaultValue={user?.email}
                required
                readOnly
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                name="date"
                type="date"
                className="input border border-green-500 focus:outline-none focus:border-2 focus:border-green-500"
                required
              />
            </div>
            <div className="flex  flex-col ">
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Price Range</span>
                </label>
                <input
                  placeholder={ `${price_range?.[0]} - ${price_range?.[1]}` || `${data?.price_range[0]} `-` ${data?.price_range[1]}` }

                  className="input border border-green-500 focus:outline-none focus:border-2 focus:border-green-500 w-full"
                  name="price"
                  min={`${price_range?.[0]}` || `${data?.price_range?.[0]}`}
                  max={`${price_range?.[1]}` || `${data?.price_range?.[1]}`}
                  type="number"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <input
          type="submit"
          className=" py-2 px-4 w-full rounded text-white font-bold text-lg bg-[#61d473] my-3"
          value="Place Offer"
        />
      </form>
    </div>
  );
};

export default OfferNow;
