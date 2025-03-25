// import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
// import pkmLogo from "../assets/Pkm.jpg";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useEffect, useState } from "react";
// import Loader from "../components/Loader";

// const Layout = () => {
//   const { user, loginWithRedirect, isAuthenticated, isLoading, logout } = useAuth0();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [role, setRole] = useState(null);

//   useEffect(() => {
//     const storedRole = localStorage.getItem("userRole");
//     setRole(storedRole);
//   }, []);

//   // Redirect based on role after authentication
//   useEffect(() => {
//     const role = localStorage.getItem("userRole");
//     if (isAuthenticated) {
//       if (location.pathname === "/login") {  // Prevents infinite redirects
//         if (role === "student") {
//           navigate("/student-profile");
//         } else if (role === "teacher") {
//           navigate("/teacher-profile");
//         } else {
//           navigate("/profile");
//         }
//       }
//     }
//   }, [isAuthenticated, location.pathname, navigate]);

//   if (isLoading) {
//     return <div><Loader /></div>;
//   }

//   return (
//     <>
//       <nav className="bg-black p-4 fixed top-0 left-0 w-full z-50">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="text-white text-2xl font-bold">
//             <Link to="/">
//               <img src={pkmLogo} alt="MyWebsite Logo" className="h-10" />
//             </Link>
//           </div>
//           <ul className="flex space-x-6 items-center">
//             <li>
//               <Link
//                 to="/"
//                 className="text-white hover:bg-blue-800 py-2 px-4 rounded transition duration-300"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/aboutUs"
//                 className="text-white hover:bg-blue-800 py-2 px-4 rounded transition duration-300"
//               >
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 className="text-white hover:bg-blue-800 py-2 px-4 rounded transition duration-300"
//               >
//                 Contact
//               </Link>
//             </li>
//             <li>
//               {/* Profile Link Redirects to Student or Teacher Profile */}
//               <Link
//                 to={role === "student" ? "/student-profile" : role === "teacher" ? "/teacher-profile" : "/profile"}
//                 className="text-white hover:bg-blue-800 py-2 px-4 rounded transition duration-300"
//                 // onClick={() => console.log("Navigating to:", role)}
//                 onClick={(e) => {
//                   if (!isAuthenticated) {
//                     e.preventDefault();
//                     navigate("/login");
//                   }
//                   console.log("Navigating to:", role)
//                 }}
//               >
//                 Profile
//               </Link>
//             </li>
//             <li>
//               {isAuthenticated ? (
//                 <button
//                   className="text-white hover:bg-blue-800 py-2 px-4 rounded transition duration-300"
//                   onClick={() => {
//                     logout({ logoutParams: { returnTo: window.location.origin } });
//                     localStorage.removeItem("userRole");
//                   }}
//                 >
//                   Logout
//                 </button>
//               ) : (
//                 <button
//                   className="text-white hover:bg-blue-800 py-2 px-4 rounded transition duration-300"
//                   onClick={() => navigate("/login")}
//                 >
//                   Log In
//                 </button>
//               )}
//             </li>
//           </ul>
//         </div>
//       </nav>

//       <div className="container mx-auto mt-4">
//         <Outlet />
//       </div>
//     </>
//   );
// };

// // export default Layout;
// import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
// import pkmLogo from "../assets/Pkm.jpg";
// import { useEffect, useState } from "react";

// const Layout = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [role, setRole] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const storedRole = localStorage.getItem("userRole");
//     setIsAuthenticated(!!token);
//     setRole(storedRole);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userRole");
//     setIsAuthenticated(false);
//     navigate("/login");
//   };

//   return (
//     <>
//       <nav className="bg-black p-4 fixed top-0 left-0 w-full z-50">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link to="/">
//             <img src={pkmLogo} alt="Logo" className="h-10" />
//           </Link>
//           <ul className="flex space-x-6 items-center">
//             <li>
//               <Link to="/" className="text-white">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/aboutUs" className="text-white">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className="text-white">
//                 Contact
//               </Link>
//             </li>
//             {isAuthenticated ? (
//               <>
//                 <li>
//                   <Link
//                     to={role === "student" ? "/student-profile" : "/profile"}
//                     className="text-white"
//                   >
//                     Profile
//                   </Link>
//                 </li>
//                 <li>
//                   <button onClick={handleLogout} className="text-white">
//                     Logout
//                   </button>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <Link to="/login" className="text-white">
//                     Login
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/register" className="text-white">
//                     Register
//                   </Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </nav>
//       <div className="container mx-auto mt-4">
//         <Outlet />
//       </div>
//     </>
//   );
// };

// // export default Layout;
// import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
// import pkmLogo from "../assets/Pkm.jpg";
// import { useEffect, useState } from "react";

// const Layout = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [role, setRole] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const storedRole = localStorage.getItem("userRole");
//     setIsAuthenticated(!!token);
//     setRole(storedRole);
//   }, [location]); // Updates when route changes

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userRole");
//     setIsAuthenticated(false);
//     setRole(null);
//     navigate("/"); // Redirect to home after logout
//   };

//   return (
//     <>
//       <nav className="bg-black p-4 fixed top-0 left-0 w-full z-50">
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Logo */}
//           <Link to="/">
//             <img src={pkmLogo} alt="Logo" className="h-10" />
//           </Link>

//           {/* Navigation Links */}
//           <ul className="flex space-x-6 items-center">
//             <li>
//               <Link to="/" className="text-white">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/aboutUs" className="text-white">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className="text-white">
//                 Contact
//               </Link>
//             </li>

//             {/* Authenticated User Links */}
//             {isAuthenticated ? (
//               <>
//                 {role === "student" && (
//                   <li>
//                     <Link to="/student-profile" className="text-white">
//                       Student Profile
//                     </Link>
//                   </li>
//                 )}
//                 {role === "teacher" && (
//                   <li>
//                     <Link to="/teacher-profile" className="text-white">
//                       Teacher Profile
//                     </Link>
//                   </li>
//                 )}
//                 <li>
//                   <button onClick={handleLogout} className="text-white">
//                     Logout
//                   </button>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <Link to="/login" className="text-white">
//                     Login
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/register" className="text-white">
//                     Register
//                   </Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="container mx-auto mt-4">
//         <Outlet />
//       </div>
//     </>
//   );
// };

// export default Layout;
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import pkmLogo from "../assets/Pkm.jpg";
import { useEffect, useState } from "react";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("userRole");

    setIsAuthenticated(!!token);
    setRole(storedRole);
  }, [location]); // Updates on route change

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    setIsAuthenticated(false);
    setRole(null);
    navigate("/"); // Redirect to home after logout
  };

  return (
    <>
      <nav className="bg-black p-4 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img src={pkmLogo} alt="Logo" className="h-10" />
          </Link>

          {/* Navigation Links */}
          <ul className="flex space-x-6 items-center">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutUs" className="text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white">
                Contact
              </Link>
            </li>

            {/* Show Student or Teacher Profile Link */}
            {isAuthenticated && role === "student" && (
              <li>
                <Link to="/student-profile" className="text-white">
                  Student Profile
                </Link>
              </li>
            )}
            {isAuthenticated && role === "teacher" && (
              <li>
                <Link to="/teacher-profile" className="text-white">
                  Teacher Profile
                </Link>
              </li>
            )}

            {/* Authenticated User: Show Logout */}
            {isAuthenticated ? (
              <li>
                <button onClick={handleLogout} className="text-white">
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login" className="text-white">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="text-white">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto mt-4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
