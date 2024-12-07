import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import "../styles/Create.css";

function Create() {
    const [step, setStep] = useState(1); // Track the current step of the form
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState(""); // Date of Birth
    const [age, setAge] = useState("");
    const [selectedServices, setSelectedServices] = useState([]);
    const [budget, setBudget] = useState(""); // State for selected budget
    const [living, setLiving] = useState(""); // Step 4: Living situation

    const handleServiceSelection = (e) => {
        const { value, checked } = e.target;
    
        if (checked) {
            // Add the service to the list if under the limit
            if (selectedServices.length < 3) {
                setSelectedServices((prev) => [...prev, value]);
            } else {
                alert("You can select a maximum of 3 services.");
                e.target.checked = false; // Prevent selection
            }
        } else {
            // Remove the service if unchecked
            setSelectedServices((prev) => prev.filter((service) => service !== value));
        }
    };
    
    const handleNext = () => {
        if (step === 1 && (!name.trim() || !email.trim() || !password.trim())) {
            alert("Please fill in all fields for Step 1");
            return;
        }
        if (step === 2 && selectedServices.length !== 3) {
            alert("Please select exactly 3 services.");
            return;
        }
        if (step === 3 && !budget.trim()) { // Validate budget selection
            alert("Please select a budget for Step 3");
            return;
        }
        setStep(step + 1); // Move to the next step
    };

    const handleSignUp = async () => {
        if (!living.trim()) {
            alert("Please select where you live.");
            return;
        }
    
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
    
            console.log("Account created:", user.uid);
    
            await setDoc(doc(db, "users", user.uid), {
                name: name,
                email: email,
                dateOfBirth: dob,
                age: age,
                selectedServices: selectedServices,
                budget: budget,
                living: living, 
                createdAt: new Date(),
                isHustler: false
            });
    
            console.log("User data stored in Firestore");
            window.location.href = "/";
        } catch (error) {
            console.error("Sign up failed:", error.message);
            alert("Failed to sign up: " + error.message);
        }
    };

    return (
        <div className="forms">
            {step === 1 && (
                <div className="form" id="form-1">
                    <h1>Sign Up</h1>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="date"
                        placeholder="Enter your date of birth"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Enter your age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <button onClick={handleNext}>Next</button>
                </div>
            )}

            {step === 2 && (
                <div className="form" id="form-2">
                    <h1>Choose 3 Services</h1>
                    <div className="services">
                        <label>
                            <input
                                type="checkbox"
                                value="Haircut/Hairstyle"
                                onChange={handleServiceSelection}
                            />
                            Haircut/Hairstyle
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Nails"
                                onChange={handleServiceSelection}
                            />
                            Nails
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Piercing"
                                onChange={handleServiceSelection}
                            />
                            Piercing
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Alterations"
                                onChange={handleServiceSelection}
                            />
                            Alterations
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Buying Clothes"
                                onChange={handleServiceSelection}
                            />
                            Buying Clothes
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Makeup"
                                onChange={handleServiceSelection}
                            />
                            Makeup
                        </label>
                    </div>
                    <button onClick={handleNext}>Next</button>
                </div>
            )}

            {step === 3 && (
                <div className="form" id="form-3">
                    <h1>What is your Budget?</h1>
                    <div className="budget-options">
                        <label>
                            <input
                                type="radio"
                                name="budget"
                                value="less than $30"
                                onChange={(e) => setBudget(e.target.value)} // Update state with the selected budget
                            />
                            Less than $30
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="budget"
                                value="$30 - $60"
                                onChange={(e) => setBudget(e.target.value)}
                            />
                            $30 - $60
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="budget"
                                value="$60 - $100"
                                onChange={(e) => setBudget(e.target.value)}
                            />
                            $60 - $100
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="budget"
                                value="greater than $100"
                                onChange={(e) => setBudget(e.target.value)}
                            />
                            Greater than $100
                        </label>
                    </div>
                    <button onClick={handleNext}>Next</button>
                </div>
            )}

            {step === 4 && (
                <div className="form" id="form-4">
                    <h1>Where do you live?</h1>
                    <div className="living-options">
                        <label>
                            <input
                                type="radio"
                                name="living"
                                value="on campus"
                                onChange={(e) => setLiving(e.target.value)} // Update state with the selected option
                            />
                            On Campus
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="living"
                                value="off campus"
                                onChange={(e) => setLiving(e.target.value)}
                            />
                            Off Campus
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="living"
                                value="commuter"
                                onChange={(e) => setLiving(e.target.value)}
                            />
                            Commuter
                        </label>
                    </div>
                    <button onClick={handleNext}>Next</button>
                </div>
            )}

            {step === 5 && (
                <div className="form" id="form-5">
                    <h1>Terms and Conditions</h1>
                    <p>
                        By clicking "Sign Up", you agree that you can't sue us.
                    </p>
                    <button onClick={handleSignUp}>Sign Up</button>
                </div>
            )}
        </div>
    );
}

export default Create;