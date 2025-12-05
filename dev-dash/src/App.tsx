import "./App.css";
import Navbar from "./shared/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";

import OverView from "./pages/OverView.js";
import ClientsPage from "./pages/Client.js";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter >
      <Navbar />
        <Routes>
          <Route path="/" element={<OverView />} />
          <Route path="/client" element={<ClientsPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;