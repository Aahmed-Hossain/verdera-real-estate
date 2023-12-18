/* eslint-disable react/prop-types */
import { useState } from "react";
import banner from "../../../assets/images/logo/addProperty.jpg";
import useAuth from "./../../../hooks/useAuth";
import { uploadImg } from "../../../components/shared/UploadImage/UploadImage";
import { TbFidgetSpinner } from "react-icons/tb";
import { axiosSecure } from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PageTitle from "../../../components/PageTitle/PageTitle";

const AddProperty = () => {
  const navigate = useNavigate();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [uploadImgText, setUploadImgText] = useState('Upload Image');
  const handleSliderChange = (e, setValue) => {
    const value = parseInt(e.target.value, 10);
    setValue(value);
  };
  const { user } = useAuth();
  const agent_name = user?.displayName;
  const agent_image = user?.photoURL;
  const agent_email = user?.email;
  const categories = [
    "Urban Apartment",
    "Green Residences",
    "Urban Loft",
    "Luxury Condos",
  ];
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleUploadImgText = (property_image) => {
    setUploadImgText(property_image.name)
  }
  const handleAddProperty = async (e) => {
    setLoading(true)
    e.preventDefault();
    const form = e.target;
    const property_category = form.category.value;
    const property_title = form.title.value;
    const beds = form.beds.value;
    const baths = form.baths.value;
    const property_location =form.location.value;
    const property_area = form.area.value;
    const description = form.description.value;
    const minPrice = Number(form.minPrice.value);
    const maxPrice = Number(form.maxPrice.value);
    const price_range = [minPrice, maxPrice];
    const imageFile = form.image.files[0];
    const property_image_url = await uploadImg(imageFile);
    const property_image = property_image_url?.data?.display_url;

    const addProperty = {
      property_category,
      property_image,
      property_title,
      property_location,
      price_range,
      beds,
      baths,
      verification_status: "Pending",
      property_area,
      description,
      agent_name,
      agent_image,
      agent_email,
    };
    // console.log(addProperty);
    setLoading(true);
    const res = await axiosSecure.post('/properties', addProperty)
    setUploadImgText('Uploaded')
        console.log(res.data)
        setLoading(false)
        if(res.data.insertedId){
          Swal.fire('Great', "You have Added Property Successfully", 'success') 
        }
        navigate('/dashboard/myListings')
  }
   
  return (
    <div className="font-semibold">
      <div className="relative h-[18rem] mb-3">
        <img src={banner} className="h-[18rem] w-full rounded-md " />
        <div className="absolute inset-0 bg-black opacity-0 rounded-md"></div>
      </div>
      <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50 ">
        <form onSubmit={handleAddProperty} className="w-10/12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  w-full">
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="location" className="block text-gray-600">
                  Location
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md "
                  name="location"
                  id="location"
                  type="text"
                  placeholder="Location"
                  required
                />
              </div>
              {/* select category */}
              <div className="space-y-1 text-sm">
                <label className="label">
                  <span className="label-text">Select Category</span>
                </label>
                <select
                  className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md"
                  name="category"
                  required
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="">Select</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* price range */}

              <div className="w-full max-w-md mx-auto p-6 py-10 bg-white border rounded-md shadow-md">
                <label
                  htmlFor="minPrice"
                  className="block text-gray-600 text-sm font-semibold mb-2"
                >
                  Min Price
                </label>
                <input
                  type="range"
                  id="minPrice"
                  name="minPrice"
                  min="0"
                  max="20000"
                  step="1"
                  className="w-full appearance-none bg-gray-300 h-3 rounded-full outline-none"
                  onChange={(e) => handleSliderChange(e, setMinPrice)}
                />

                <label
                  htmlFor="maxPrice"
                  className="block text-gray-600 text-sm font-semibold mt-4 mb-2"
                >
                  Max Price
                </label>
                <input
                  type="range"
                  id="maxPrice"
                  name="maxPrice"
                  min="0"
                  max="200000"
                  step="1"
                  className="w-full appearance-none bg-gray-300 h-3 rounded-full outline-none"
                  onChange={(e) => handleSliderChange(e, setMaxPrice)}
                />

                <div className="flex justify-between mt-4 text-sm text-gray-600">
                  <span>$ {minPrice}</span>
                  <span>$ {maxPrice}</span>
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <div className="space-y-1 text-sm">
                <label htmlFor="title" className="block text-gray-600">
                  Title
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md "
                  name="title"
                  id="title"
                  type="text"
                  placeholder="Title"
                  required
                />
              </div>

              <div className=" p-4 bg-white w-full  m-auto rounded-lg">
                <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                  <div className="flex flex-col w-max mx-auto text-center">
                    <label>
                      <input
                      onChange={e=>handleUploadImgText(e.target.files[0])}
                        className="text-sm cursor-pointer w-36 hidden"
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*"
                        hidden
                        required
                      />
                      <div className="bg-green-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-4 hover:bg-green-500">
                      {uploadImgText}
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="space-y-1 text-sm">
                  <label htmlFor="area" className="block text-gray-600">
                    Total Property Area
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md "
                    name="area"
                    id="area"
                    type="number"
                    min={"1"}
                    placeholder="Property Area Sq. ft."
                    required
                  />
                </div>
              </div>

              <div className="space-y-1 text-sm ">
                <label htmlFor="baths" className="block text-gray-600">
                  Total Baths
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md "
                  name="baths"
                  id="baths"
                  type="number"
                  min={"1"}
                  placeholder="Total Baths"
                  required
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="bedrooms" className="block text-gray-600">
                  Bedrooms
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md "
                  name="beds"
                  id="bedrooms"
                  type="number"
                  min={"1"}
                  placeholder="Bedrooms"
                  required
                />
              </div>
            </div>
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="description" className="block text-gray-600">
              Description
            </label>

            <textarea
              id="description"
              className="block rounded-md focus:green-300 w-full h-32 px-4 py-3 text-gray-800  border border-green-300 focus:outline-green-500 "
              name="description"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-green-400"
          >
            
            {loading ? (
            <TbFidgetSpinner className="m-auto animate-spin" size={24} />
          ) : (
            "Add Property"
          )}
          </button>
        </form>
      </div>
      <PageTitle title={'Dashboard | Add Property'}></PageTitle>
    </div>
  );
};

export default AddProperty;
