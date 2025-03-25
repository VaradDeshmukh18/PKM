// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
// import Loader from "../components/Loader";

// const LoginPage = () => {
//   const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
//   const navigate = useNavigate();

//   if (isLoading) {
//     return (
//       <div>
//         <Loader />
//       </div>
//     );
//   }

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-96 text-center transition-all duration-300 hover:shadow-2xl">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           Choose Login Type
//         </h2>

//         <button
//           className="w-full py-3 mb-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 text-lg font-semibold shadow-md"
//           onClick={() => handleLogin("student")}
//         >
//           Student Login
//         </button>

//         <button
//           className="w-full py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all duration-300 text-lg font-semibold shadow-md"
//           onClick={() => handleLogin("teacher")}
//         >
//           Teacher Login
//         </button>
//       </div>
//     </div>
//   );
// };

// // export default LoginPage;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "", // ✅ Changed from username to email
//     password: "",
//   });

//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         formData
//       );
//       localStorage.setItem("token", res.data.token);

//       // Fetch user details after login
//       const profileRes = await axios.get(
//         "http://localhost:5000/api/auth/profile",
//         {
//           headers: { Authorization: `Bearer ${res.data.token}` },
//         }
//       );

//       const user = profileRes.data;
//       localStorage.setItem("user", JSON.stringify(user));

//       // Redirect based on role
//       if (user.role === "teacher") {
//         navigate("/teacher-profile");
//       } else {
//         navigate("/student-profile");
//       }
//     } catch (err) {
//       setError(err.response?.data?.error || "Login failed. Try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded">
//         <h2 className="text-2xl font-bold mb-4">Login</h2>
//         {error && <p className="text-red-500">{error}</p>}

//         <input
//           type="email" // ✅ Updated field to match backend
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// // export default Login;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         formData
//       );
//       localStorage.setItem("token", res.data.token);

//       // Fetch user details after login
//       const profileRes = await axios.get(
//         "http://localhost:5000/api/auth/profile",
//         {
//           headers: { Authorization: `Bearer ${res.data.token}` },
//         }
//       );

//       const user = profileRes.data;
//       localStorage.setItem("user", JSON.stringify(user));

//       // Redirect based on role
//       if (user.role === "teacher") {
//         navigate("/teacher-profile");
//       } else {
//         navigate("/student-profile");
//       }
//     } catch (err) {
//       setError(err.response?.data?.error || "Login failed. Try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded">
//         <h2 className="text-2xl font-bold mb-4">Login</h2>
//         {error && <p className="text-red-500">{error}</p>}

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );
      localStorage.setItem("token", res.data.token);

      // Fetch user details after login
      const profileRes = await axios.get(
        "http://localhost:5000/api/auth/profile",
        {
          headers: { Authorization: `Bearer ${res.data.token}` },
        }
      );

      const user = profileRes.data;
      localStorage.setItem("user", JSON.stringify(user));

      navigate(
        user.role === "teacher" ? "/teacher-profile" : "/student-profile"
      );
    } catch (err) {
      setError(err.response?.data?.error || "Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
