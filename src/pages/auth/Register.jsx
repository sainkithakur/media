import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { TbPhone } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthRegister } from "../../redux/actions/authAction";
import { TfiUser, TfiEmail, TfiLock } from "react-icons/tfi";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.AuthReducer);
  const [formValues, setFormValues] = useState({});

  // handleChange
  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      AuthRegister(formValues, () => {
        setFormValues({});
        navigate("/login");
      })
    );
  };
  return (
    <>
      <div className="flex h-screen z-50 absolute top-0 bg-white left-0 w-full lg:bg-gray-50 lg:gap-5 items-center">
        <section className="lg:w-2/3  w-full lg:p-4 sm:w-4/5 md:w-3/4 mx-auto lg:px-20">
          <div className=" lg:p-10 p-5 bg-white rounded lg:shadow">
            <h3 className="text-lg mb-5 uppercase font-bold">
              Create your account
            </h3>
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="p-2 mb-4 border rounded flex items-center gap-3">
                <label htmlFor="name">
                  <TfiUser className="text-gray-500 text-xl" />
                </label>
                <input
                  type="text"
                  name="name"
                  value={formValues?.name}
                  onChange={handleChange}
                  className="outline-none px-3 w-full text-sm"
                  placeholder="Your Name"
                />
              </div>

              {/* Email */}
              <div className="p-2 mb-4 border rounded flex items-center gap-3">
                <label htmlFor="email">
                  <TfiEmail className="text-gray-500 text-xl" />
                </label>
                <input
                  type="email"
                  name="email"
                  value={formValues?.email}
                  onChange={handleChange}
                  className="outline-none px-3 w-full text-sm"
                  placeholder="Your Email Address"
                />
              </div>

              {/* Password */}
              <div className="p-2 mb-4 border rounded flex items-center gap-3">
                <label htmlFor="password">
                  <TfiLock className="text-gray-500 text-xl" />
                </label>
                <input
                  type="password"
                  name="password"
                  value={formValues?.password}
                  onChange={handleChange}
                  className="outline-none px-3 w-full text-sm"
                  placeholder="Password"
                />
              </div>
              {/* Submit */}
              <div className=" mb-5 border hover:bg-transparent hover:text-blue-500 bg-blue-500 text-white cursor-pointer border-blue-500 text-center rounded flex items-center gap-3">
                <input
                  type="submit"
                  value={data.loading ? "..." : "Register"}
                  disabled={data.loading}
                  className="w-full p-2 uppercase cursor-pointer text-center"
                />
              </div>
              {/* Login Text */}
              <div className=" flex items-center gap-1.5">
                <span className="text-gray-500">
                  Already have an account ?{" "}
                </span>
                <Link to="/login" className="text-blue-500 uppercase font-bold">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Signup;
