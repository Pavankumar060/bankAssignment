import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const schema = yup
  .object({
    email: yup.string().email().min(7).max(10).required("Required"),
    password: yup.string().min(5).max(10),
  })
  .required();

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const finalSubmit = (data) => {
    if (data.password) {
      toast("Invalid Email /password", {
        type: "error",
        position: "topcenter",
        theme: "colored",
      });
      return;
    } else {
      console.log("error", errors);
      console.log("check", watch);
    }
  };

  return (
    <form onSubmit={handleSubmit(finalSubmit)}>
      <div className="loginPage">
        <h3 style={{ color: "blue" }}>LOGIN:</h3>
        <div className="login_nav">
          <h4>Email</h4>
          <input
            id="Sign1"
            type="text"
            placeholder="Email"
            {...register("email")}
          />
          <small>{errors.email?.message}</small>
          <br></br>
          <h4>Password</h4>
          <input
            id="Sign2"
            type="password"
            placeholder="password"
            {...register("password")}
          />
          <small>{errors.password?.message}</small>
          <br></br>
          <button style={{ background: "#3364FF", margin: "30" }}>LOGIN</button>
        </div>
      </div>
    </form>
  );
};
export default Login;
