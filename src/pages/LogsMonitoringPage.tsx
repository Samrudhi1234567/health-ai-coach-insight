
import { useState, useEffect } from "react";
import CoachSelector from "@/components/dashboard/CoachSelector";
import LogsMonitoring from "@/components/dashboard/LogsMonitoring";
import { LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LogsMonitoringPage = () => {
  const [selectedCoachId, setSelectedCoachId] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Logs Monitoring - AI Coach Dashboard";
  }, []);

  const handleCoachSelect = (coachId: number) => {
    setSelectedCoachId(coachId);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 flex items-center justify-between">
            <div className="flex items-center">
              <LayoutDashboard className="h-8 w-8 text-health-primary" />
              <h1 className="ml-2 text-xl font-bold text-gray-900">Logs Monitoring</h1>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" asChild>
                <Link to="/dashboard">Back to Dashboard</Link>
              </Button>
              <div className="text-sm text-gray-500">
                Last updated: May 21, 2025
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* Coach Selector */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="max-w-md">
            <CoachSelector onCoachSelect={handleCoachSelect} />
          </div>
        </div>
        
        {/* Logs Monitoring */}
        <div className="mb-6">
          <LogsMonitoring coachId={selectedCoachId} />
        </div>
      </main>
    </div>
  );
};

export default LogsMonitoringPage;

