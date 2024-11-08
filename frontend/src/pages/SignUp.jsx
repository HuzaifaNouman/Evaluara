import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/assets/Evalaura-logo-dark.svg";
import axios from "axios";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Password: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate for redirection

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
    console.log("ID Token:", idToken); // For debugging

    if (!idToken) {
      setError("Google Sign-Up failed. Token is missing.");
      return;
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await axios.post(`${apiUrl}/api/Auth/google`, {
        Token: idToken,
      });

      // Check response message to differentiate between sign-in and sign-up
      const { message } = res.data;
      if (message.includes("signed in")) {
        setSuccess("Welcome back! You are signed in.");
        navigate("/dashboard/overview"); // Redirect to dashboard if signed in
      } else {
        setSuccess("Google Sign-Up successful!");
      }
      setError(null);
    } catch (err) {
      setSuccess(null);
      setError("Google Sign-Up failed. Please try again.");
      console.error("Google Sign-Up error:", err);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null); // Reset previous errors
    setSuccess(null); // Reset previous success messages

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${apiUrl}/api/Auth/signup`, formData);
      setSuccess("Account created successfully!");
    } catch (err) {
      if (err.response && err.response.status === 409) {
        setError("An account with this email already exists.");
      } else {
        setError("Failed to create account. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base flex items-center justify-center p-4">
      <div className="w-full max-w-[440px] bg-neutral-white p-8 space-y-8 rounded-lg">
        <div className="flex justify-center items-center">
          <img className="w-16" src={Logo} alt="Evalaura" />
        </div>

        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an Account
          </h1>
        </div>

        <form className="space-y-6 my-2" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="FullName">FULL NAME</Label>
            <Input
              id="FullName"
              placeholder="Dominik Doudny"
              className="h-10 rounded-lg"
              value={formData.FullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="Email">EMAIL</Label>
            <Input
              id="Email"
              type="email"
              placeholder="comvi-dashboard@email.com"
              className="h-10"
              value={formData.Email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="Password">PASSWORD</Label>
            <div className="relative">
              <Input
                id="Password"
                type={showPassword ? "text" : "password"}
                className="h-10 pr-10"
                value={formData.Password}
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
            {isLoading ? "Creating Account..." : "Create an Account"}
          </Button>
        </form>

        {success && <div className="text-green-500 text-center">{success}</div>}
        {error && <div className="text-red-500 text-center">{error}</div>}

        {/* Google Sign-In button container */}
        <div className="space-y-4">
          <div className="w-full h-10 rounded-xl" id="google-signin-button" />
        </div>

        <div className="text-center text-sm">
          Already have an Account?
          <Link to="/signin" className="text-secondary hover:underline">
            &nbsp;Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
