import './Toolbar.css';
import { IoHome } from "react-icons/io5";


function Toolbar() {
  return (
    <div className="toolbar">
        <div className="toolbar_icon_text">
            <span className="toolbar_text">Dashboard</span>
            /
            <span className="toolbar_icon">
                <IoHome/>
            </span>
        </div>
        <h4 className="toolbar_title">Dashboard</h4>
    </div>
  )
}

export default Toolbar