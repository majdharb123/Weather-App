import Welcome from "./pages/Welcome";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/details" element={<Details/>}/>
      </Routes>
    </Router>
  );
}

export default App;
