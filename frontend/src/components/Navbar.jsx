import React, { useState } from "react";
import { ArrowLeft, Search, Bell, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { useNavbarTitle } from "@/stores/navbar-store";
import { useStore } from "@/stores/navbar-hamburger";
import hamburger from "@/assets/hamburger.svg";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isSearchVisible, setSearchVisible] = useState(false);
  const { title } = useNavbarTitle();
  const { toggleManualExpand, setIsMobileMenuOpen } = useStore();

  return (
    <nav className="w-full text-neutral-deepBlack dark:text-dark-text">
      <div className="px-1">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="mr-2 md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <img src={hamburger} alt="Menu" className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              className="mr-2 hidden md:block"
              onClick={toggleManualExpand}
            >
              <img
                src={hamburger}
                alt="Toggle Sidebar"
                className="h-5 w-5 ml-2"
              />
            </Button>
            <span className="font-bold text-[32px]">{title}</span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Input
              type="text"
              placeholder="Search..."
              className={`transition-all duration-150 ${
                isSearchVisible ? "w-64" : "w-0 opacity-0"
              }`}
              autoFocus={true}
            />
            <Button
              variant="ghost"
              className="relative"
              onClick={() => setSearchVisible((prev) => !prev)}
            >
              <Search className="h-8 w-6" />
            </Button>

            <Button variant="ghost" className="relative">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </Button>
            <Button
              variant="ghost"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png" // replace the url with the user img later (data from backend)
                      alt="User"
                    />
                    <AvatarFallback>GK</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="text-sm font-semibold">Gladys Kanyinda</div>
                    <div className="text-xs text-gray-500 font-light">
                      Admin
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Input
            type="text"
            placeholder="Search..."
            className="w-full mb-2"
            startAdornment={<Search className="h-4 w-4 text-gray-400" />}
          />
          <Button variant="ghost" className="w-full justify-start">
            <Bell className="h-6 w-6 mr-2" />
            Notifications
          </Button>
          <Button
            variant="ghost"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-6 w-6" />
            ) : (
              <Moon className="h-6 w-6" />
            )}
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Avatar className="h-6 w-6 mr-2">
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>GK</AvatarFallback>
            </Avatar>
            Profile
          </Button>
        </div>
      </div>
    </nav>
  );
}
