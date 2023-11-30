/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation } from "react-router-dom";
import githubImg from "../../assets/images/logo/github.png";
import lottie from '../../assets/images/lottie/login.json'
import {loadCaptchaEnginge,LoadCanvasTemplate,validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import SocialLogin from "../../components/shared/SocialLogin";
import Lottie from "lottie-react";
import PageTitle from "../../components/PageTitle/PageTitle";

const Login = () => {
  const [disable, setDisable] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const { logIn } = useAuth();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password).then((res) => {
      console.log(res);
      Swal.fire("Great", "User Created Successfully", "success");
      form.reset();
    navigate(location?.state ? location.state : "/");
    });
  };
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(false);
    }
  };

  return (
    <div className="hero max-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2  ">
        <Lottie className="w-[80%]" animationData={lottie} />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm border border-green-600 rounded-none">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold text-[#36b54a]">
              Login
            </h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className=" border-b border-green-600 w-full py-3 px-3 focus:outline-none bg-transparent"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="border-b border-green-600 w-full py-3 px-3 focus:outline-none bg-transparent"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control flex items-center">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <div className="relative w-full">
                  <input
                    onBlur={handleValidateCaptcha}
                    type="text"
                    name="capcha"
                    placeholder="Submit Above Captcha"
                    className="border-b border-green-600 w-full py-3 px-3 focus:outline-none bg-transparent"
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <input
                  className={`hover:bg-[#2eea4a] bg-[#39bb4c] text-white font-bold py-2 px-4 w-full
                
                  //  use it for disAble
                  `}
                  // ${
                  //   disable ? "bg-opacity-50 cursor-not-allowed" : ""
                  // }
                  type="submit"
                  value="Login"
                  disabled={disable}
                />
              </div>
            </form>
            <p className="divider">OR</p>
            <SocialLogin></SocialLogin>
            <button
              //   onClick={() => hadleSocialLogin(githubLogin)}
              className="rounded-full px-3 py-2 border border-[#36b54a] flex justify-around items-center mb-2 w-full"
            >
              <img className="h-[1.5rem] w-[1.5rem]" src={githubImg} alt="" />
              <span>Continue with Github</span>
            </button>
            <p className="my-4 text-center">
              New to Verdera Real Estate? 
                <Link
                className="text-[#36b54a] font-bold link-hover "
                to="/register"
              >
                   Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <PageTitle title={'Verder | Login'}></PageTitle>
    </div>
  );
};

export default Login;
