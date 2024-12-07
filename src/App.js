import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Apply from "./pages/Apply";

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
                {/* Routes without MainLayout */}
            </Routes>
        </Router>
    );
}

export default App;