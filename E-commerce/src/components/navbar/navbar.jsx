import './navbar.css'
import searchlogo from "../../assets/search-26242.png"

const Navbar = () => {
  return (
    <div>
      <nav>
    <h2>STORE</h2>
    <div className="nav-bar">
        <input className="search-bar" type='text' placeholder='search here..?'></input>
        <img src={searchlogo} alt='logo' className="searchlogo" />
        <ul>
            <li><a href="#" className="nav-item">Home</a></li>
            <li><a href="#" className="nav-item">Info</a></li>
            <li><a href="#" className="nav-item">about-us</a></li>
            <li><a href="#" className="nav-item">Help</a></li>
        </ul>
    </div>
</nav>
    </div>
  )
}

export default Navbar
