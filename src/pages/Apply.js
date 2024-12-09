import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import "../styles/Form.css";
import "../styles/Apply.css";

function Apply() {
    const [step, setStep] = useState(1); // Track the current step of the form
    const [name, setName] = useState("");
    const [school, setSchool] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState(""); // Date of Birth
    const [living, setLiving] = useState(""); // Step 4: Living situation

    const [shopName, setShopName] = useState("");
    const [shopDescription, setShopDescription] = useState("");
    const [priceRange, setPriceRange] = useState("");
    const [photo, setPhoto] = useState(null); // To store the uploaded file
    const [website, setWebsite] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [preferences, setPreferences] = useState([]); // Track selected preferences

    const handlePreferenceSelection = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            // Add the preference to the list if under the limit
            if (preferences.length < 3) {
                setPreferences((prev) => [...prev, value]);
            } else {
                alert("You can select a maximum of 3 preferences.");
                e.target.checked = false; // Prevent selection
            }
        } else {
            // Remove the preference if unchecked
            setPreferences((prev) => prev.filter((preference) => preference !== value));
        }
    };
    
    const handlePhotoUpload = (file) => {
        if (file) {
            setPhoto(file);
            console.log("Photo uploaded:", file.name);
        }
    };

    const handleNext = () => {
        if (step === 1 && (!name.trim() || !email.trim() || !password.trim())) {
            alert("Please fill in all fields for Step 1");
            return;
        }
        if (shopName.trim() && (!shopDescription.trim() || !priceRange.trim())) {
            alert("Please complete the required fields for your shop.");
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
    
            // Save user data in the 'users' collection
            await setDoc(doc(db, "users", user.uid), {
                name: name,
                school: school,
                email: email,
                dateOfBirth: dob,
                living: living,
                createdAt: new Date(),
                isHustler: !!shopName, // If the user created a shop
            });
    
            console.log("User data stored in Firestore");
    
            // Save shop data in the 'hustlers' collection if a shop is created
            if (shopName) {
                const shopData = {
                    userId: user.uid, // Link the user ID
                    shopName: shopName,
                    shopDescription: shopDescription || null,
                    priceRange: priceRange || null,
                    preferences: preferences.length > 0 ? preferences : null, // Directly use the preferences array
                    photo: photo ? photo.name : null, // Save the file name or upload URL
                    website: website || null,
                    phoneNumber: phoneNumber || null,
                    createdAt: new Date(),
                };
    
                await setDoc(doc(db, "hustlers", user.uid), shopData);
    
                console.log("Shop data stored in Firestore");
            }
    
            // Redirect to the home page
            window.location.href = "/hustler-home";
        } catch (error) {
            console.error("Sign up failed:", error.message);
            alert("Failed to sign up: " + error.message);
        }
    };

    return (
        <div className="forms-apply">
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
                     <select
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                        required
                    >
                        <option value="" disabled>
                            Select a school
                        </option>
                        <option value="University of California - Riverside">
                            University of California - Riverside
                        </option>
                    </select>
                    <button onClick={handleNext}>Next</button>
                </div>
            )}

            {step === 2 && (
                <div className="form" id="form-2">
                    <h1>Alert</h1>
                    <p>Please allow 5-10 business days for the verification
                        process before you start using student hustler.
                    </p>
                    <button onClick={handleNext}>I Accept</button>
                </div>
            )}

            {step === 3 && (
                <div className="form" id="form-3">
                    <h1>Set up your Shop *Optional</h1>

                    {/* Shop Name */}
                    <input
                        type="text"
                        placeholder="Shop Name"
                        value={shopName}
                        onChange={(e) => setShopName(e.target.value)}
                    />

                    {/* Shop Description */}
                    <textarea
                        placeholder="Shop Description"
                        value={shopDescription}
                        onChange={(e) => setShopDescription(e.target.value)}
                        rows="4"
                    ></textarea>

                    {/* Price Range */}
                    <select
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                    >
                        <option value="" disabled>
                            Select Price Range
                        </option>
                        <option value="less than $30">Less than $30</option>
                        <option value="$30 - $60">$30 - $60</option>
                        <option value="$60 - $100">$60 - $100</option>
                        <option value="greater than $100">Greater than $100</option>
                    </select>

                    {/* Preferences */}
                    <h2>Choose up to 3 Preferences</h2>
                    <div className="preferences">
                        <label>
                            <input
                                type="checkbox"
                                value="Handmade"
                                onChange={handlePreferenceSelection}
                            />
                            Handmade
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Art"
                                onChange={handlePreferenceSelection}
                            />
                            Art
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Beauty"
                                onChange={handlePreferenceSelection}
                            />
                            Beauty
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Crafts"
                                onChange={handlePreferenceSelection}
                            />
                            Crafts
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Fashion"
                                onChange={handlePreferenceSelection}
                            />
                            Fashion
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Technology"
                                onChange={handlePreferenceSelection}
                            />
                            Technology
                        </label>
                    </div>

                    {/* Other Shop Fields */}
                    <input
                        type="file"
                        onChange={(e) => handlePhotoUpload(e.target.files[0])}
                    />
                    <input
                        type="url"
                        placeholder="Website (Optional)"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number (Optional)"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />

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

export default Apply;