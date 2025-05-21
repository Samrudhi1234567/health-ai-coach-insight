
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { Calendar, Activity, Video, ArrowRight } from "lucide-react";
import { userData } from "@/data/mockData";

interface ActivityInsightsProps {
  userId: number | null;
}

const ActivityInsights = ({ userId }: ActivityInsightsProps) => {
  if (!userId || !userData[userId as keyof typeof userData]) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>30-Day Insights</CardTitle>
          <CardDescription>Select a user to view their activity insights</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const user = userData[userId as keyof typeof userData];
  const { activityInsights } = user;

  // Feature engagement data for the pie chart
  const featureData = [
    { name: activityInsights.mostActiveFeature, value: 75, color: "#10B981" },
    { name: activityInsights.leastActiveFeature, value: 25, color: "#F59E0B" },
  ];
  
  // App launch data for the bar chart
  const weeklyData = [
    { name: "Week 1", launches: Math.round(activityInsights.appLaunches * 0.2) },
    { name: "Week 2", launches: Math.round(activityInsights.appLaunches * 0.3) },
    { name: "Week 3", launches: Math.round(activityInsights.appLaunches * 0.2) },
    { name: "Week 4", launches: Math.round(activityInsights.appLaunches * 0.3) },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity size={18} className="text-health-primary" />
          30-Day Insights
        </CardTitle>
        <CardDescription>User activity metrics over the last month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-sm text-gray-500">App Launches</div>
                <div className="text-2xl font-bold text-health-primary mt-1">{activityInsights.appLaunches}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-sm text-gray-500">Days Active</div>
                <div className="text-2xl font-bold text-health-secondary mt-1">{activityInsights.daysActive}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-sm text-gray-500">Videos Watched</div>
                <div className="flex items-center mt-1">
                  <Video size={16} className="text-health-accent mr-1" />
                  <span className="text-2xl font-bold text-health-accent">{activityInsights.videosWatched}</span>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-sm text-gray-500">Days in System</div>
                <div className="flex items-center mt-1">
                  <Calendar size={16} className="text-health-info mr-1" />
                  <span className="text-2xl font-bold text-health-info">{activityInsights.daysInSystem}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Feature Engagement</h4>
              <div className="h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={featureData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={70}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name }) => name}
                    >
                      {featureData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium">App Launches by Week</h4>
            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="launches" fill="#4F46E5" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg mt-2">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-500">Most Active Feature</div>
                  <div className="text-sm font-medium mt-1 text-green-600 flex items-center">
                    <span>{activityInsights.mostActiveFeature}</span>
                    <ArrowRight size={14} className="ml-1" />
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Least Active Feature</div>
                  <div className="text-sm font-medium mt-1 text-amber-600 flex items-center">
                    <span>{activityInsights.leastActiveFeature}</span>
                    <ArrowRight size={14} className="ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityInsights;
