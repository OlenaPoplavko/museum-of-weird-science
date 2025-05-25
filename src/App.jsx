import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import FactPage from "./pages/FactPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/fact/:id" element={<FactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
