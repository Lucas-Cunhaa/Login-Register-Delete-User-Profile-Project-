import { Link } from "react-router-dom" 

// eslint-disable-next-line react/prop-types
const NavBar = ({ children, link }) => {
    return (
        <nav>
            <Link className="navBar" to={link}>{children}</Link>
        </nav>
    )
}


export default NavBar