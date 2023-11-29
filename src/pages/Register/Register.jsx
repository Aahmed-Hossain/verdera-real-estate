
import githubImg from "../../assets/images/logo/github.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SocialLogin from "../../components/shared/SocialLogin";
import Lottie from "lottie-react";
import lottie from '../../assets/images/lottie/login.json'
import PageTitle from "../../components/PageTitle/PageTitle";
import { TbFidgetSpinner } from "react-icons/tb";
import { axiosPublic } from "../../hooks/useAxiosPublic";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, handleUpdateProfile, loading} = useAuth();
  const { register,handleSubmit,reset, formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password, data.img).then((result) => {
      console.log(result.user);
      handleUpdateProfile(data.name, data.img).then(() => {
        // Swal.fire("WoW", "You Logged In successfully", "success");
        navigate("/");
      })
          const userInfo = { name: data.name, email: data.email, signUpTime: new Date() };
          axiosPublic.post("/users", userInfo).then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              reset();
              Swal.fire("WoW", "User Created successfully", "success");
              navigate("/");
            }
          });
        })
        .catch((err) => {
          console.log(err);
          Swal.fire("Opps", `${err}`, "error");
        });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
      <div className="w-1/2  ">
        <Lottie className="w-[80%]" animationData={lottie} />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm border border-[#39bb4c] rounded-none">
          <div className="card-body">
            <h1 className={`text-3xl text-center font-bold text-[#39bb4c] ${loading ? 'animate-spin': ''}`}>
              Sign Up Now
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Your Name
                </label>
                <input
                  className="border-b border-[#39bb4c] w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none bg-transparent"
                  type="text"
                  id="name"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Enter your Name"
                />
                {errors.name && (
                  <span className="text-red-700 font-xm">
                    *Name is required*
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Image URL
                </label>
                <input
                  className="border-b border-[#39bb4c] bg-transparent w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none"
                  type="text"
                  id="img"
                  {...register("img")}
                  name="img"
                  placeholder="Enter your image url"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  className="border-b border-[#39bb4c] w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none bg-transparent"
                  type="email"
                  id="email"
                  name="email"
                  {...register("email")}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="border-b border-[#39bb4c] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-transparent"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                    pattern:
                      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/,
                  })}
                />
                {errors.exampleRequired && (
                  <span className="text-red-500">This field is required</span>
                )}
                {errors.password?.type === "required" && (
                  <span className="text-red-700 font-xm">
                    *Password is required*
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-700 font-xm">
                    *Password is must be 8 at least characters*
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-700 font-xm">
                    *Password is must be 20 in characters*
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-700 font-xm">
                    *Password must have at least one upper case, one lower case,
                    one digit and special character*
                  </span>
                )}
              </div>
              <button
                className="hover:bg-[#3ec953] bg-[#39bb4c] font-semibold py-2 px-4 w-full text-white"
                type="submit"
              >
                {loading ? <TbFidgetSpinner className="animate-spin mx-auto" />:'Sign Up'}
              </button>
            </form>
            <p className="divider">OR</p>
            <SocialLogin></SocialLogin>
            <button className="rounded-full px-3 py-2 border border-[#39bb4c] flex justify-around items-center mb-2 w-full">
              <img className="h-[1.5rem] w-[1.5rem]" src={githubImg} alt="" />
              <span>Continue with Github</span>
            </button>
            <p className="my-2">
              Already have an account?
              <Link
                to={"/login"}
                className="text-[#39bb4c] font-bold hover:underline"
              >
                Please Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      <PageTitle title={"Verdera | SignUp"}></PageTitle>
    </div>
  );
};

export default Register;