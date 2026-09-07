import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Navbar />
      <div className="page-wrap">
        <Outlet />
      </div>
      <footer className="site-footer">
        <span>
          DH<span className="accent">.</span>G
        </span>
        <span>Building useful things for the web and beyond.</span>
        <span>© 2026 Dhruv Goradia</span>
      </footer>
    </main>
  );
}

export default App;
