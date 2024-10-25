import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default App;
