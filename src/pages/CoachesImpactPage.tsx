
import { useState, useEffect } from "react";
import CoachesImpact from "@/components/dashboard/CoachesImpact";
import { Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CoachesImpactPage = () => {
  useEffect(() => {
    document.title = "Coaches Impact - AI Coach Dashboard";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 flex items-center justify-between">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-health-primary" />
              <h1 className="ml-2 text-xl font-bold text-gray-900">Coaches Impact</h1>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" asChild>
                <Link to="/dashboard">Back to Dashboard</Link>
              </Button>
              <div className="text-sm text-gray-500">
                Last updated: May 29, 2025
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* Coaches Impact */}
        <div className="mb-6">
          <CoachesImpact />
        </div>
      </main>
    </div>
  );
};

export default CoachesImpactPage;
