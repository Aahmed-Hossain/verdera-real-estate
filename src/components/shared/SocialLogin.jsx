import Swal from "sweetalert2";
import googleImg from "../../assets/images/logo/google.png";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { axiosPublic } from "../../hooks/useAxiosPublic";
const SocialLogin = () => {
  // const from = location?.state?.from?.pathname || '/';
  const navigate = useNavigate();
  const location = useLocation();
  const { googleLogin } = useAuth();
  const handleGoogleLogin = () => {
    googleLogin().then((res) => {
      console.log("google login", res);
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        signUpTime: new Date(),
      };
      axiosPublic.post("/users", userInfo).then((res) => console.log(res));
      Swal.fire("WoW", "user Logged in", "success");
      navigate(location?.state ? location.state : "/");
    });
  };
  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="rounded-full px-3 py-2 border border-green-600 flex justify-around items-center mb-2 w-full"
      >
        <img className="h-[1rem] w-[1rem]" src={googleImg} alt="" />
        <span>Continue with Google</span>
      </button>
    </div>
  );
};
export default SocialLogin;
