import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FaHome, FaMoneyBill, FaPen, FaProjectDiagram } from 'react-icons/fa';

function Sidebar() {
  return (
    <section className="sidebar">
        <div className="sidebar_wrapper">
            <div className="sidebar_logo">
                <img src="/images/logo.png" alt="logo" className="sidebar_logo_img" />
                <span className="sidebar_logo_text">Soft Dashboard</span>
            </div>
            <ul className="sidebar_items">
                <li className="sidebar_item">
                    <Link to='#' className='sidebar_link'>
                        <span className="sidebar_link_icon">
                            <FaHome/>
                        </span>
                        <span className="sidebar_link_text">پیشخوان</span>
                    </Link>
                </li>
                <li className="sidebar_item">
                    <Link to='#' className='sidebar_link'>
                        <span className="sidebar_link_icon">
                            <FaPen/>
                        </span>
                        <span className="sidebar_link_text">نویسندگان</span>
                    </Link>
                </li>
                <li className="sidebar_item">
                    <Link to='#' className='sidebar_link'>
                        <span className="sidebar_link_icon">
                            <FaProjectDiagram/>
                        </span>
                        <span className="sidebar_link_text">پروژه ها</span>
                    </Link>
                </li>
                <li className="sidebar_item">
                    <Link to='#' className='sidebar_link'>
                        <span className="sidebar_link_icon">
                            <FaMoneyBill/>
                        </span>
                        <span className="sidebar_link_text">پرداخت</span>
                    </Link>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Sidebar