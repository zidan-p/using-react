import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./route/home";
import Siswa from "./route/siswa";
import Petugas from "./route/petugas";
import Spp from "./route/spp";
import Kelas from "./route/kelas";

function App() {
  return (
    <BrowserRouter>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><Link to="/" className="ling">Home</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><Link to="/spp" className="ling">Spp</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><Link to="/kelas" className="ling">Kelas</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><Link to="/siswa" className="ling">Siswa</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><Link to="/petugas" className="ling">Petugas</Link></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/spp" element={<Spp />} />
          <Route path="/kelas" element={<Kelas />} />
          <Route path="/siswa" element={<Siswa />} />
          <Route path="/petugas" element={<Petugas />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
