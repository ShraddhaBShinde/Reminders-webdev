import React from "react"; 
//components
import Navbar from "../components/Navbar/navbar.component";
import Footer from "../Footer/Footer";

const DefaultLayout = (props) => {  
    return (
        <div>
            <Navbar />
            <Footer />
            {props.children}
        </div>
    );
};

export default DefaultLayout;