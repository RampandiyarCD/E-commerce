
import ViewCart from "../AddToCart/ViewCart";
import Searchbar from "../search/Searchbar";
import "./header.css";

export default function Header({props}) {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          Anything's Stores
        </div>
        <div className="search">
          <Searchbar props={props}/>
        </div>
        <div className="header-links">
          <ul className="links">
            <li className="link">Offers</li>
            <li className="link">Products</li>
            <li className="link">About</li>
            <li className="link">FAQ's</li>
            <li className="link">Helps</li>
            <li className="link">Reviews</li>
            <ViewCart props={props}/>
          </ul>
        </div>
      </div>
    </>
  )
}



