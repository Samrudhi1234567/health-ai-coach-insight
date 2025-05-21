
import { useState, useEffect } from "react";
import CoachSelector from "@/components/dashboard/CoachSelector";
import UserSelector from "@/components/dashboard/UserSelector";
import PersonalInsights from "@/components/dashboard/PersonalInsights";
import ActivityInsights from "@/components/dashboard/ActivityInsights";
import FeatureEngagement from "@/components/dashboard/FeatureEngagement";
import HealthRiskAssessment from "@/components/dashboard/HealthRiskAssessment";
import CallNotes from "@/components/dashboard/CallNotes";
import PredefinedQuestions from "@/components/dashboard/PredefinedQuestions";
import AskAnything from "@/components/dashboard/AskAnything";
import { Separator } from "@/components/ui/separator";
import { LayoutDashboard } from "lucide-react";

const Dashboard = () => {
  const [selectedCoachId, setSelectedCoachId] = useState<number | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  useEffect(() => {
    // Set the document title
    document.title = "AI Coach Dashboard";
  }, []);

  const handleCoachSelect = (coachId: number) => {
    setSelectedCoachId(coachId);
    setSelectedUserId(null); // Reset user selection when coach changes
  };

  const handleUserSelect = (userId: number) => {
    setSelectedUserId(userId);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 flex items-center justify-between">
            <div className="flex items-center">
              <LayoutDashboard className="h-8 w-8 text-health-primary" />
              <h1 className="ml-2 text-xl font-bold text-gray-900">AI Coach Dashboard</h1>
            </div>
            <div className="text-sm text-gray-500">
              Last updated: May 21, 2025
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* Selectors */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CoachSelector onCoachSelect={handleCoachSelect} />
            <UserSelector coachId={selectedCoachId} onUserSelect={handleUserSelect} />
          </div>
        </div>
        
        {/* GOQii-GPT (formerly Ask Anything) */}
        <div className="mb-6">
          <AskAnything userId={selectedUserId} />
        </div>
        
        {/* Smart Snapshot (formerly Predefined Questions) */}
        <div className="mb-6">
          <PredefinedQuestions userId={selectedUserId} />
        </div>
        
        {/* Meet the User (formerly Personal Insights) */}
        <div className="mb-6">
          <PersonalInsights userId={selectedUserId} />
        </div>
        
        {/* Month in Motion & Past 8 Days at a Glance (formerly Activity & Feature Insights) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ActivityInsights userId={selectedUserId} />
          <FeatureEngagement userId={selectedUserId} />
        </div>
        
        {/* Health Risk Assessment */}
        <div className="mb-6">
          <HealthRiskAssessment userId={selectedUserId} />
        </div>
        
        {/* Call Notes */}
        <div className="mb-6">
          <CallNotes userId={selectedUserId} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
