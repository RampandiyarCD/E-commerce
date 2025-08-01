import './Navigation.css'

const Navigation = () => {
  return (
    <div className="container-navigation">
        <img src="./logo.jpg" alt="Its a logo image"/>
        <nav>
            <div className="nav-menu">
                <ul className="items">
                    <li>home</li>
                    <li>About-us</li>
                    <li>products</li>
                    <li>contact-us</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navigation