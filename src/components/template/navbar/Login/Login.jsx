import { Link } from 'react-router-dom';
import './Login.css'
import { FaRegUserCircle } from "react-icons/fa";


function Login() {
  return (
    <Link to='#' className="login">
        <span className="login_icon">
            <FaRegUserCircle/>
        </span>
        <span className="login_text">ورود</span>
    </Link>
  )
}

export default Login