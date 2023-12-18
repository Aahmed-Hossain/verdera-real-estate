import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { axiosSecure } from "../../../../hooks/useAxiosSecure";
import Loading from "../../../../components/shared/Loading/Loading";

const ManageUser = () => {
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: "Do You Want to Make Admin?",
      text: "The User or Agent will be Admin!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2eea4a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
    }).then((result) => {
      if (result.isConfirmed)
        axiosSecure.put(`/users/admin/${id}`).then((res) => {
          console.log("Made Admin", res.data);
          refetch();
          Swal.fire("Yes", "Made  Admin  Successfully", "success");
        });
    });
  };
  const handleMakeAgent = (id) => {
    Swal.fire({
      title: "Do You Want to Make Agent?",
      text: "The User will be Agent !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2eea4a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Agent!",
    }).then((result) => {
      if (result.isConfirmed)
        axiosSecure.put(`/users/agent/${id}`).then((res) => {
          console.log("Made Agent", res.data);
          Swal.fire("Yes", `Made Agent  Successfully`, "success");
          refetch();
        });
    });
  };

  // console.log(users);
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
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleMarkFraud = (email) => {
    console.log("fraud", email);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Mark Fraud!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/mark-fraud/${email}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire(
              "Yes",
              `Marked Fraud  Successfully and deleted associated property`,
              "success"
            );
            refetch();
          }
        });
      }
    });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center mb-2">
        <h2 className="tex-4xl font-bold text-green-600">
          Total Users: {users.length}{" "}
        </h2>
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
            {/* right button div */}

            <div className="flex flex-col ">
              <button
                onClick={() => handleMakeAdmin(item._id)}
                disabled={(item.role === "Admin" || item.role === "Fraud") }
                className={`px-5 py-2 bg-white text-md ${
                  item.role === "Admin" ? "cursor-not-allowed" : ""
                }`}
              >
                <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 ${
                      item.role === "Admin"
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-green-300 hover:bg-green-500"
                    } opacity-50 rounded-full`}
                  ></span>
                  <span className="relative">
                    {item.role === "Admin" ? "ADMIN" : item.role === "Fraud" ? "Fraud" : 'Make Admin'}
                  </span>
                </span>
              </button>

              {item.role !== "Admin" && (
                <button
                  onClick={() => handleMakeAgent(item._id)}
                  disabled={item.role === "Agent" || item.role === 'Fraud'}
                  className={`px-5 py-2 bg-white text-md ${
                    item.role === "Agent" ? "cursor-not-allowed" : ""
                  }`}
                >
                  <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                    <span
                      aria-hidden="true"
                      className={`absolute inset-0 ${
                        item.role === "Agent"
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-green-500 hover:bg-green-600"
                      } opacity-50 rounded-full`}
                    ></span>
                    <span className="relative">
                    {item.role === "Agent" ? "AGENT" : item.role === "Fraud" ? "Fraud" : 'Make Agent'}
                      {/* {item.role === "Agent" ? "AGENT" : "Make Agent"} */}
                    </span>
                  </span>
                </button>
              )}

              {item.role !== "Admin" && (
                <button
                  onClick={() => handleDelete(item._id)}
                  disabled={item.role === "Admin"}
                  className="px-5 py-2 bg-white text-md "
                >
                  <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold t leading-tight">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-red-300 hover:bg-red-400 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">Delete User</span>
                  </span>
                </button>
              )}

              {(item.role === "Agent" || item.role === "Fraud") && (
                <button
                  onClick={() => handleMarkFraud(item.email)}
                  disabled={item.role === "Fraud"}
                  className={`px-5 py-2 bg-white text-md ${
                    item.role === "Fraud" ? "cursor-not-allowed" : ""
                  }`}
                >
                  <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold t leading-tight rounded-full bg-orange-400 hover:bg-orange-500">
                    <span
                      aria-hidden="true"
                      className={`absolute inset-0 opacity-30 rounded-full ${
                        item.role === "Fraud" ? "bg-gray-300 cursor-not-allowed" : ""
                      }`}
                    ></span>
                    <span className="relative">
                    {item.role === "Agent" ? "Make Fraud" : item.role === "Fraud" ? "Fraud" : ""}
                    </span>
                  </span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageUser;
