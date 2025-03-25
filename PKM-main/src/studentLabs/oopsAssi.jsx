// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Link } from "react-router-dom";

// const OopsAssi = () => {
//   const { user, isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     isAuthenticated && (
//       <div className="container mx-auto mt-10 p-5">
//         {/* Content Section */}
//         <div className="bg-white p-6 rounded-lg shadow-md mt-6">
//           <h2 className="text-3xl font-semibold mb-4">Oops Lab</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             <div>
//               <h3 className="text-xl font-medium">
//                 Faculty Name: Archana Kadam
//               </h3>
//               <p className="text-md text-gray-600">Lab Name: OOPS</p>
//               <p className="text-md text-gray-600">Lab ID: 123</p>
//             </div>
//           </div>

//           {/* Assignments Table Section */}
//           <table className="table-auto w-full border-collapse">
//             <thead>
//               <tr>
//                 <th className="border px-4 py-2">Assignment</th>
//                 <th className="border px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Array.from({ length: 8 }, (_, index) => (
//                 <tr key={index}>
//                   <td className="border px-16 py-2">Assignment {index + 1}</td>
//                   <td className="px-6 py-4 text-center">
//                     <Link
//                       to="/ide"
//                       onClick={() => console.log("Navigating to IDE")}
//                       className="bg-blue-500 text-white py-2 px-4 rounded-lg"
//                     >
//                       Write Code
//                     </Link>
//                   </td>
//                 </tr>
//               ))}
//               <tr>
//                 <td className="border px-16 py-2">Mock Exam</td>
//                 <td className="px-6 py-4 text-center">
//                   <Link
//                     to="/ide"
//                     className="bg-blue-500 text-white py-2 px-4 rounded-lg text-center shadow hover:bg-blue-600 transition"
//                   >
//                     Write Code
//                   </Link>
//                 </td>
//               </tr>
//               <tr>
//                 <td className="border px-16 py-2">Final Exam</td>
//                 <td className="px-6 py-4 text-center">
//                   <Link
//                     to="/ide"
//                     className="bg-blue-500 text-white py-2 px-4 rounded-lg text-center shadow hover:bg-blue-600 transition"
//                   >
//                     Write Code
//                   </Link>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     )
//   );
// };

// export default OopsAssi;
import React from "react";
import { Link } from "react-router-dom";

const OopsAssi = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const isAuthenticated = !!user && !!token;

  if (!isAuthenticated) {
    return (
      <div className="text-center mt-10 text-red-500">
        User not authenticated
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 p-5">
      {/* Content Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-3xl font-semibold mb-4">Oops Lab</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-xl font-medium">Faculty Name: Archana Kadam</h3>
            <p className="text-md text-gray-600">Lab Name: OOPS</p>
            <p className="text-md text-gray-600">Lab ID: 123</p>
          </div>
        </div>

        {/* Assignments Table Section */}
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Assignment</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }, (_, index) => (
              <tr key={index}>
                <td className="border px-16 py-2">Assignment {index + 1}</td>
                <td className="px-6 py-4 text-center">
                  <Link
                    to="/ide"
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                  >
                    Write Code
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OopsAssi;
