import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/assets/Evalaura-logo-dark.svg";

export default function Component() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-base flex items-center justify-center p-4">
      <div className="w-full max-w-[440px] bg-neutral-white p-8 space-y-8">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <img className="w-16" src={Logo} alt="Evalaura" />
        </div>

        {/* Header */}
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an Account
          </h1>
        </div>

        {/* Form */}
        <form className="space-y-6 my-2">
          <div className="space-y-2">
            <Label htmlFor="name">NAME</Label>
            <Input id="name" placeholder="Dominik Doudny" className="h-10" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">EMAIL</Label>
            <Input
              id="email"
              type="email"
              placeholder="comvi-dashboard@email.com"
              className="h-10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">PASSWORD</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                className="h-10 pr-10"
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
          >
            Create an Account
          </Button>
        </form>

        {/* Google Sign Up */}
        <div className="space-y-4">
          <button className="w-full h-10 flex items-center justify-center gap-2 border rounded-md bg-[#FAFAFA] hover:bg-gray-100 transition-colors">
            {/* Google SVG */}
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Sign Up with Google
          </button>
        </div>

        {/* Sign In Link */}
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
