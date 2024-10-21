import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <nav>Navbar</nav>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default App;
