import React from "react";
import { useParams, Link } from "react-router-dom";

const KnowledgeMapViewer = () => {
  const { mapName } = useParams(); // Get the map name from the URL
  const imagePath = `/images/tejas_bhame21_pccoepune_org.png`; // Path in public folder

  return (
    <div className="container mx-auto mt-10 p-5">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-semibold mb-4">Knowledge Map Viewer</h2>
        <img
          src={imagePath}
          alt="Mind Map Preview"
          className="w-full max-w-3xl mx-auto border rounded-lg"
        />
        <div className="mt-5">
          <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
            Back to Maps
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeMapViewer;
