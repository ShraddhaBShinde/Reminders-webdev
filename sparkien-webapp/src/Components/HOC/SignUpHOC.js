import React from "react";
import { Route } from "react-router-dom";

//Layouts
import DefaultLayout from "../layouts/DefaultLayout";

const SignUpHOC = ({ component: Component , ...rest }) => {
  return (
    <>
    <Route
    {...rest}
    component = {(props) => (
      <DefaultLayout>
       <Component {...props} />
      </DefaultLayout>
    )}
     />
    </>
  );
};

export default SignUpHOC;