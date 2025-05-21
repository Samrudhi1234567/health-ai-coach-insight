
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { HelpCircle, Search } from "lucide-react";
import { predefinedQuestions, chartData } from "@/data/mockData";
import { Button } from "@/components/ui/button";

interface PredefinedQuestionsProps {
  userId: number | null;
}

const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444'];

const PredefinedQuestions = ({ userId }: PredefinedQuestionsProps) => {
  const [category, setCategory] = useState<string>("engagement");
  const [question, setQuestion] = useState<string>("");
  const [showChart, setShowChart] = useState<boolean>(false);

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setQuestion("");
    setShowChart(false);
  };

  const handleQuestionSelect = (value: string) => {
    setQuestion(value);
    setShowChart(true);
  };

  // Determine which chart to display based on the selected question
  const renderChart = () => {
    if (!showChart) return null;
    
    // Chart selection based on question category and content
    if (category === "engagement") {
      if (question.includes("most")) {
        return (
          <div className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData.featureUsage.slice(0, 5)} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={120} />
                <Tooltip />
                <Bar dataKey="usage" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );
      } else if (question.includes("frequency") || question.includes("changed over time")) {
        return (
          <div className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData.weeklyEngagement}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sessions" stroke="#4F46E5" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        );
      } else if (question.includes("time of day")) {
        return (
          <div className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData.dailyAppOpenTime}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="morning" name="Morning" fill="#10B981" />
                <Bar dataKey="afternoon" name="Afternoon" fill="#4F46E5" />
                <Bar dataKey="evening" name="Evening" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );
      }
    } else if (category === "hraIssues") {
      return (
        <div className="h-[300px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={[
                  { name: "Acidity", value: 35 },
                  { name: "Stress", value: 25 },
                  { name: "Sleep Issues", value: 20 },
                  { name: "Back Pain", value: 15 },
                  { name: "Other", value: 5 }
                ]}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {chartData.featureUsage.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      );
    } else if (category === "ghostedActions") {
      return (
        <div className="h-[300px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={[
              { feature: "Sleep Monitoring", lastUsed: 14 },
              { feature: "Meditation", lastUsed: 10 },
              { feature: "Goal Setting", lastUsed: 8 },
              { feature: "Video Tutorials", lastUsed: 5 }
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="feature" />
              <YAxis label={{ value: 'Days Since Last Use', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Bar dataKey="lastUsed" fill="#EF4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    } else if (category === "insights") {
      return (
        <div className="h-[300px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={[
              { day: "Mon", sleep: 7.2, energy: 6.5 },
              { day: "Tue", sleep: 6.5, energy: 5.8 },
              { day: "Wed", sleep: 8.0, energy: 7.5 },
              { day: "Thu", sleep: 7.8, energy: 7.2 },
              { day: "Fri", sleep: 6.0, energy: 5.5 },
              { day: "Sat", sleep: 8.5, energy: 8.2 },
              { day: "Sun", sleep: 7.5, energy: 7.0 }
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sleep" stroke="#10B981" name="Sleep Hours" strokeWidth={2} />
              <Line type="monotone" dataKey="energy" stroke="#F59E0B" name="Energy Level" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );
    }
    
    // Default chart if no specific match
    return (
      <div className="h-[300px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData.featureUsage}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="usage" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HelpCircle size={18} className="text-health-primary" />
          Predefined Questions
        </CardTitle>
        <CardDescription>Select a category and question to visualize data</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Tabs defaultValue="engagement" value={category} onValueChange={handleCategoryChange}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
              <TabsTrigger value="hraIssues">HRA Issues</TabsTrigger>
              <TabsTrigger value="ghostedActions">Ghosted Actions</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>
          </Tabs>

          <div>
            <label htmlFor="question-select" className="text-sm font-medium text-gray-700 mb-1 block">
              Select a Question
            </label>
            <Select value={question} onValueChange={handleQuestionSelect}>
              <SelectTrigger id="question-select" disabled={!userId}>
                <SelectValue placeholder={userId ? "Choose a question to analyze" : "Select a user first"} />
              </SelectTrigger>
              <SelectContent>
                {predefinedQuestions[category as keyof typeof predefinedQuestions]?.map((q, i) => (
                  <SelectItem key={i} value={q}>
                    {q}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {question && (
            <div className="mt-2 border-t pt-4">
              <h3 className="text-sm font-medium mb-4">Analysis: {question}</h3>
              
              {renderChart()}
              
              <div className="mt-4 bg-gray-50 p-3 rounded-lg">
                <h4 className="text-sm font-medium text-gray-700">Insights</h4>
                <p className="text-sm text-gray-600 mt-1">
                  {category === "engagement" && "User shows highest engagement with nutrition tracking and step counting features. Weekend usage is significantly higher than weekdays."}
                  {category === "hraIssues" && "Acidity and stress are the primary health concerns. Both appear to be correlated with sleep patterns and work schedule."}
                  {category === "ghostedActions" && "Sleep monitoring was abandoned 14 days ago, shortly after a period of reported high stress. Consider re-engagement strategies."}
                  {category === "insights" && "There's a clear correlation between sleep quality and reported energy levels the following day. Days with 7.5+ hours show optimal energy."}
                </p>
              </div>
            </div>
          )}

          {!question && (
            <div className="flex flex-col items-center justify-center py-8 text-gray-500">
              <Search size={32} className="mb-2 text-gray-400" />
              <p>Select a question to view analysis</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PredefinedQuestions;
