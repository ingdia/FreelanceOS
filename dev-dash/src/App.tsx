import "./App.css";
import Navbar from "./shared/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { AppProvider } from "./context/AppContext";   

import OverView from "./pages/OverView.js";
import ClientsPage from "./pages/Client.js";
import ProjectsPage from "./pages/Project.js";

function App() {
  return (
    <AppProvider>                     
      <ThemeProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<OverView />} />
            <Route path="/client" element={<ClientsPage />} />
            <Route path="/project" element={<ProjectsPage />} />
          </Routes>

        </BrowserRouter>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
