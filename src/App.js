import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import SideComp from "./scenes/global/SideComp";
import DashIndex from "./scenes/dashboard/DashIndex.jsx";
import TeamIndex from "./scenes/team/TeamIndex.jsx";
// import InvoiceIndex from "./scenes/invoices/InvoiceIndex.jsx";
// import ContactIndex from "./scenes/contacts/ContactIndex.jsx";
import BarIndex from "./scenes/bar/BarIndex.jsx";
import FormIndex from "./scenes/form/FormIndex.jsx";
import LineIndex from "./scenes/line/LineIndex.jsx";
import PieIndex from "./scenes/pie/PieIndex.jsx";
import FaqIndex from "./scenes/faq/FaqIndex.jsx";
import GeoIndex from "./scenes/geography/GeoIndex.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import CalendarIndex from "./scenes/calendar/CalendarIndex.jsx";
import SignUp from "./scenes/LogSign/SignUp.jsx";
import ForgetPass from "./scenes/LogSign/ForgetPass.jsx";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [tasks, setTasks] = useState([
    {
      registrarId: '001',
      name: 'John Doe',
      age: '30',
      phoneNumber: '123-456-7890',
      email: 'john.doe@example.com',
      accessLevel: 'admin',
      city: 'New York',
    },
    {
      registrarId: '002',
      name: 'Jane Smith',
      age: '25',
      phoneNumber: '987-654-3210',
      email: 'jane.smith@example.com',
      accessLevel: 'user',
      city: 'San Francisco',
    },
    {
      registrarId: '003',
      name: 'Bob Johnson',
      age: '35',
      phoneNumber: '555-555-5555',
      email: 'bob.johnson@example.com',
      accessLevel: 'manager',
      city: 'Los Angeles',
    },
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  // New code for auth
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleSignUp = () => {
    // For Add authentication 
    setIsAuthenticated(true);
  };

  const handleSignIn = () => {
    // For Add authentication 
    setIsAuthenticated(true);
  };
  // ````````````
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* <SideComp isSidebar={isSidebar} /> */}
          {isAuthenticated && <SideComp isSidebar={isSidebar} />}
          <main className="content">
            {/* <Topbar setIsSidebar={setIsSidebar} onSearch={handleSearch} /> */}
            {isAuthenticated && <Topbar setIsSidebar={setIsSidebar} onSearch={handleSearch} onLogout={handleLogout} />}
            <Routes>
              <Route path="/home" element={<DashIndex />} />
              <Route path="/team" element={<TeamIndex tasks={tasks} searchQuery={searchQuery} />} />
              {/* <Route path="/contacts" element={<ContactIndex />} /> */}
              {/* <Route path="/invoices" element={<InvoiceIndex />} /> */}
              <Route path="/form" element={<FormIndex onAddTask={(newTask) => setTasks([...tasks, newTask])} />} />
              <Route path="/bar" element={<BarIndex />} />
              <Route path="/pie" element={<PieIndex />} />
              <Route path="/line" element={<LineIndex />} />
              <Route path="/faq" element={<FaqIndex />} />
              <Route path="/calendar" element={<CalendarIndex />} />
              <Route path="/geography" element={<GeoIndex />} />
              <Route path="/resetpass" element={<ForgetPass />}></Route>
              {/* <Route path="/signup" element={<SignUp />}></Route> */}
              <Route path="/" element={<SignUp onSignUp={handleSignUp} onSignIn={handleSignIn} />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;