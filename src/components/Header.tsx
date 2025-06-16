import React, { useContext } from "react";
import { AuthContext } from "../Auth/context/AuthContext";
import { useNavigate } from "react-router";

const Header = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="h-20 bg-slate-950 text-white">
      <div>Header</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Header;
