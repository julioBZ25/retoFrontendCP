import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useUserStore from "../../../store/useUserStore";
import useLogin from "../../../auth/hooks/useLogin";
import { IoMdMenu } from "react-icons/io";

const Layout = () => {
  const { getUser } = useUserStore();
  const { handleLogout } = useLogin();
  const user = getUser();
  const handleClick = () => {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-xl px-5">
        <div className="navbar-start flex items-center">
          <div className="dropdown py-2">
            <div tabIndex={0} role="button" className="lg:hidden">
              <IoMdMenu size={24} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="home"
                  className={`hover:bg-base-200 ${({ isActive }) =>
                    isActive ? " bg-base-300" : ""}`}
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="candystore"
                  className={`hover:bg-base-200 ${({ isActive }) =>
                    isActive ? " bg-base-300" : ""}`}
                  onClick={handleClick}
                >
                  Dulcería
                </NavLink>
              </li>
            </ul>
          </div>
          <p className="text-xl py-2 px-4 font-semibold text-nowrap">
            Frontend CP
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-4">
            <li>
              <NavLink
                to="home"
                className={`hover:bg-base-200 ${({ isActive }) =>
                  isActive ? " bg-base-300" : ""}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="candystore"
                className={`hover:bg-base-200 ${({ isActive }) =>
                  isActive ? " bg-base-300" : ""}`}
              >
                Dulcería
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <p onClick={handleLogout} className="btn btn-primary px-4 py-0">
              Logout
            </p>
          ) : (
            <NavLink to="login" className="btn btn-primary px-4 py-0">
              Login
            </NavLink>
          )}
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
