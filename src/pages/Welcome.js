import backgrd from "../assets/images/backgrd.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();

  const handleSelectCountry = (country) => {
    navigate("/home", { state: { country } });
  };
  return (
    <div
      style={{
        backgroundImage: `url(${backgrd})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
      className="d-flex justify-content-center align-item-center flex-column text-center"
    >
      <div style={{ color: "#001f3f", fontWeight: "bold" }} className="mb-3">
        <h1 style={{ fontSize: "5rem" }}>Welcome To Weather App</h1>
        <h3>Enter a Country name to get started</h3>
      </div>
      <div className="dropdown">
        <button
          className="btn  dropdown-toggle text-white p-2"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            backgroundColor: "#001f3f",
            width: "30%",
            fontSize: "1.2rem",
            borderRadius:"20px",
          }}
        >
          Choose One
        </button>
        <ul
          className="dropdown-menu "
          aria-labelledby="dropdownMenuButton1"
          style={{ width: "30%" }}
        >
          <li>
            <button
              className="dropdown-item"
              style={{ color: "#001f3f" }}
              to="/home"
              onClick={() => handleSelectCountry("Lebanon")}
            >
              Lebanon
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              style={{ color: "#001f3f" }}
              to="/home"
              onClick={() => handleSelectCountry("Syria")}
            >
              Syria
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              style={{ color: "#001f3f" }}
              to="/home"
              onClick={() => handleSelectCountry("Palestine")}
            >
              Palestine
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              style={{ color: "#001f3f" }}
              to="/home"
              onClick={() => handleSelectCountry("Turkiye")}
            >
              Turkiye
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Welcome;
