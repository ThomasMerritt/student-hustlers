import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Apply from "./pages/Apply";
import Navbar from "./components/Navbar";
import StudentHome from "./pages/StudentHome";
import HustlerPage from "./pages/HustlerPage";
import HustlerHome from "./pages/HustlerHome";
import Booking from "./pages/Booking";

function App() {
    return (
        <Router>
            <Routes>
                {/* Routes with MainLayout */}

                <Route
                    path="/"
                    element={
                        <MainLayout>
                            <Home />
                        </MainLayout>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <MainLayout>
                            <About />
                        </MainLayout>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <MainLayout>
                            <Login />
                        </MainLayout>
                    }
                />
                <Route
                    path="/Create"
                    element={
                        <MainLayout>
                            <Create />
                        </MainLayout>
                    }
                />
                <Route
                    path="/Apply"
                    element={
                        <MainLayout>
                            <Apply />
                        </MainLayout>
                    }
                />
                <Route
                    path="/student-home"
                    element={
                      <MainLayout>
                        <StudentHome />
                      </MainLayout>
                    }
                />
                <Route
                    path="/student-home"
                    element={
                      <MainLayout>
                        <StudentHome />
                      </MainLayout>
                    }
                />
                <Route
                    path="/hustler-page"
                    element={
                      <MainLayout>
                        <HustlerPage />
                      </MainLayout>
                    }
                />
                <Route
                    path="/hustler-home"
                    element={
                      <MainLayout>
                        <HustlerHome />
                      </MainLayout>
                    }
                />
                <Route
                    path="/booking"
                    element={
                      <MainLayout>
                        <Booking />
                      </MainLayout>
                    }
                />
                {/* Routes without MainLayout */}
            </Routes>
        </Router>
    );
}

export default App;