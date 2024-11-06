import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyFooter from "./components/MyFooter";

const App = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      <main className="overflow-hidden min-h-screen ">
        <Outlet />
      </main>
      <MyFooter />
    </div>
  );
};

export default App;
