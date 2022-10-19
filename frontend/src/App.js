import Navbar from "./components/Navbar";
import Beranda from "./components/Beranda";
import ManajemenBuku from "./components/ManajemenBuku";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Beranda />} />
          <Route path="/manajemen-buku" element={<ManajemenBuku />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
