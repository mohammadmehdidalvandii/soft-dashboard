import { Link } from 'react-router-dom';
import './Message.css';
import { LuBellRing } from "react-icons/lu";
import { useState } from 'react';



function Message() {
    const [showMessage , setShowMessage] = useState(false);

    const handlerShowMessage = ()=>{
        setShowMessage(!showMessage)
    }

  
  return (
    <div className="message">
        <div className="message_icon" onClick={handlerShowMessage}>
            <LuBellRing/>
        </div>
        {showMessage && (
            <div className="message_items">
            <Link to='#' className='message_link'>
                 <img src="/images/user-1.jpg" alt="user" className="message_link_img" />
                 <div className="message_link_content">
                     <span className="message_link_name">ترویس اسکات </span>
                     <span className="message_link_time">14 دقیقه پیش</span>
                 </div>
            </Link>
            <Link to='#' className='message_link'>
                 <img src="/images/user-1.jpg" alt="user" className="message_link_img" />
                 <div className="message_link_content">
                     <span className="message_link_name">ترویس اسکات </span>
                     <span className="message_link_time">14 دقیقه پیش</span>
                 </div>
            </Link>
            <Link to='#' className='message_link'>
                 <img src="/images/user-1.jpg" alt="user" className="message_link_img" />
                 <div className="message_link_content">
                     <span className="message_link_name">ترویس اسکات </span>
                     <span className="message_link_time">14 دقیقه پیش</span>
                 </div>
            </Link>
         </div>
        )}
    </div>
  )
}

export default Message