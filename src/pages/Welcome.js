import backgrd from "../assets/images/backgrd.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleSelectCountry = (countryCode) => {
    navigate("/home", { state: { country: countryCode } });
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
      className="d-flex justify-content-center align-items-center flex-column text-center"
    >
      <div style={{ color: "#001f3f", fontWeight: "bold" }} className="mb-4">
        <h1 style={{ fontSize: "4.5rem" }}>Welcome To Weather App</h1>
        <h3>Choose a country to get started</h3>
      </div>

      <div className="dropdown">
        <button
          className="btn dropdown-toggle text-white p-3"
          type="button"
          data-bs-toggle="dropdown"
          style={{
            backgroundColor: "#001f3f",
            width: "300px",
            fontSize: "1.2rem",
            borderRadius: "20px",
          }}
        >
          Choose Country
        </button>

        <ul className="dropdown-menu" style={{ width: "300px" }}>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSelectCountry("LB")}
            >
              Lebanon
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSelectCountry("SY")}
            >
              Syria
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSelectCountry("PS")}
            >
              Palestine
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSelectCountry("TR")}
            >
              Turkiye
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSelectCountry("IT")}
            >
              Italy
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSelectCountry("FR")}
            >
              France
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSelectCountry("DE")}
            >
              Germany
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSelectCountry("US")}
            >
              United States
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSelectCountry("AU")}
            >
              Australia
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSelectCountry("RU")}
            >
              Russia
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Welcome;
