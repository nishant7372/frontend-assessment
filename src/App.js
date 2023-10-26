import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
