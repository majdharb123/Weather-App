import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

// 1. لازم تستقبل city و country هون بين القوسين
const Footer = ({ city, country }) => {
  return (
    <footer className="container footer text-end p-3">
      <button
        className="btn p-2"
        style={{
          background: "white",
          backdropFilter: "blur(20px)",
          width: "25%",
          borderRadius: "20px",
        }}
      >
        {/* 2. لازم تمرر city و country بقلب الـ state */}
        <Link 
          to="/details" 
          state={{ city: city, country: country }} 
          className="text-decoration-none text-black"
        >
          View Today Details -&gt;
        </Link>
      </button>
    </footer>
  );
};

export default Footer;