
import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUser } from "react-icons/fa6";
import Loading from "../shared/Loading/Loading";
import Swal from "sweetalert2";
import { axiosSecure } from "../../hooks/useAxiosSecure";

const AllUsers = () => {

  const { data: users = [], isLoading,refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
//   const handleMakeAdmin = (id) => {
//     Swal.fire({
//       title: "Do you wa?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axiosHook.patch(`/users/admin/${id}`).then((res) => {
//           console.log(res.data);
//           if (res.data.modifiedCount > 0) {
//             Swal.fire({
//               title: "Done!",
//               text: `${users.name} has been admin.`,
//               icon: "success",
//             });
//             refetch();
//           }
//         });
//       }
//     });
//   };

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
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
            refetch();
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
      <div className="flex items-center gap-12 pt-[5rem]">
        <h2 className="tex-2xl font-semibold">All User</h2>
        <h2 className="tex-2xl font-semibold">Total Users: {users.length} </h2>
      </div>
      <div>
        {users?.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-2 py-2 border border-slate-200 rounded-xl mb-4 p-4"
          >
            {/* left div */}
            <div className="flex items-center gap-12">
              <span className=" text-xl font-semibold p-3">{index + 1}</span>
              <div className="space-y-2 p-2">
                <h2>Name: {item.name || item.user}</h2>
                <p>Email: {item.email}</p>
              </div>
            </div>
            {/* right div */}
            <div className="flex items-center justify-evenly gap-12 pr-2">
              <div>
                {item.role === "admin" ? (
                  "Admin"
                ) : (
                  <button
                    // onClick={() => handleMakeAdmin(item._id)}
                    className="btn btn-md bg-green-400 "
                  >
                    <FaUser className="font-bold text-xl text-white"></FaUser>
                  </button>
                )}
              </div>
              <div>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-md opacity-50 p-3  hover:opacity-70 bg-black"
                >
                  <FaTrash className="text-orange-700 font-bold text-xl"></FaTrash>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;