// // import React, { useEffect, useState } from "react";
// // import { useAuth0 } from "@auth0/auth0-react";

// // const KnowledgeMap = () => {
// //   const { isAuthenticated } = useAuth0();
// //   const [knowledgeMaps, setKnowledgeMaps] = useState([]);

// //   useEffect(() => {
// //     fetch("http://localhost:5000/api/auth/getKnowledgeMaps")
// //       // API to get Freeplane maps
// //       .then((response) => response.json())
// //       .then((data) => setKnowledgeMaps(data))
// //       .catch((error) => console.error("Error fetching knowledge maps:", error));
// //   }, []);

// //   return (
// //     isAuthenticated && (
// //       <div className="container mx-auto mt-10 p-5">
// //         <div className="bg-white p-6 rounded-lg shadow-md">
// //           <h2 className="text-3xl font-semibold mb-4">
// //             Freeplane Knowledge Maps
// //           </h2>

// //           <table className="table-auto w-full border-collapse">
// //             <thead>
// //               <tr>
// //                 <th className="border px-4 py-2">Knowledge Map</th>
// //                 <th className="border px-4 py-2">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {knowledgeMaps.map((map, index) => (
// //                 <tr key={index}>
// //                   <td className="border px-4 py-2">{map}</td>
// //                   <td className="border px-4 py-2">
// //                     <a
// //                       href={`http://localhost:5000/api/auth/convert/${map}`} // Calls API to convert .mm to .html
// //                       target="_blank"
// //                       className="bg-blue-500 text-white py-2 px-4 rounded-lg"
// //                     >
// //                       View
// //                     </a>

// //                     <a
// //                       href={`/freeplane_maps/${map}`}
// //                       download={map}
// //                       className="bg-green-500 text-white py-2 px-4 ml-2 rounded-lg"
// //                     >
// //                       Download
// //                     </a>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     )
// //   );
// // };

// // export default KnowledgeMap;
// // import React, { useEffect, useState } from "react";
// // import { useAuth0 } from "@auth0/auth0-react";

// // const KnowledgeMap = () => {
// //   const { isAuthenticated } = useAuth0();
// //   const [knowledgeMaps, setKnowledgeMaps] = useState([]);
// //   const [selectedMap, setSelectedMap] = useState(null);

// //   useEffect(() => {
// //     fetch("http://localhost:5000/api/auth/getKnowledgeMaps") // Get all available .mm files
// //       .then((response) => response.json())
// //       .then((data) => setKnowledgeMaps(data))
// //       .catch((error) => console.error("Error fetching knowledge maps:", error));
// //   }, []);

// //   const handleViewMap = (map) => {
// //     setSelectedMap(`http://localhost:5000/api/auth/convert/${map}`);
// //   };

// //   return (
// //     isAuthenticated && (
// //       <div className="container mx-auto mt-10 p-5">
// //         <div className="bg-white p-6 rounded-lg shadow-md">
// //           <h2 className="text-3xl font-semibold mb-4">
// //             Freeplane Knowledge Maps
// //           </h2>

// //           <table className="table-auto w-full border-collapse">
// //             <thead>
// //               <tr>
// //                 <th className="border px-4 py-2">Knowledge Map</th>
// //                 <th className="border px-4 py-2">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {knowledgeMaps.map((map, index) => (
// //                 <tr key={index}>
// //                   <td className="border px-4 py-2">{map}</td>
// //                   <td className="border px-4 py-2">
// //                     <button
// //                       onClick={() => handleViewMap(map)}
// //                       className="bg-blue-500 text-white py-2 px-4 rounded-lg"
// //                     >
// //                       View
// //                     </button>
// //                     <a
// //                       href={`http://localhost:5000/api/auth/download/${map}`}
// //                       download={map}
// //                       className="bg-green-500 text-white py-2 px-4 ml-2 rounded-lg"
// //                     >
// //                       Download
// //                     </a>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>

// //           {selectedMap && (
// //             <div className="mt-10">
// //               <h3 className="text-2xl font-semibold mb-2">Mind Map Preview</h3>
// //               <iframe
// //                 src={selectedMap}
// //                 className="w-full h-[600px] border rounded-lg"
// //                 title="Mind Map Viewer"
// //               ></iframe>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     )
// //   );
// // };

// // // export default KnowledgeMap;
// import React, { useEffect, useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const KnowledgeMap = () => {
//   const { isAuthenticated } = useAuth0();
//   const [knowledgeMaps, setKnowledgeMaps] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/auth/getKnowledgeMaps") // Fetch list of .mm files
//       .then((response) => response.json())
//       .then((data) => setKnowledgeMaps(data))
//       .catch((error) => console.error("Error fetching knowledge maps:", error));
//   }, []);

//   const handleViewMap = (map) => {
//     setSelectedImage(`/images/tejas_bhame21_pccoepune_org.png`); // Load from public/images/
//   };

//   return (
//     isAuthenticated && (
//       <div className="container mx-auto mt-10 p-5">
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-3xl font-semibold mb-4">
//             Freeplane Knowledge Maps
//           </h2>

//           <table className="table-auto w-full border-collapse">
//             <thead>
//               <tr>
//                 <th className="border px-4 py-2">Knowledge Map</th>
//                 <th className="border px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {knowledgeMaps.map((map, index) => (
//                 <tr key={index}>
//                   <td className="border px-4 py-2">{map}</td>
//                   <td className="border px-4 py-2">
//                     <button
//                       onClick={() => handleViewMap(map)}
//                       className="bg-blue-500 text-white py-2 px-4 rounded-lg"
//                     >
//                       View
//                     </button>
//                     <a
//                       href={`http://localhost:5000/api/auth/download/${map}`}
//                       download={map}
//                       className="bg-green-500 text-white py-2 px-4 ml-2 rounded-lg"
//                     >
//                       Download
//                     </a>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {selectedImage && (
//             <div className="mt-10">
//               <h3 className="text-2xl font-semibold mb-2">Mind Map Preview</h3>
//               <img
//                 src={selectedImage}
//                 alt="Mind Map Preview"
//                 className="w-full max-w-2xl mx-auto border rounded-lg"
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     )
//   );
// };

// export default KnowledgeMap;
import React, { useEffect, useState } from "react";

const KnowledgeMap = () => {
  // Authentication check (hardcoded for now)
  const isAuthenticated = localStorage.getItem("token") !== null;

  const [knowledgeMaps, setKnowledgeMaps] = useState([]);
  const [selectedImage, setSelectedImage] = useState(
    "/images/tejas_bhame21_pccoepune_org.png"
  ); // Default hardcoded image

  useEffect(() => {
    fetch("http://localhost:5000/api/auth/getKnowledgeMaps") // Update with live server URL if needed
      .then((response) => response.json())
      .then((data) => setKnowledgeMaps(data))
      .catch((error) => console.error("Error fetching knowledge maps:", error));
  }, []);

  const handleViewMap = (map) => {
    // console.log(`Viewing map: ${map}`);
    setSelectedImage("/images/tejas_bhame21_pccoepune_org.png"); // Always show the same image
  };

  return (
    isAuthenticated && (
      <div className="container mx-auto mt-10 p-5">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4">
            Freeplane Knowledge Maps
          </h2>

          <table className="table-auto w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Knowledge Map</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {knowledgeMaps.map((map, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{map}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleViewMap(map)}
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                    >
                      View
                    </button>
                    <a
                      href={`http://localhost:5000/api/auth/download/${map}`}
                      download={map}
                      className="bg-green-500 text-white py-2 px-4 ml-2 rounded-lg"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {selectedImage && (
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-2">Mind Map Preview</h3>
              <img
                src={selectedImage}
                alt="Mind Map Preview"
                className="w-full max-w-2xl mx-auto border rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default KnowledgeMap;
