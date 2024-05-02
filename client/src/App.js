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
import Detail from "./detail";
import Login from "./login";
import Signup from "./signup";
import ListingForm from "./listing_form";
import Profile from "./profile";

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
          <Route path="/listing-form" element={<ListingForm />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/details/:id" element={<Detail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
