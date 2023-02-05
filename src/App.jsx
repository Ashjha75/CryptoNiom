import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Coins from "./components/Coins.jsx";
import Exchanges from "./components/Exchanges.jsx";
import CoinsDetails from "./components/CoinsDetails.jsx";
// import ErrorComponent from "./components/ErrorComponent.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coins/:id" element={<CoinsDetails />} />
        {/* <Route path="/coindetail" element={<ErrorComponent />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
