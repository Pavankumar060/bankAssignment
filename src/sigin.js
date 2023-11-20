import "./App.css";
import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const schema = yup
  .object({
    userName: yup.string().min(5).max(15).required("Required"),
    phoneNumber: yup.string().min(10).max(10),
    accountNumber: yup.string().min(10).max(10),
    email: yup.string().email().min(7).max(25),
    password: yup.string().min(5).max(10),
    confirmPassword: yup.string(),
  })
  .required();

const Sigin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const finalSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      toast("Password is not correct", {
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
      <div className="signUp">
        <div className="signbody">
          <h3 style={{ color: "blue" }}>Create an account</h3>
          {/* <div className="signbody"> */}
          <h4>Username</h4>
          <input
            id="login1"
            type="text"
            placeholder="Username"
            {...register("userName")}
          />
          <small>{errors.userName?.message}</small>
          <h4>Phone number</h4>
          <input
            id="login1"
            type="tel"
            placeholder="phone number"
            {...register("phoneNumber")}
          />
          <small>{errors.phoneNumber?.message}</small>
          <h4>Account number</h4>
          <input
            id="login1"
            type="tel"
            placeholder="Account number"
            {...register("accountNumber")}
          />
          <small>{errors.accountNumber?.message}</small>
          <br></br>
          <h4>Email</h4>
          <input
            id="login2"
            type="text"
            placeholder="Email"
            {...register("email")}
          />
          <small>{errors.email?.message}</small>
          <br></br>
          <h4>Password</h4>
          <input
            id="login2"
            type="password"
            placeholder="password"
            {...register("password")}
          />
          <small>{errors.password?.message}</small>
          <br></br>
          <h4>Confirm Password</h4>
          <input
            id="login3"
            type="password"
            placeholder=" Confirm password"
            {...register("confirmPassword")}
          />
          <small>{errors.confirmPassword?.message}</small>
          {/* </div> */}
          <br></br>
          <button style={{ background: "#3364FF", margin: "30" }}>
            Submit
          </button>
          ? Already have account
          <a href="/loginup">LOGIN</a>
        </div>
      </div>
    </form>
  );
};
export default Sigin;
