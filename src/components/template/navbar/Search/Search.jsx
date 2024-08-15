import { FaSearch } from 'react-icons/fa'
import './Search.css'

function Search() {
  return (
    <div className="search">
        <input type="text" className="search_input"  placeholder='جستجو ...'/>
        <span className="search_icon">
            <FaSearch/>
        </span>
    </div>
  )
}

export default Search