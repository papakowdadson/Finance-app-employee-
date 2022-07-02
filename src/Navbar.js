import { Link } from "react-router-dom";
const Navbar = () => {

    return(
        <nav className="Nav">
            <Link to="/">
                <h1 >
                    Home
                </h1>
            </Link>
            <div className="links">
                <Link to="Create" >create</Link>
                <Link to="/About/:id" >About</Link>
            </div>
        </nav>
    );

}
export default Navbar;