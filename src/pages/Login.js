import React, { useState } from "react";
import { signInAnonymously } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Login() {
    const [name, setName] = useState("");

    const handleAnonymousLogin = async () => {
        if (!name.trim()) {
            alert("Please enter a name");
            return;
        }

        try {
            // Log in anonymously
            const userCredential = await signInAnonymously(auth);
            const user = userCredential.user;

            console.log("Logged in anonymously:", user.uid);

            // Store the user's name in Firestore
            await setDoc(doc(db, "users", user.uid), {
                name: name,
                createdAt: new Date(),
            });

            console.log("Name stored in Firestore:", name);

            // Redirect to the home or dashboard page
            window.location.href = "/";
        } catch (error) {
            console.error("Anonymous login failed:", error.message);
            alert("Failed to log in: " + error.message);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleAnonymousLogin}>Login</button>
        </div>
    );
}

export default Login;