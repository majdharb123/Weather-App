import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaSearch } from "react-icons/fa";
import { useState } from "react"; // 1. استوردنا useState

const Navbar = ({ onSearch }) => {
  // 2. عملنا متغير ليحفظ النص المكتوب
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim() !== "") {
      onSearch(searchText); // منبعت النص المحفوظ بالـ State
      setSearchText("");    // 3. 🔥 هون السر: منفرغ النص بعد الكبس
    }
  };

  return (
    <nav className="navbar navbar-light p-3 " style={{ background: "transparent" }}>
      <div className="container-fluid d-flex justify-content-center align-item-center">
        <form
          className="d-flex container"
          style={{ width: "100%" }}
          onSubmit={handleSubmit} // ربطنا دالة الـ Submit الجديدة
        >
          <input
            className="form-control me-2 p-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ borderRadius: "20px" }}
            // 4. ربطنا الـ input بالمتغير عشان نقدر نتحكم فيه
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="btn btn-outline-primary px-3"
            type="submit"
            style={{ borderRadius: "20px" }}
          >
            <FaSearch />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;