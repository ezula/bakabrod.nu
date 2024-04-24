import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <div className="container max-w-5xl mx-auto p-4">
      <Navbar />
    </div>
    
    <div className="flex flex-col min-h-screen">
      <Outlet />
    </div>

    <Footer />
    </>
  );
}

export default App;
