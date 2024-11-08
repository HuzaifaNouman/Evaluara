import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./pages/DashboardLayout"; // Import here only
import {
  Overview,
  Analytics,
  Reviews,
  FeedbackManagement,
  AI,
  Settings,
} from "@/dashboard/index";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { ThemeProvider } from "@/components/theme-provider";
import PrivateRoute from "@/components/PrivateRoute"; // Import PrivateRoute

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />

      {/* Protected Dashboard Routes with ThemeProvider */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
              <DashboardLayout />
            </ThemeProvider>
          </PrivateRoute>
        }
      >
        <Route path="overview" element={<Overview />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="feedback" element={<FeedbackManagement />} />
        <Route path="ai" element={<AI />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* 404 - Not Found Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
