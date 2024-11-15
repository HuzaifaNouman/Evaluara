import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex bg-baselight items-center justify-center min-h-screen flex-col">
      <h1 className="text-2xl font-semibold text-primary my-5">
        404 | Page not found.
      </h1>
      <Link to="/dashboard/overview">
        <Button className="w-full h-10 text-neutral-white bg-secondary hover:bg-accent/90">
          Go to Overview
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
