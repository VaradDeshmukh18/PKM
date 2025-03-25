// import './App.css';
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import AboutUs from "./pages/aboutUs";
// import Contact from "./pages/contact";
// import Login from './pages/login';
// import Profile from "./pages/teacher-profile";
// import StudentProfile from "./pages/student-profile";
// import Oops from "./labs/oops"; 
// import OopsAssi from "./studentLabs/oopsAssi"; 
// import IDE from "./components/IDE";
// // import Cpp from "./pages/Cpp";
// // import C from "./pages/C";
// // import ML from "./pages/ML";
// // import DBMS from "./pages/DBMS";
// // import CN from "./pages/CN";
// // import DSA from "./pages/DSA";
// // import CV from "./pages/CV"; // New CV page
// // import BI from "./pages/BI"; // New BI page
// // import CC from "./pages/CC"; // New Cloud Computing page
// // import WebTechnology from "./pages/WebTechnology"; // New Web Technology page



// function App() {

//   return (
//     <>
//       <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="aboutUs" element={<AboutUs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="teacher-profile" element={<Profile />} /> 
//           <Route path="student-profile" element={<StudentProfile />} /> 
//           <Route path="login" element={<Login />} /> 
//           {/* <Route path="login" element={<Login />} /> */}

//           <Route path="/oops" element={<Oops />} />
//           <Route path="/oopsAssi" element={<OopsAssi />} />
//           {/* <Route path="/c++" element={<Cpp />} />
//           <Route path="/c" element={<C />} />
//           <Route path="/ml" element={<ML />} />
//           <Route path="/dbms" element={<DBMS />} />
//           <Route path="/cn" element={<CN />} />
//           <Route path="/dsa" element={<DSA />} />
//           <Route path="/cv" element={<CV />} /> 
//           <Route path="/bi" element={<BI />} /> 
//           <Route path="/cc" element={<CC />} /> 
//           <Route path="/webtechnology" element={<WebTechnology />} />  */}

//           <Route path="/ide" element={<IDE />} />

//         </Route>
//       </Routes>
//     </BrowserRouter>
//     </>
//   );
// }

// // // export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import AboutUs from "./pages/aboutUs";
// import Contact from "./pages/contact";
// import Login from "./pages/loginPage";
// import Register from "./pages/register";
// import Profile from "./pages/teacher-profile";
// import StudentProfile from "./pages/student-profile";
// import IDE from "./components/IDE";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="aboutUs" element={<AboutUs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="login" element={<Login />} />
//           <Route path="register" element={<Register />} />

//           {/* Protected Routes with Role-Based Access */}
//           <Route path="teacher-profile" element={<ProtectedRoute element={<Profile />} allowedRoles={["teacher"]} />} />
//           <Route path="student-profile" element={<ProtectedRoute element={<StudentProfile />} allowedRoles={["student"]} />} />
//           <Route path="ide" element={<ProtectedRoute element={<IDE />} allowedRoles={["teacher", "student"]} />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import AboutUs from "./pages/aboutUs";
// import Contact from "./pages/contact";
// import Login from "./pages/loginPage";
// import Register from "./pages/register";
// import Profile from "./pages/teacher-profile";
// import StudentProfile from "./pages/student-profile";
// import IDE from "./components/IDE";
// import Oops from "./labs/oops";
// import OopsAssi from "./studentLabs/oopsAssi";
// import KnowledgeMap from "./pages/knowledgeMap"; // ✅ Import Knowledge Map page
// import ProtectedRoute from "./components/ProtectedRoute"; // Updated Protected Route
// import KnowledgeMapViewer from "./pages/KnowledgeMapViewer";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="aboutUs" element={<AboutUs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="login" element={<Login />} />
//           <Route path="register" element={<Register />} />

//           {/* Protected Routes */}
//           <Route
//             path="teacher-profile"
//             element={<ProtectedRoute element={<Profile />} allowedRoles={["teacher"]} />}
//           />
//           <Route
//             path="student-profile"
//             element={<ProtectedRoute element={<StudentProfile />} allowedRoles={["student"]} />}
//           />
//           <Route
//             path="ide"
//             element={<ProtectedRoute element={<IDE />} allowedRoles={["teacher", "student"]} />}
//           />

//           {/* Role-Specific Routes */}
//           <Route
//             path="oops"
//             element={<ProtectedRoute element={<Oops />} allowedRoles={["teacher"]} />}
//           />
//           <Route
//             path="oopsAssi"
//             element={<ProtectedRoute element={<OopsAssi />} allowedRoles={["student"]} />}
//           />

//           {/* ✅ Protected Knowledge Map Route (Only for Teachers) */}
//           <Route
//             path="knowledge-map"
//             element={<ProtectedRoute element={<KnowledgeMap />} allowedRoles={["teacher"]} />}
//           />

// <Route
//             path="knowledge-map"
//             element={<ProtectedRoute element={<KnowledgeMap />} allowedRoles={["teacher"]} />}
//           />
//             <Route element={<ProtectedRoute allowedRoles={["teacher"]} />}>
//           <Route path="/map-viewer/:mapName" element={<KnowledgeMapViewer />} />
//         </Route>

//           <Route path="unauthorized" element={<h2>Unauthorized Access</h2>} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/aboutUs";
import Contact from "./pages/contact";
import Login from "./pages/loginPage";
import Register from "./pages/register";
import Profile from "./pages/teacher-profile";
import StudentProfile from "./pages/student-profile";
import IDE from "./components/IDE";
import Oops from "./labs/oops";
import OopsAssi from "./studentLabs/oopsAssi";
import KnowledgeMap from "./pages/knowledgeMap";
import ProtectedRoute from "./components/ProtectedRoute";
import KnowledgeMapViewer from "./pages/KnowledgeMapViewer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="teacher-profile"
            element={<ProtectedRoute element={<Profile />} allowedRoles={["teacher"]} />}
          />
          <Route
            path="student-profile"
            element={<ProtectedRoute element={<StudentProfile />} allowedRoles={["student"]} />}
          />
          <Route
            path="ide"
            element={<ProtectedRoute element={<IDE />} allowedRoles={["teacher", "student"]} />}
          />

          {/* Role-Specific Routes */}
          <Route path="oops" element={<ProtectedRoute element={<Oops />} allowedRoles={["teacher"]} />} />
          <Route path="oopsAssi" element={<ProtectedRoute element={<OopsAssi />} allowedRoles={["student"]} />} />
          <Route path="knowledge-map" element={<ProtectedRoute element={<KnowledgeMap />} allowedRoles={["teacher"]} />} />
          <Route path="/map-viewer/:mapName" element={<ProtectedRoute element={<KnowledgeMapViewer />} allowedRoles={["teacher"]} />} />

          <Route path="unauthorized" element={<h2>Unauthorized Access</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
