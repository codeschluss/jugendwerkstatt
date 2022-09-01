import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const ChatOverview = () => {
  return (
    <div className="w-full h-full   mt-10 ">
      <nav className="text-2xl flex justify-around text-gray-500  mb-5">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-gray-500"
              : "border-b-2 border-transparent"
          }
          to="/messenger/chats"
        >
          Chats
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-gray-500"
              : "border-b-2 border-transparent"
          }
          to="/messenger/calls"
        >
          Anrufe
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-gray-500"
              : "border-b-2 border-transparent"
          }
          to="/messenger/contacts"
        >
          Kontakte
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default ChatOverview;
