import React from "react";
// import codingImage from "../../images/Download.jpg";
// import pkm_banner from "../assets/Pkm_banner.webp";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-blue-500 to-blue-400 text-white w-full py-12 text-center rounded-b-3xl shadow-lg">
        <div className="w-24 h-24 mx-auto bg-white rounded-full p-1 shadow-md">
          <img
            src={"https://images.unsplash.com/photo-1516321497487-e288fb19713f"} // Replace with actual image
            alt="Profile"
            className="w-full h-full rounded-full"
          />
        </div>
        <h1 className="text-3xl font-bold mt-4">
          About Proctored Knowledge Map
        </h1>
        <p className="text-lg mt-2 opacity-90">
          Empowering Tomorrow’s Tech Education
        </p>
      </div>

      {/* Who We Are Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-8 max-w-4xl w-full text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          PKM dedicated to advancing computing as a science and profession. We
          create opportunities for students to learn, grow, and connect with
          industry professionals while developing their technical skills and
          leadership abilities.
        </p>
        <img
          src="/images/download.jpg" // Replace with actual image
          alt="Coding Group"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl w-full">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-4 rounded-lg flex items-center space-x-4"
          >
            <div className="text-3xl">{card.icon}</div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </section>
  );
};

// Card Data
const cardData = [
  {
    title: "Educational Excellence",
    description:
      "Promoting technical education and fostering a learning environment.",
    icon: "🎓",
  },
  {
    title: "Technical Innovation",
    description: "Encouraging innovative solutions and technical development.",
    icon: "💵",
  },
  {
    title: "Community Building",
    description:
      "Creating a strong network of tech enthusiasts and professionals.",
    icon: "🤝",
  },
  {
    title: "Career Growth",
    description: "Supporting students in achieving their career aspirations.",
    icon: "🚀",
  },
];

export default AboutUs;
