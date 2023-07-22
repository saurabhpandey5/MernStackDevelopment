import React, { useContext } from "react";
// import Loading from '../../Component/Loading/Loading'
// import Spinners from '../../Component/Spinner/Spinner'
import Dropdown from "../../Component/Dropdown/Dropdown";
import MyContext from "../../Pages/Contact/MyContext";

const Contact = () => {
  const user = useContext(MyContext);

  console.log("from contact", user);

  return <div>
    {user.stateValue === true ? <Dropdown /> : <p>hI</p>}
    </div>;
};

export default Contact;
