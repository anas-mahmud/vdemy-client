import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut, dark, setDark } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const darkMood = () => {
    setDark(!dark);
    localStorage.setItem("mood", JSON.stringify(!dark));
  };

  return (
    <div className="fixed w-full">
      <header className="p-4 bg-gradient-to-r from-cyan-800 to-teal-800 dark:text-gray-200">
        <div className="container flex justify-around h-16 mx-auto">
          <Link aria-label="Back to homepage" className="flex items-center p-2">
            <img
              className="h-10 pr-2"
              src="https://jthemes.net/themes/html/etreeks/assests/images/hero-logo.png"
              alt=""
              srcset=""
            />
            <span className="text-3xl font-bold text-yellow-500">Vdemy</span>
          </Link>
          <ul className="items-stretch hidden space-x-3 lg:flex text-gray-100 font-medium">
            <li className="flex">
              <Link
                to={"/home"}
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-yellow-400"
              >
                Home
              </Link>
            </li>
            <li className="flex">
              <Link
                to={"/courses"}
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-yellow-400"
              >
                Courses
              </Link>
            </li>
            <li className="flex">
              <Link
                to={"/faq"}
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-yellow-400"
              >
                FAQ
              </Link>
            </li>
            <li className="flex">
              <Link
                to={"/blog"}
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-yellow-400"
              >
                Blog
              </Link>
            </li>
            <li className="flex">
              <Link
                to={"/about"}
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-yellow-400"
              >
                About US
              </Link>
            </li>
            <li className="flex">
              <Link
                to={"/contact"}
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-yellow-400"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex">
            <div className="items-center flex-shrink-0 hidden lg:flex">
              {user?.uid ? (
                <button
                  onClick={handleLogOut}
                  type="button"
                  className="px-8 py-3 font-semibold rounded bg-yellow-600 dark:text-gray-800"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link to={"/login"}>
                    <button className="self-center px-8 py-3 mr-3 font-semibold rounded bg-yellow-600 dark:text-gray-900">
                      Sign in
                    </button>
                  </Link>
                  {/* <Link to={'/register'}><button className="self-center px-8 py-3 font-semibold rounded bg-yellow-600 dark:text-gray-900">Register</button></Link> */}
                </>
              )}
            </div>
            <label className="swap swap-rotate">
              <input type="checkbox" className="hidden" onClick={darkMood} />
              {dark ? (
                <svg
                  className="swap-off fill-current w-10 h-10 text-yellow-500 m-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              ) : (
                <svg
                  className="swap-on fill-current w-10 h-10 text-yellow-500 m-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
              )}
            </label>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
