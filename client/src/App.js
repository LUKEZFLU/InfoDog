import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AboutUs from "./aboutus";
import Home from "./home";
import Header from "./header";
import Footer from "./footer";
import ListPlace from "./listplace";

function App() {
  return (
    <div className="App">
      <div className="font-loader">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/list-your-place" element={<ListPlace />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
