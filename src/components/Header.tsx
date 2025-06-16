import React, { useContext } from "react";
import { AuthContext } from "../Auth/context/AuthContext";
import { useNavigate } from "react-router";

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="p-4 h-20 bg-slate-950 text-white flex justify-between">
      <div>Header</div>
      <div>
        {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
      </div>
    </div>
  );
};

export default Header;
