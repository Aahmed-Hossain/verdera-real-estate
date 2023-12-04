import { useState } from "react";
import Card from "../../components/Card/Card";
import Loading from "../../components/shared/Loading/Loading";
import useProperties from "../../hooks/useProperties";

const AllProperties = () => {
  const [price, setPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [properties, isLoading] = useProperties();
  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleSearch = async () => {
    try {
      const encodedSearchTerm = encodeURIComponent(searchTerm); // Encode the search term
      const response = await fetch(
        `https://real-estate-company-server.vercel.app/allProperties/${encodedSearchTerm}`
      );
      const data = await response.json();
      setSearchResults(data);
      setSearchTerm('');
      // console.log('search', searchResults);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="pt-[5rem]">
      {/* filtering div */}

      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold text-green-500">
            Hundrends of Dream <br /> Under One Roof
          </h1>
        </div>

        {/* serch option */}
        <div className="flex items-center border-2 border-green-500 rounded-xl p-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress} // Call handleSearch when Enter key is pressed
            placeholder="Search Your Property"
            className="flex-1 px-4 py-2 border-none focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="ml-2 p-2 hover:bg-green-600 bg-green-500 text-white rounded-full focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M21 21l-5-5m0 0a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        {/*  sorting  by price */}


        <div className="border-2 border-green-500 rounded-xl p-2">
          <select
            className="flex-1 px-4 py-2 border-none focus:outline-none"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option>Select Price Category</option>
            <option value="asc">Low to High</option>
            <option value="dsc"> High To Low</option>
          </select>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 ">
        {searchResults.length === 0 ?  (properties?.map((item) => (
          <Card key={item._id} item={item} isLoading={isLoading}></Card>
        )))
        : (searchResults?.map((item) => (
          <Card key={item._id} item={item} isLoading={isLoading}></Card>
        )))
        }
      </div>
    </div>
  );
};

export default AllProperties;
