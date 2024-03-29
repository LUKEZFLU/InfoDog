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
import Explore from "./explore";
import ListingForm from "./listing_form";

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
          <Route path="/explore" element={<Explore />} />
          <Route path="/listing-form" element={<ListingForm />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
