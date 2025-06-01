import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import FactPage from "./pages/FactPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/fact/:id" element={<FactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
