import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/assets/Evalaura-logo-dark.svg";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // Initialize Google Sign-In button
  useEffect(() => {
    const initializeGoogleSignIn = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          callback: handleGoogleCallback,
        });
        window.google.accounts.id.renderButton(
          document.getElementById("google-signin-button"),
          {
            theme: "outline",
            size: "large",
            text: "continue_with",
            width: "100%",
          }
        );
      }
    };

    initializeGoogleSignIn();
  }, []);

  // Callback function for Google Sign-In
  const handleGoogleCallback = async (response) => {
    const idToken = response.credential;

    if (!idToken) {
      setError("Google Sign-In failed. Token is missing.");
      return;
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await axios.post(`${apiUrl}/api/Auth/google`, {
        Token: idToken,
      });

      const { token, message } = res.data;
      if (token) {
        localStorage.setItem("authToken", token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        navigate("/dashboard/overview"); // Redirect to the dashboard
      }
    } catch (err) {
      setError("Google Sign-In failed. Please try again.");
      console.error("Google Sign-In error:", err);
    }
  };

  // Handle input change for form fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${apiUrl}/api/auth/signin`, formData);

      const token = response.data.token;
      if (token) {
        localStorage.setItem("authToken", token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        navigate("/dashboard/overview");
      }
    } catch (err) {
      setError("Invalid email or password");
      console.error("Sign-in error:", err.response || err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-baselight flex items-center justify-center p-4">
      <div className="w-full max-w-[440px] bg-neutral-white p-8 rounded-lg space-y-8">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <img className="w-16" src={Logo} alt="Evalaura" />
        </div>

        {/* Header */}
        <div className="space-y-2 text-center text-neutral-deepBlack">
          <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
          <p className="text-sm font-light">Welcome Back!</p>
        </div>

        {/* Form */}
        <form
          className="space-y-6 my-2 text-neutral-black"
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <Label htmlFor="email">EMAIL</Label>
            <Input
              id="email"
              type="email"
              placeholder="comvi-dashboard@email.com"
              className="h-10"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">PASSWORD</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                className="h-10 pr-10"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-10 text-neutral-white bg-accent hover:bg-accent/90 my-0"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
          {/* Display error message */}
          {error && <div className="text-red-500 text-center">{error}</div>}
        </form>

        {/* Google Sign In */}
        <div className="space-y-4">
          <div id="google-signin-button" className="w-full"></div>
        </div>

        {/* Sign In Link */}
        <div className="text-center text-sm text-neutral-black">
          Don't have an Account?
          <Link to="/signup" className="text-secondary hover:underline">
            &nbsp;Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
