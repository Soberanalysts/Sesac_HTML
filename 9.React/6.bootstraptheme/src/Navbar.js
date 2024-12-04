import { useContext } from "react";
import {useTheme, ThemeContext} from "./ThemeContext";

const Navbar = () => {
    const { isDarkMode, toggleTheme } = useTheme(ThemeContext);

    return (
        // <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        // <div class="container-fluid">
        //     <span class="navbar-brand" href="#">마이CRM</span>
        <nav className={`navbar navbar-expand-sm ${isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
        <div className="container-fluid">
            <span className="navbar-brand" href="#">마이CRM</span>
            <button
                // class="navbar-toggler"
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                {/* <span class="navbar-toggler-icon"></span> */}
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <span class="nav-link active" aria-current="page" href="#">User</span> */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <span className="nav-link active" aria-current="page" href="#">User</span>    
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" href="#">Order</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" href="#">Order Item</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" href="#">Item</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" href="#">Store</span>
                    </li>
                </ul>
                <button className="btn btn-outline-secondary" onClick={toggleTheme}>
                    {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </button>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;