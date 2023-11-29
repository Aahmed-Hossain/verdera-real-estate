import { useLoaderData, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import useAuth from '../../hooks/useAuth';
import PageTitle from "../PageTitle/PageTitle";
const OfferNow = () => {
  const property = useLoaderData();
  const navigate = useNavigate();
  // console.log('single property',property);
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
    // if (property?.price_range[0] < form.price.value) {
    //   Swal.fire("Oppss!", "Please set Beteen Price Range!", "warning");
    //   return;
    // }
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
      status:'pending',
      property_area,
    agent_name,
    agent_email,
    property_location,
    property_category,
    agent_image,
    property_title
    };
      axiosPublic.post(`http://localhost:5000/offers`, offer
    //   , {
    //     withCredentials: true,
    //   }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire("Great!", "Your order placed successfully!", "success");
        }
        form.reset();
        navigate("/offers");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-base-00 pt-[4.5rem]">
      <PageTitle title={"Verdera | Offer Now"}></PageTitle>
      <div className=" ">
      <h2 className="text-center flex justify-center my-4  font-bold text-4xl text-[#61d473]">
        {property_title}
      </h2>
      </div>
      <div className="relative h-[20rem]">
        <img src={property_image} className="h-[20rem] w-full rounded-xl" />
        <div className="absolute inset-0 bg-black opacity-10 rounded-xl"></div>
      </div>
      
      <div className="flex items-center gap-x-2 my-4">
            <img
              className="object-cover w-16 h-16 rounded-full"
              src={agent_image}
              alt=""
            />
            <div>
              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                {agent_name}
              </h1>
              <p className="text-base text-gray-500 dark:text-gray-400">
                {agent_email}
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
                  // defaultValue={"$" + price.toString().replace(/^\$/, "")}
                  // defaultValue={`${price_range[0] +
                  //   "-" +
                  //   price_range[1]}`}
                  // defaultValue={`${price_range[0]}`}
                  
                  placeholder={`${price_range[0]} ${'-'} ${price_range[1]}`}

                  className="input border border-green-500 focus:outline-none focus:border-2 focus:border-green-500 w-full"
                  name="price"
                  min={`${price_range[0]}`}
                  max={`${price_range[1]}`}
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
          value="Place Order"
        />
      </form>
    </div>
  );
};

export default OfferNow;
