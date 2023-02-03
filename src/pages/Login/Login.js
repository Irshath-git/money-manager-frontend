import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, message } from "antd";
import axios from "axios";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/111594-login.json";
// const { register, handleSubmit, resetField } = useForm();
// const [addTransaction] = api.useAddTransactionsMutation();
import { default as api } from "../../Store/apiSlice";

const baseURI = "http://localhost:4000";

function Login() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //from submit
  // const submitHandler = async (values) => {
  //   try {
  //     setLoading(true);
  //     const { data } = await axios.post(`${baseURI}/api/login`, values);
  //     setLoading(false);
  //     message.success("login success");
  //     localStorage.setItem(
  //       "user",
  //       JSON.stringify({ ...data.user, password: "" })
  //     );
  //     navigate("/");
  //   } catch (error) {
  //     setLoading(false);
  //     message.error("something went wrong");
  //   }
  // };
  // const onSubmit = async (data) => {
  //   if (!data) {
  //     return {};
  //   }
  //   await registerUser(data).unwrap();
  //   resetField("name");
  //   resetField("email");
  //   resetField("password")
  // };
  return (
    <>
      <div className="flex  justify-center">
        {loading}
        <div className="container mt-10">
          <div className="w-3/4 h-full mx-auto flex gap-4 justify-center shadow-2xl p-10">
            <div className="w-1/2 flex flex-row hidden md:block lg:block ">
              <Lottie options={defaultOptions} height={400} width={400} />
            </div>
            <div className="w-1/2 flex flex-col m-5">
              <Form layout="vertical">
                <h1 className="text-center p-2 fw-bold">Welcome Back</h1>

                <Form.Item label="Email" name="email">
                  <Input type="email" />
                </Form.Item>
                <Form.Item label="Password" name="password">
                  <Input type="password" />
                </Form.Item>
                <div className="hover:text-black text-center mt-3">
                  <a class="px-5 py-2.5 relative rounded group text-white font-medium inline-block">
                    <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                    <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                    <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                    <span class="relative">
                      <Link to="/portal/home">Login</Link>
                    </span>
                  </a>
                  <div className="link my-4">
                    <Link to="/register">
                      Don't have an account? <b>Click Here</b>
                    </Link>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
        {/* <form action="POST">

        </form> */}
      </div>
    </>
  );
}

export default Login;
