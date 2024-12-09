import React, { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth"; // Import getAuth
import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions
import { auth, db } from "../firebase-config"; // Import your Firebase configuration
import "../styles/Form.css";
import "../styles/Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const checkIsHustler = async () => {
        const auth = getAuth();
        const user = auth.currentUser;
    
        if (!user) {
            console.log("No user is signed in");
            return false; // Or handle unauthenticated users
        }
    
        try {
            // Get the user's document from Firestore
            const userDocRef = doc(db, "users", user.uid);
            const userDoc = await getDoc(userDocRef);
    
            if (userDoc.exists()) {
                const userData = userDoc.data();
                console.log("User isHustler status:", userData.isHustler);
                return userData.isHustler || false; // Return the isHustler value or false if not set
            } else {
                console.log("No such user document");
                return false;
            }
        } catch (error) {
            console.error("Error checking isHustler status:", error);
            return false;
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent the form from refreshing the page
        try {
            // Authenticate the user
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User logged in:", user.uid);

            // Redirect to home or dashboard
            if (await checkIsHustler()) {
                window.location.href = "/hustler-home";
            } else {
                window.location.href = "/student-home";
            }
        } catch (error) {
            console.error("Login failed:", error.message);
            alert("Login failed: " + error.message); // Show error message to the user
        }
    };

    return (
        <div className="forms-login">
            <form className="form" onSubmit={handleLogin}>
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;