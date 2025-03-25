// import { useState } from "react";
// import axios from "axios";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "student",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/register",
//         formData
//       );
//       alert(response.data.message);
//     } catch (error) {
//       alert(error.response?.data?.error || "Registration failed");
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           onChange={handleChange}
//           required
//         />
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
//         <select name="role" onChange={handleChange}>
//           <option value="student">Student</option>
//           <option value="teacher">Teacher</option>
//         </select>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// // export default Register;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "", // ✅ Renamed from username
//     email: "", // ✅ Added email field
//     password: "",
//     role: "student",
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
//         "http://localhost:5000/api/auth/register",
//         formData
//       );

//       alert(res.data.message);
//       navigate("/login");
//     } catch (err) {
//       setError(err.response?.data?.error || "Registration failed. Try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded">
//         <h2 className="text-2xl font-bold mb-4">Register</h2>
//         {error && <p className="text-red-500">{error}</p>}

//         <input
//           type="text"
//           name="name" // ✅ Renamed from username
//           placeholder="Full Name"
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="email" // ✅ Added email input
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

//         <select name="role" onChange={handleChange}>
//           <option value="student">Student</option>
//           <option value="teacher">Teacher</option>
//         </select>

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>

        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <select
            name="role"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-green-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
