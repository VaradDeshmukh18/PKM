import React from "react";
import pkmLogo from "../assets/Pkm.jpg";
import pkm_banner from "../assets/Pkm_banner.webp";
import Footer from "../components/Footer";

const handleLearnMore = () => {
  const section = document.getElementById("learn-more-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error("Target section not found!");
  }
};

const Home = () => {
  return (
    <div className="bg-white-900 text-black flex flex-col items-center ">
      <div className=" text-center">
        <br />
        <br />

        <div className="relative w-screen h-screen">
          <img src={pkm_banner} alt="Banner" className="w-full h-full object-cover" />
          <div className="absolute top-0 left-0 h-full w-full flex items-center px-10">
            <div className="text-left text-black">
              <h1 className="text-4xl font-bold mb-4">Proctored Knowledge Maps</h1>
              <p className="text-lg mb-6">
                Empowering programmers with structured knowledge insights<br />
                and secure assessments! Our platform transforms the way you<br />
                learn and assess coding skills.
              </p>

              <div className="flex space-x-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 hover:text-white text-black font-bold py-2 px-4 rounded"
                  onClick={() => alert('Thank you for your interest! Contact us to get your free demo.')}
                >
                  Get Free Demo
                </button>
                <button
                  className="bg-black text-white hover:text-blue-700 font-bold py-2 px-4 rounded "
                  id="learn-more-section"
                  onClick={handleLearnMore}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>




        <div>
          {/* Features Section */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-10">
                Unlock Your Potential with Visual Knowledge Maps for Programmers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {/* Feature 1 */}
                <div className="shadow-lg p-6 rounded-lg">
                  <div className="text-4xl mb-4">📦</div>
                  <h3 className="text-xl font-bold mb-2">
                    Secure Assessments with Advanced Code Proctoring Techniques
                  </h3>
                  <p className="text-gray-600">
                    Visual Knowledge Maps provide a clear overview of your coding skills and progress.
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
                  >
                    Learn More &rarr;
                  </a>
                </div>
                {/* Feature 2 */}
                <div className="shadow-lg p-6 rounded-lg">
                  <div className="text-4xl mb-4">📦</div>
                  <h3 className="text-xl font-bold mb-2">
                    Harness the Power of Algorithmic Code Analysis for Growth
                  </h3>
                  <p className="text-gray-600">
                    Our algorithmic analysis uses NLP techniques to evaluate your coding concepts effectively.
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
                  >
                    Discover &rarr;
                  </a>
                </div>
                {/* Feature 3 */}
                <div className="shadow-lg p-6 rounded-lg">
                  <div className="text-4xl mb-4">📦</div>
                  <h3 className="text-xl font-bold mb-2">
                    Experience Robust Security with Code Proctoring & Blockchain Verification
                  </h3>
                  <p className="text-gray-600">
                    Ensure the authenticity of your assessments with our secure proctoring methods.
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
                  >
                    Get Started &rarr;
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>


        <div className="bg-white text-black">
          {/* Features Section */}
          <section className="py-16">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold mb-4">Features</h2>
              <h3 className="text-4xl font-bold mb-6">
                Explore Our Key Features for Programmers
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                Our platform offers innovative features designed to enhance your
                coding journey. Discover how gamified learning and performance
                tracking can elevate your skills.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {/* Feature 1 */}
                <div className="shadow-lg p-6 rounded-lg">
                  <div className="text-4xl mb-4">📦</div>
                  <h4 className="text-xl font-bold mb-2">
                    Engaging Gamified Learning Experience
                  </h4>
                  <p className="text-gray-600">
                    Stay motivated and challenged with interactive coding tasks.
                  </p>
                </div>
                {/* Feature 2 */}
                <div className="shadow-lg p-6 rounded-lg">
                  <div className="text-4xl mb-4">📦</div>
                  <h4 className="text-xl font-bold mb-2">
                    Comprehensive Performance Tracking Tools
                  </h4>
                  <p className="text-gray-600">
                    Monitor your growth and identify areas for improvement.
                  </p>
                </div>
                {/* Feature 3 */}
                <div className="shadow-lg p-6 rounded-lg">
                  <div className="text-4xl mb-4">📦</div>
                  <h4 className="text-xl font-bold mb-2">
                    Unlock Your Coding Potential Today
                  </h4>
                  <p className="text-gray-600">
                    Join us and transform your programming skills!
                  </p>
                </div>
              </div>
              <div className="mt-8 flex justify-center space-x-4">
                <button className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-6 rounded">
                  Learn More
                </button>
                <button className="bg-black text-white hover:bg-gray-800 font-bold py-2 px-6 rounded">
                  Sign Up &rarr;
                </button>
              </div>
            </div>
          </section>

          {/* Call-to-Action Section */}
          <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
              {/* Text Content */}
              <div className="mb-8 md:mb-0 md:w-1/2">
                <h3 className="text-3xl font-bold mb-4">Start Your Coding Journey with us</h3>
              </div>

              {/* Buttons */}
              <div className="flex flex-col space-y-4 md:w-1/2 justify-left md:justify-start">
                <p className="flex justify-left text-gray-600 text-lg leading-relaxed">
                  Unlock your potential as a programmer with Proctored Knowledge Maps. Join us <br/>
                  today to enhance your skills and gain valuable insights into your coding journey.
                </p>
                <div className="flex space-x-4 md:space-x-4">
                  <button className="bg-black text-white hover:bg-gray-800 font-bold py-3 px-6 rounded-lg transition duration-300 mb-4 md:mb-0">
                    Join Now
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-3 px-6 rounded-lg transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>

            </div>
          </section>


          <Footer></Footer>
        </div>

      </div>
    </div>
  );
};

export default Home;