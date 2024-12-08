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

function App() {
    return (
        <Router>
            <Routes>
                {/* Routes with MainLayout */}

                <Route
                    path="/"
                    element={
                        <MainLayout>
                            <Navbar />
                            <Home />
                        </MainLayout>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <MainLayout>
                            <Navbar />
                            <About />
                        </MainLayout>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <MainLayout>
                            <Navbar />
                            <Login />
                        </MainLayout>
                    }
                />
                <Route
                    path="/Create"
                    element={
                        <MainLayout>
                            <Navbar />
                            <Create />
                        </MainLayout>
                    }
                />
                <Route
                    path="/Apply"
                    element={
                        <MainLayout>
                            <Navbar />
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
                {/* Routes without MainLayout */}
            </Routes>
        </Router>
    );
}

export default App;