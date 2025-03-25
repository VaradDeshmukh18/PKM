// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ element, allowedRoles }) => {
//   const user = JSON.parse(localStorage.getItem("user")); // Fetch user details from local storage

//   if (!user || !user.role) {
//     return <Navigate to="/login" />;
//   }

//   if (!allowedRoles.includes(user.role)) {
//     return <Navigate to="/unauthorized" />; // Redirect unauthorized users
//   }

//   return element;
// };

// export default ProtectedRoute;
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || !user.role) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return element;
};

export default ProtectedRoute;
