import React from "react";
import { Link } from "react-router-dom";

const StudentProfile = () => {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const token = localStorage.getItem("token");

  // If user is not authenticated, show an error message
  if (!user || !token) {
    return (
      <div className="text-center mt-10 text-red-500">
        User not authenticated. Please{" "}
        <Link to="/login" className="text-blue-500 underline">
          log in
        </Link>
        .
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 p-5">
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
        {/* Profile Section */}
        <img
          src="/images/student.png"
          alt="Student Profile"
          className="w-24 h-24 rounded-full mb-4 border-2 border-gray-200"
        />
        <h2 className="text-2xl font-semibold mb-1">Student Profile</h2>

        {/* Labs Section */}
        <div className="grid grid-cols-2 gap-4 w-full md:grid-cols-3 lg:grid-cols-4 mt-6">
          {[
            "OOPS",
            "C++",
            "C",
            "ML",
            "DBMS",
            "CN",
            "DSA",
            "CV",
            "BI",
            "CC",
            "Web Technology",
          ].map((lab) => (
            <Link
              to={`/${lab.toLowerCase().replace(/\s+/g, "")}Assi`} // Redirect to subject assignments
              key={lab}
              className="bg-blue-500 text-white py-4 px-6 rounded-lg text-center shadow hover:bg-blue-600 transition"
            >
              {lab}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;

// import React from "react";
// import { Link } from "react-router-dom";

// const StudentProfile = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const token = localStorage.getItem("token");

//   if (!user || !token) {
//     return (
//       <div className="text-center mt-10 text-red-500">
//         User not authenticated
//       </div>
//     );
//   }

//   return (
//     isAuthenticated && (
//       <div className="container mx-auto mt-10 p-5">
//         <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
//           {/* Profile Section */}
//           <img
//             src="/images/student.png"
//             alt="Student Profile"
//             className="w-24 h-24 rounded-full mb-4 border-2 border-gray-200"
//           />
//           <h2 className="text-2xl font-semibold mb-1">Student Profile</h2>

//           {/* Labs Section */}
//           <div className="grid grid-cols-2 gap-4 w-full md:grid-cols-3 lg:grid-cols-4 mt-6">
//             {[
//               "OOPS",
//               "C++",
//               "C",
//               "ML",
//               "DBMS",
//               "CN",
//               "DSA",
//               "CV",
//               "BI",
//               "CC",
//               "Web Technology",
//             ].map((lab) => (
//               <Link
//                 to={`/${lab.toLowerCase().replace(/\s+/g, "")}Assi`} // Redirect to subject assignments
//                 key={lab}
//                 className="bg-blue-500 text-white py-4 px-6 rounded-lg text-center shadow hover:bg-blue-600 transition"
//               >
//                 {lab}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default StudentProfile;
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const StudentProfile = () => {
//   // State to hold user data
//   const [user, setUser] = useState({ name: "", email: "" });

//   // Load user data from localStorage
//   useEffect(() => {
//     const storedName = localStorage.getItem("userName");
//     const storedEmail = localStorage.getItem("userEmail");
//     if (storedName && storedEmail) {
//       setUser({ name: storedName, email: storedEmail });
//     }
//   }, []);

//   // If no user data is found, show a message
//   if (!user.name || !user.email) {
//     return <div className="text-center mt-10">User not logged in</div>;
//   }

//   return (
//     <div className="container mx-auto mt-10 p-5">
//       <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
//         {/* Profile Image (Static from public folder) */}
//         <img
//           src="/images/student.png" // Directly use the public folder path
//           alt="Student Profile"
//           className="w-24 h-24 rounded-full mb-4 border-2 border-gray-200"
//         />
//         <h2 className="text-2xl font-semibold mb-1">{user.name}</h2>
//         <p className="text-gray-600 mb-4">{user.email}</p>

//         {/* Labs Section */}
//         <div className="grid grid-cols-2 gap-4 w-full md:grid-cols-3 lg:grid-cols-4 mt-6">
//           {[
//             "OOPS",
//             "C++",
//             "C",
//             "ML",
//             "DBMS",
//             "CN",
//             "DSA",
//             "CV",
//             "BI",
//             "CC",
//             "Web Technology",
//           ].map((lab) => (
//             <Link
//               to={`/${lab.toLowerCase().replace(/\s+/g, "")}Assi`}
//               key={lab}
//               className="bg-blue-500 text-white py-4 px-6 rounded-lg text-center shadow hover:bg-blue-600 transition"
//             >
//               {lab}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default StudentProfile;
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios"; // Import axios for API calls

// const StudentProfile = () => {
//   // State to hold user data
//   const [user, setUser] = useState({ name: "", email: "", role: "" });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const storedEmail = localStorage.getItem("userEmail"); // Get email from localStorage
//         if (!storedEmail) {
//           setLoading(false);
//           return;
//         }

//         const response = await axios.get(
//           `http://localhost:5000/api/auth/profile?email=${storedEmail}`
//         );
//         setUser(response.data); // Set user data from backend
//       } catch (error) {
//         console.error("Error fetching user:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   if (loading) {
//     return <div className="text-center mt-10">Loading...</div>;
//   }

//   if (!user.name) {
//     return <div className="text-center mt-10">User not logged in</div>;
//   }

//   return (
//     <div className="container mx-auto mt-10 p-5">
//       <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
//         <img
//           src="/images/student.png"
//           alt="Student Profile"
//           className="w-24 h-24 rounded-full mb-4 border-2 border-gray-200"
//         />
//         <h2 className="text-2xl font-semibold mb-1">{user.name}</h2>
//         <p className="text-gray-600 mb-4">{user.email}</p>

//         {/* Labs Section */}
//         <div className="grid grid-cols-2 gap-4 w-full md:grid-cols-3 lg:grid-cols-4 mt-6">
//           {[
//             "OOPS",
//             "C++",
//             "C",
//             "ML",
//             "DBMS",
//             "CN",
//             "DSA",
//             "CV",
//             "BI",
//             "CC",
//             "Web Technology",
//           ].map((lab) => (
//             <Link
//               to={`/${lab.toLowerCase().replace(/\s+/g, "")}Assi`}
//               key={lab}
//               className="bg-blue-500 text-white py-4 px-6 rounded-lg text-center shadow hover:bg-blue-600 transition"
//             >
//               {lab}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentProfile;
