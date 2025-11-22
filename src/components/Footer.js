import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container footer text-end p-3">
      <button
        className="btn p-2"
        style={{
          background: "white",
          backdropFilter: "blur(20px)",
          width:"25%",
           borderRadius: "20px",
        }}
      >
        <Link to="/details" className="text-decoration-none text-black">
          View Today Details ->
        </Link>
      </button>
    </footer>
  );
};
export default Footer;
