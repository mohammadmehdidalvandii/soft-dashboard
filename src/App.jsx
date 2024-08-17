import Navbar from "./components/modules/Navbar/Navbar"

function App() {
  return (
    <div className="container">
         <div className="flex">
        <div className="wrapper_right">this is right</div>
        <div className="wrapper_left">
            <Navbar/>
        </div>
    </div>
    </div>
  )
}

export default App
