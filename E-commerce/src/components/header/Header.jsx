import './Header.css';
function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Anything's Store</h1>
        <nav className="nav-menu">
          <a href="/" className="nav-link">Products</a>
          <a href="/" className="nav-link">Solutions</a>
          <a href="/" className="nav-link">Pricing</a>
          <a href="/" className="nav-link">Resources</a>
          <button className="contact-btn">Contact Sales</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;