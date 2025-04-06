import Navbar from "./pages/navbar/Navbar";
import Sidebar from "./pages/sidebar/sidebar";
import Homepage from "./pages/scroll/scrollpart";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Homepage />
      </div>
    </>
  );
}

export default App;
