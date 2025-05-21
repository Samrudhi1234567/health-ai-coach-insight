
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-md px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="inline-flex items-center justify-center p-4 bg-indigo-100 rounded-full mb-4">
            <LayoutDashboard size={32} className="text-health-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-3 text-gray-900">AI Health Coach Dashboard</h1>
          <p className="text-gray-600 mb-6">
            Monitor user health metrics, engagement data, and provide personalized coaching insights through our comprehensive dashboard.
          </p>
          <Link to="/dashboard">
            <Button className="bg-health-primary hover:bg-indigo-700 w-full">
              Enter Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
