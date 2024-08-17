import Login from '../../template/navbar/Login/Login'
import Message from '../../template/navbar/Message/Message'
import Search from '../../template/navbar/Search/Search'
import Toolbar from '../../template/navbar/Toolbar/Toolbar'
import './Navbar.css'

function Navbar() {
  return (
    <section className="navbar">
        <div className="navbar_wrapper">
            <div className="navbar_right">
                <Message/>
                <Login/>
                <Search/>
            </div>
            <div className="navbar_left">
              <Toolbar/>
            </div>
        </div>
    </section>
  )
}

export default Navbar