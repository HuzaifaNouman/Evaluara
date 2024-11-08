import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  TrendingUp,
  Star,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import { Link } from "react-router-dom";

import Logo from "@/assets/Evalaura-logo-light.svg";
import hamburger from "@/assets/hamburger.svg";
import { useNavbarTitle } from "@/stores/navbar-store";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isManualExpand, setIsManualExpand] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { setTitle } = useNavbarTitle();

  const menuItems = [
    {
      title: "Overview",
      icon: LayoutDashboard,
      path: "/dashboard/overview",
    },
    {
      title: "Analytics",
      icon: Package,
      path: "/dashboard/analytics",
    },
    {
      title: "Reviews",
      icon: ShoppingCart,
      path: "/dashboard/reviews",
    },
    {
      title: "Feedback Management",
      icon: TrendingUp,
      path: "/dashboard/feedback",
    },
    {
      title: "AI",
      icon: Star,
      path: "/dashboard/ai",
    },
  ];

  const otherItems = [
    {
      title: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
    {
      title: "Logout",
      icon: LogOut,
      path: "/dashboard/logout",
    },
  ];

  // Handler for hover state
  const handleMouseEnter = () => {
    if (!isManualExpand) {
      setIsExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isManualExpand) {
      setIsExpanded(false);
    }
  };

  // Handler for clicking the hamburger menu
  const toggleManualExpand = () => {
    setIsManualExpand((prev) => !prev);
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <div className="sticky top-3 left-5 flex items-start justify-between flex-row max-[768px]:hidden">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "bg-[#1E2F65] m-3 h-[95vh] text-white transition-all duration-200 ease-in-out rounded-xl",
            isExpanded ? "w-64 rounded-xl" : "w-16"
          )}
        >
          {/* Logo Section */}
          <div className="flex h-16 items-center justify-center p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-16 items-center justify-center">
                <img src={Logo} alt="Evalaura" />
              </div>
            </div>
          </div>

          {/* Main Menu */}
          <div className="px-2 py-4">
            <nav className="space-y-2">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <Link to={item.path}>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start text-neutral-white hover:bg-white/10 hover:text-secondary",
                        !isExpanded && "px-4"
                      )}
                      onClick={() => setTitle(item.title)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span
                        className={cn(
                          "ml-2 transition-all duration-300 font-medium text-[15px]",
                          isExpanded ? "opacity-100" : "opacity-0 w-0"
                        )}
                      >
                        {item.title}
                      </span>
                    </Button>
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Divider */}
          <div className="px-2">
            <div className="my-4 h-px bg-white/10" />
            <div
              className={cn(
                "mb-2 px-4 text-xs uppercase tracking-wider text-white/40 transition-all duration-300",
                isExpanded ? "opacity-100" : "opacity-0"
              )}
            >
              Other
            </div>
          </div>

          {/* Other Menu */}
          <div className="px-2">
            <nav className="space-y-2">
              {otherItems.map((item, index) => (
                <Link to={item.path} key={index}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-white hover:bg-white/10 hover:text-secondary",
                      !isExpanded && "px-4"
                    )}
                    onClick={() => setTitle(item.title)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span
                      className={cn(
                        "ml-2 transition-all duration-300",
                        isExpanded ? "opacity-100" : "opacity-0 w-0"
                      )}
                    >
                      {item.title}
                    </span>
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <img
          onClick={toggleManualExpand}
          className="mt-11 ml-3 w-5 cursor-pointer"
          aria-label="Toggle Sidebar"
          src={hamburger}
          alt="hamburger menu"
        />
      </div>
      {/* Mobile Sidebar */}
      <div className="md:hidden absolute top-7 right-5">
        <Button
          variant="ghost"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <img src={hamburger} alt="Menu" />
        </Button>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-[#1E2F65] p-4">
            <Button
              variant="ghost"
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <LogOut className="h-6 w-6" />
            </Button>
            <div className="p-4 h-16 flex items-center justify-center">
              <span className="text-xl font-bold text-white">Evaluara</span>
            </div>
            <nav className="px-2 py-4">
              {menuItems.map((item, index) => (
                <Link key={index} to={item.path}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-white hover:bg-white/10"
                    onClick={() => {
                      setTitle(item.title);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="ml-2">{item.title}</span>
                  </Button>
                </Link>
              ))}
              {otherItems.map((item, index) => (
                <Link key={index} to={item.path}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-white hover:bg-white/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="ml-2">{item.title}</span>
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
