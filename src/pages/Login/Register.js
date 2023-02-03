import React, { Component, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, message } from "antd";
import axios from "axios";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/87718-waiting-register.json";
// import { useForm } from "react-hook-form";
import { default as api } from "../../Store/apiSlice";

const baseURI = "http://localhost:4000";
// const { handleSubmit, resetField } = useForm();
// const [registerUser] = api.useRegisterUserMutation();

// const onSubmit = async (data) => {
//   if (!data) {
//     return {};
//   }
//   await registerUser(data).unwrap();
//   // resetField("name");
// };

function Register() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post(`${baseURI}/api/register`, values);
      message.success("Registeration Successfull");
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div className="container flex justify-center content-center">
        <div className="w-2/3 h-full mx-auto flex gap-4 justify-center shadow-2xl mt-10 ">
          <div className="w-1/2 flex flex-row hidden md:block lg:block p-5">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
          <div className="w-1/2 flex flex-col m-5">
            <Form layout="vertical" onSubmit={submitHandler}>
              <h1 className="fw-bold text-center">Register</h1>
              <Form.Item label="Name" name="name">
                <Input />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input type="email" />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input type="password" />
              </Form.Item>
              <div className=" text-center mt-3">
                <a
                  class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  data-rounded="rounded-md"
                  data-primary="blue-600"
                  data-primary-reset="{}"
                >
                  <Link to="/" className="">
                    Register
                  </Link>
                </a>
                <div className="link my-4">
                  <Link to="/">
                    Already Register ? <b>Click Here to Login</b>
                  </Link>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
