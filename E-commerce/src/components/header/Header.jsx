
import Searchbar from "../search/Searchbar";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          Anything's Stores
        </div>
        <div className="search">
          <Searchbar />
        </div>
        <div className="header-links">
          <ul className="links">
            <li className="link">Offers</li>
            <li className="link">Products</li>
            <li className="link">About</li>
            <li className="link">FAQ's</li>
            <li className="link">Helps</li>
            <li className="link">Reviews</li>
          </ul>
        </div>
      </div>
    </>
  )
}


export default Header;

