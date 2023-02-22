import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";


const PrivateRoute = ({ children }) => {
  const ac = false;
  let { access } = useContext(UserContext);
  if (!access) {
    return <Navigate to="/login" />;
  }

  return children;
};
export default PrivateRoute;
