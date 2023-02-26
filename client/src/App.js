import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Dashboard/scenes/global/Topbar";
import Sidebar from "./Dashboard/scenes/global/Sidebar";
import Dashboard from "./Dashboard/scenes/dashboard";
import Team from "./Dashboard/scenes/team";
import Invoices from "./Dashboard/scenes/invoices";
import Contacts from "./Dashboard/scenes/contacts";
import Bar from "./Dashboard/scenes/bar";
import Form from "./Dashboard/scenes/form";
import Line from "./Dashboard/scenes/line";
import Pie from "./Dashboard/scenes/pie";
import FAQ from "./Dashboard/scenes/faq";
import Geography from "./Dashboard/scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./Dashboard/scenes/calendar/calendar";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/LoginScreen";
import Register from "./screens/SignupScreen";
import PrivateRoute from "./utils/ProtectedRoute";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Register />} />

              <PrivateRoute>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              </PrivateRoute>
              </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;