
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, User, Activity, Heart } from "lucide-react";
import { userData } from "@/data/mockData";
import { format, parseISO } from "date-fns";

interface PersonalInsightsProps {
  userId: number | null;
}

const PersonalInsights = ({ userId }: PersonalInsightsProps) => {
  if (!userId || !userData[userId as keyof typeof userData]) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Personal Insights</CardTitle>
          <CardDescription>Select a user to view their personal insights</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const user = userData[userId as keyof typeof userData];
  const { personalInfo } = user;

  const getBmiCategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Underweight", color: "bg-blue-500" };
    if (bmi < 25) return { label: "Normal", color: "bg-green-500" };
    if (bmi < 30) return { label: "Overweight", color: "bg-yellow-500" };
    return { label: "Obese", color: "bg-red-500" };
  };

  const getEngagementColor = (score: number) => {
    if (score < 4) return "bg-red-500";
    if (score < 7) return "bg-yellow-500";
    return "bg-green-500";
  };

  const bmiCategory = getBmiCategory(personalInfo.bmi);
  const engagementColor = getEngagementColor(personalInfo.engagementScore);
  const formattedDate = personalInfo.lastAppOpen ? format(parseISO(personalInfo.lastAppOpen), "MMM d, yyyy") : "N/A";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User size={18} className="text-health-primary" />
          Personal Insights
        </CardTitle>
        <CardDescription>User demographic and engagement data</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500">Age:</span>
              <span className="text-sm font-semibold">{personalInfo.age} years</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500">Gender:</span>
              <span className="text-sm font-semibold">{personalInfo.gender}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500">Last Active:</span>
              <div className="flex items-center gap-1">
                <CalendarDays size={14} className="text-health-primary" />
                <span className="text-sm font-semibold">{formattedDate}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500">Lifestyle:</span>
              <span className="text-sm font-semibold">{personalInfo.lifestyle}</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500">Subscription:</span>
              <Badge variant={personalInfo.subscriptionStatus === "Paid" ? "default" : "outline"}>
                {personalInfo.subscriptionStatus}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500">BMI:</span>
              <div className="flex items-center gap-1">
                <div className={`h-2 w-2 rounded-full ${bmiCategory.color}`}></div>
                <span className="text-sm font-semibold">{personalInfo.bmi} ({bmiCategory.label})</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500">Engagement:</span>
              <div className="flex items-center gap-1">
                <Activity size={14} className="text-health-primary" />
                <div className="flex items-center">
                  <div className={`h-2 w-2 rounded-full ${engagementColor} mr-1`}></div>
                  <span className="text-sm font-semibold">{personalInfo.engagementScore}/10</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500">Heart Health:</span>
              <div className="flex items-center gap-1">
                <Heart size={14} className="text-red-500" />
                <span className="text-sm font-semibold">Good</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInsights;
