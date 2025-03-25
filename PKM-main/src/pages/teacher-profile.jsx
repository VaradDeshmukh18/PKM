// import { useAuth0 } from "@auth0/auth0-react";
// import React from "react";
// import { Link } from "react-router-dom";

// const Profile = () => {
//   const { user, isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     return <div className="text-center mt-10">Loading ...</div>;
//   }

//   return (
//     isAuthenticated && (
//       <div className="container mx-auto mt-10 p-5">
//         <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
//           {/* Profile Section */}
//           <img
//             src="/images/teacher_pro.png"
//             alt="Student Profile"
//             className="w-24 h-24 rounded-full mb-4 border-2 border-gray-200"
//           />
//           <h2 className="text-2xl font-semibold mb-1">Teacher Profile</h2>

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
//                 to={`/${lab.toLowerCase().replace(/\s+/g, "")}`} // Generate dynamic path
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

// export default Profile;
import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const isAuthenticated = !!user && !!token; // Ensure authentication check

  if (!isAuthenticated) {
    return (
      <div className="text-center mt-10 text-red-500">
        User not authenticated
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 p-5">
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
        {/* Profile Section */}
        <img
          src="/images/teacher_pro.png"
          alt="Teacher Profile"
          className="w-24 h-24 rounded-full mb-4 border-2 border-gray-200"
        />
        <h2 className="text-2xl font-semibold mb-1">Teacher Profile</h2>

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
              to={`/${lab.toLowerCase().replace(/\s+/g, "")}`} // Generate dynamic path
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

export default Profile;
