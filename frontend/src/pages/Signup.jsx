import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const Signup = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);

        // Navigate to the login page after successful sign-up
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign Up</h1>

                <form onSubmit={handleSubmit}>
                <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="email"
                            onChange={(e) => setName(e.target.value)}
                            id="name"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Sign Up
                    </button>
                    <p className="text-center py-3">
                        Already have an account? <a href="/signin" className="text-blue-500 underline">Login</a>
                    </p>
                    <p className="text-center py-3">
                     <a href="/">Home</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
