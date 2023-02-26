import { Routes, Route } from "react-router-dom";
import Team from "./Dashboard/scenes/team";
import Invoices from "./Dashboard/scenes/invoices";
import Contacts from "./Dashboard/scenes/contacts";
import Bar from "./Dashboard/scenes/bar";
import Form from "./Dashboard/scenes/form";
import Line from "./Dashboard/scenes/line";
import Pie from "./Dashboard/scenes/pie";
import FAQ from "./Dashboard/scenes/faq";
import Geography from "./Dashboard/scenes/geography";
import Calendar from "./Dashboard/scenes/calendar/calendar";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/LoginScreen";
import Register from "./screens/SignupScreen";
import PrivateRoute from "./utils/ProtectedRoute";
import DashboardHome from "./Dashboard/Index";

function App () {

  return (
<>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Register />} />

              {/* <PrivateRoute> */}
              <Route path="/dashboard" element={
              <PrivateRoute>  <DashboardHome /> </PrivateRoute>} />
              <Route path="/team" element={<PrivateRoute><Team /></PrivateRoute>} />
              <Route path="/contacts" element={<PrivateRoute><Contacts /></PrivateRoute>} />
              <Route path="/invoices" element={<PrivateRoute><Invoices /></PrivateRoute>} />
              <Route path="/form" element={<PrivateRoute><Form /></PrivateRoute>} />
              <Route path="/bar" element={<PrivateRoute><Bar /></PrivateRoute>} />
              <Route path="/pie" element={<PrivateRoute><Pie /></PrivateRoute>} />
              <Route path="/line" element={<PrivateRoute><Line /></PrivateRoute>} />
              <Route path="/faq" element={<PrivateRoute><FAQ /></PrivateRoute>} />
              <Route path="/calendar" element={<PrivateRoute><Calendar /></PrivateRoute>} />
              <Route path="/geography" element={<PrivateRoute><Geography /></PrivateRoute>} />
              {/* </PrivateRoute> */}
              </Routes>
              </>

  );
}

export default App;