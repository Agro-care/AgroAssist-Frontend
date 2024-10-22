import React , {useContext} from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
// import logo from "../img/logo.png";
import { UserContext } from "../userContext";

const Navbar = () => {
  const { user, Logout } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    Logout(); // Clear user data from context
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className="">
      <div className="flex content-center bg-customGreen pb-4">
        <div className="flex items-center cursor-pointer ml-auto lg:ml-16">
          {/* <img
            onClick={() => navigate("/")}
            src=""
            className="logoWeb"
            alt=""
          /> */}
          <h3 className="text-md text-white font-bold opacity-[.70]">Agro Assist</h3>
        </div>
        <div className="flex-2 w-6/12 mx-auto">
          <ul className="flex mt-4 items-around">
            <li
              onClick={() => navigate("/")}
              className="text-sm cursor-pointer font-semibold text-white hover:opacity-90 lg:ml-7 ml-6 mr-1.5"
            >
              Home
            </li>
            <li
              className="text-sm cursor-pointer font-semibold text-white hover:opacity-90 ml-6 mr-1.5"
              onClick={() => navigate("/weatherAlerts")}
            >
              Weather Alerts
            </li>
            <li
              className="text-sm cursor-pointer font-semibold text-white hover:opacity-90 ml-6 mr-1.5"
              onClick={() => navigate("/crop")}
            >
              Crop Recommendation
            </li>
            <li
              onClick={() => navigate("/fertilizer")}
              className="text-sm cursor-pointer font-semibold text-white hover:opacity-90 ml-6 mr-1.5"
            >
              Fertilizer Recommendation
            </li>
            <li
              onClick={() => navigate("/disease")}
              className="text-sm cursor-pointer font-semibold text-white hover:opacity-90 ml-6 mr-1.5"
            >
              Disease Prediction
            </li>
            <li
              onClick={() => navigate("/sms")}
              className="text-sm cursor-pointer font-semibold text-white hover:opacity-90 ml-6 mr-1.5"
            >
              Ecommerce Store
            </li>
            {!user ? (
        <>
          <li
              onClick={() => navigate("/login")}
              className="text-sm cursor-pointer font-semibold text-white hover:opacity-90 ml-6 mr-1.5"
            >
              Login
            </li>
        </>
      ) : (
        <>
        <p className="text-sm cursor-pointer font-semibold text-white hover:opacity-90 ml-6 mr-1.5">
          Welcome, {user}!</p>
          <li
              onClick={handleLogout}
              className="text-sm cursor-pointer font-semibold text-white hover:opacity-90 ml-6 mr-1.5"
            >
              Logout
            </li>
            
        </>
      )}
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
