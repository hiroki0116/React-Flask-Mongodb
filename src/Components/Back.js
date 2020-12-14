import React from "react";
import { withRouter } from "react-router-dom";

const Back = ({ history }) => (
    <button 
    onClick={history.goBack} 
    className="border border-teal-500 text-teal-500 rounded-md px-4 py-1 m-2 transition duration-200 ease select-none hover:text-white hover:bg-teal-900 focus:outline-none focus:shadow-outline"
    >
        Go back
        
    </button>
  );


export default withRouter(Back);