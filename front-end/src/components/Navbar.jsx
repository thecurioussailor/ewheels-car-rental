import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png"
function Navbar () {

    return(
        <div>
            <nav>
                {/* Desktop view */}
                <div className="navbar">
                   <div className="navbar__img">
                        <Link to="/">
                            <img src={Logo}/>
                        </Link>
                   </div>
                   <ul className="navbar__links">
                        <li>
                          <Link className="home-link" to="/">
                            Home
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link className="about-link" to="/about">
                            About
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link className="models-link" to="/models">
                            Vehicle Models
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link className="testi-link" to="/testimonials">
                            Testimonials
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link className="team-link" to="/team">
                            Our Team
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link className="contact-link" to="/contact">
                            Contact
                          </Link>
                        </li>
                    </ul>
                    <div className="navbar__buttons">
                        <Link className="navbar__buttons__sign-in" to="/">
                          Sign In
                        </Link>
                        <Link className="navbar__buttons__register" to="/">
                          Register
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;