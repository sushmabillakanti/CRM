import { Link } from "react-router-dom";
 
const MenuBar = () => {
 
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="home" >
                    <img height="50px" title="Home"
                        src="https://cdn2.iconfinder.com/data/icons/business-methodologies-flat/60/CRM-corporate-customer-relationship-management-512.png"
                        alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="learning">Learning</Link>
                        </li>
 
                        <li className="nav-item">
                            <Link className="nav-link active" to="login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="logout">Logout</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search a product..." />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default MenuBar;