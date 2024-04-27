import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Nav = () => {
  const [theme,setTheme]=useState("light")

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle =e =>{
    if(e.target.checked){
      setTheme("dark")
    }else{
      setTheme("light")
    }
  }
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) =>
              isActive ? "font-bold text-primary" : "font-bold"
            }>Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-tourists-spot" className={({ isActive }) =>
              isActive ? "font-bold text-primary" : "font-bold"
            }>All Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to="/add-tourists-spot" className={({ isActive }) =>
              isActive ? "font-bold text-primary" : "font-bold"
            }>Add Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to="/my-list" className={({ isActive }) =>
              isActive ? "font-bold text-primary" : "font-bold"
            }>My List</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-300 shadow-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="text-xl font-bold text-primary">
            Explore<span className="text-secondary">World</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 text-sm">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="mr-4">
            <label className="cursor-pointer grid place-items-center">
              <input
              onChange={handleToggle}
                type="checkbox"
                
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/D4DRmzc/istockphoto-1337144146-612x612.jpg"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost">
                    {user?.displayName || "user name not found"}
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-sm  btn-ghost"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm  btn-ghost">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
