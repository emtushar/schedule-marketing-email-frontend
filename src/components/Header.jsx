import React from "react";
import { MailIcon, LogOut } from "lucide-react";
import { logout } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className=" border-b-2 h-[8vh]  flex items-center justify-between px-12 font-mono">
      <div className="flex gap-2 text-lg">
        <MailIcon />
        Email marketing
      </div>
      <div className=" bg-teal-100 p-2 px-4 rounded-md hover:bg-teal-300  hover:outline-1">
        <button
          className=" flex gap-2 hover:cursor-pointer"
          onClick={handleLogout}
        >
          <LogOut />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
