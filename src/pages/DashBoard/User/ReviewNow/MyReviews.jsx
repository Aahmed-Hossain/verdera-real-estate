
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { axiosSecure } from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
import Loading from '../../../../components/shared/Loading/Loading';
import PageTitle from '../../../../components/PageTitle/PageTitle';

const MyReviews = () => {
    const {user} = useAuth();
    const email = user?.email;

  const { data: reviews = [], isLoading,refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews/${email}`);
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/reviews/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "The review has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

if(isLoading){
    return <Loading></Loading>
}
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center mb-2">
        <h2 className="tex-4xl font-bold text-green-600">Total Reviews: {reviews?.length} </h2>
      </div>
      <div>
        {reviews?.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-2 py-2 border border-slate-200 rounded-xl mb-4 p-4"
          >
            {/* left div */}
            <div className="flex items-center gap-12">
              <span className=" text-xl font-semibold p-3">{index + 1}</span>
              <div  className="space-y-2 p-2 text-gray-500">
                <h2>Property Title: {item?.property_title}</h2>
                <p>Agent Name: {item?.agent_name}</p>
                <p>Email: {item?.agent_email}</p>
                <p>Date: {item?.review_time?.toLocaleString()}</p>
              </div>
            </div>
            {/* right button div */}

            <div className="flex flex-col ">
    
           
        <button 
        onClick={() => handleDelete(item._id)}
        className='relative cursor-pointer inline-block px-3 py-1 font-semibold t leading-tight rounded-full bg-red-300 hover:bg-red-400'>
          <span
            aria-hidden='true'
            className='absolute inset-0  opacity-30 rounded-full'
          ></span>
          <span className='relative'>Delete</span>
        </button>
        </div>
          </div>
        ))}
      </div>
      <PageTitle title={"Dashboard | My Reviews"}></PageTitle>
    </div>
  );
};

export default MyReviews;