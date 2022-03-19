import React, { useState } from "react";
import "./SignUpPage.css";
import FormInput from "../SignUpPage/FormInput.jsx";
import Navbar from "../Navbar/Navbar";

const SignUpPageLgSm = () => {

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 6-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div data-aos="fade-in" data-aos-offset="200" data-aos-duration="1000" className="sign-up w-[500px] border mt-10 rounded shadow-lg p-5">
      <form onSubmit={handleSubmit}>
        <h1 className="h1-register flex font-bold text-2xl justify-center text-[#2D31FA] ">Register to Daily Reminder</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="pt-5">
        <button className="submit-btn w-[100%] font-serif text-xl text-white justify-center align-center rounded bg-[#2D31FA] px-2 py-2 hover:shadow-lg delay-200">Submit</button>
        </div>
      </form>
    </div>
  );
};

const SignUpPage = () => {
  return (
    <div>
      <Navbar />
      <div className=" lg:flex justify-center">
        <SignUpPageLgSm />
      </div>
    </div>
  )
};

export default SignUpPage;