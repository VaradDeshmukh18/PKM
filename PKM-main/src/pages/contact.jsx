import { FaLinkedin } from "react-icons/fa";
import Footer from "../components/Footer";

const Contact = () => {
  const contacts = [
    {
      name: "Lubhavan Burghate",
      designation: "SDE",
      institution: "PCCOE",
      email: "lubhavan.burghate21@pccoepune.org",
      phone: "8208442402",
      linkedin: "https://www.linkedin.com/in/lubhavan-burghate/",
    },
    {
      name: "Varad Deshmukh",
      designation: "Software Engineer",
      institution: "PCCOE",
      email: "Varad.deshmukh21@pccoepune.org",
      phone: "9822029367",
      linkedin: "https://www.linkedin.com/in/varad-deshmukh/",
    },
    {
      name: "Vinit Chaudhari",
      designation: "Wildlife Photographer",
      institution: "PCCOE",
      email: "vinit.chaudhari21@pccoepune.org",
      phone: "7387922115",
      linkedin: "https://www.linkedin.com/in/vinitchaudhari/",
    },
    {
      name: "Tejas Bhame",
      designation: "Gym Freak",
      institution: "PCCOE",
      email: "tejas.bhame21@pccoepune.org",
      phone: "7498029194",
      linkedin: "https://www.linkedin.com/in/tejas-bhame-635696232/",
    },
    {
      name: "Dipesh Walte",
      designation: "Guide",
      institution: "Pccoe",
      email: "dipeshwalte@gmail.com",
      phone: "9422421316",
      linkedin: "https://www.linkedin.com/in/dipesh-walte-45917157/",
    },
    {
      name: "Archana Kadam",
      designation: "Guide",
      institution: "PCCOE",
      email: "archana.kadam@pccoepune.org",
      phone: "9876543210",
      linkedin: "https://www.linkedin.com/in/new-member/",
    },
  ];

  return (
    <>
    <div className="p-10 bg-gray-100 min-h-screen flex items-center justify-center">
      <br></br>
      <br></br><br></br>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contacts.map((contact, index) => (
          <div key={index} className="p-8 bg-white rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-2xl">
            {/* Profile Image Placeholder */}
            <div className="w-24 h-24 bg-black rounded-full mx-auto flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full"></div>
            </div>

            {/* Name */}
            <div className="inline-block px-4 py-2 mt-4 text-sm font-bold text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors duration-300 shadow-sm">
              {contact.name}
            </div>

            {/* Designation and Institution */}
            <h3 className="text-2xl font-bold text-gray-800 mt-4 hover:text-blue-600 transition-colors duration-300 leading-tight">
              {contact.designation}
            </h3>
            <p className="text-gray-600 mt-2">{contact.institution}</p>

            {/* Contact Information */}
            <div className="mt-6">
              <h4 className="font-bold text-gray-700 mb-3">Contact:</h4>
              <div className="space-y-2 list-none">
                <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  <span>Email: {contact.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  <span>Phone: {contact.phone}</span>
                </div>
              </div>
            </div>

            {/* LinkedIn Button */}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-6 py-4 px-6 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:shadow-2xl font-bold text-lg flex items-center justify-center"
            >
              <FaLinkedin className="mr-2 text-2xl" /> LinkedIn
            </a>
          </div>
        ))}
      </div>
    </div>
      <Footer></Footer>
      </>
  );
};

export default Contact;
