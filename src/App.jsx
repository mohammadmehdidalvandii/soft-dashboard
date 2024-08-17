import Navbar from "./components/modules/Navbar/Navbar";
import Sidebar from "./components/modules/Sidebar/Sidebar";

function App() {
  return (
    <div className="container">
      <div className="flex">
        <div className="wrapper_right">
          <Sidebar />
        </div>
        <div className="wrapper_left">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
