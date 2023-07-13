import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";

const App = () => {
    return (
        <Router>
            <div>
                <NavBar />

                <Routes>
                    <Route path="/about" element={<PrivacyPolicy />} />
                    <Route path="/" element={<Home />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
};

export default App;
