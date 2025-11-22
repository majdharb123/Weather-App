import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light p-3 " style={{background: "transparent"}}>
      <div className="container-fluid d-flex  justify-content-center align-item-center">
        <form className="d-flex container" style={{width:"100%"}}>
          <input
            className="form-control me-2 p-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{borderRadius:"20px"}}
          />
          <button className="btn btn-outline-primary px-3" type="submit" style={{borderRadius:"20px"}}>
            <FaSearch />
          </button>
        </form>
      </div>
    </nav>
  );
};
export default Navbar;
