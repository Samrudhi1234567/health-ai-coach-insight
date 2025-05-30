
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { HelpCircle, Search } from "lucide-react";
import { userPredefinedQuestions, userSpecificChartData, predefinedQuestions, chartData } from "@/data/mockData";

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

  // Get user-specific questions or fallback to generic ones
  const getQuestionsForCategory = () => {
    if (userId && userPredefinedQuestions[userId as keyof typeof userPredefinedQuestions]) {
      return userPredefinedQuestions[userId as keyof typeof userPredefinedQuestions][category as keyof typeof userPredefinedQuestions[keyof typeof userPredefinedQuestions]] || [];
    }
    return predefinedQuestions[category as keyof typeof predefinedQuestions] || [];
  };

  // Get user-specific chart data or fallback to generic data
  const getUserChartData = () => {
    if (userId && userSpecificChartData[userId as keyof typeof userSpecificChartData]) {
      return userSpecificChartData[userId as keyof typeof userSpecificChartData];
    }
    return chartData;
  };

  // Generate user-specific insights
  const getUserSpecificInsight = () => {
    if (!userId) return "Select a user to view personalized insights.";
    
    const insights = {
      101: { // Jessica Brown
        engagement: "Jessica shows strong commitment to nutrition tracking but needs support with meal timing consistency to manage her acidity issues.",
        hraIssues: "Her acidity and stress issues are interconnected - irregular meals trigger stress, which worsens acidity symptoms.",
        ghostedActions: "Jessica abandoned sleep and meditation features when acidity symptoms worsened, missing key stress management tools.",
        insights: "Clear correlation between meal timing, stress levels, and acidity symptoms suggests a holistic approach to nutrition and stress management."
      },
      102: { // Daniel Wilson
        engagement: "Daniel excels in fitness tracking but completely neglects nutrition monitoring, creating a gap in his health management approach.",
        hraIssues: "His high blood pressure could benefit significantly from better hydration and nutrition tracking alongside his excellent fitness routine.",
        ghostedActions: "Water intake tracking was abandoned despite being crucial for blood pressure management - indicates need for education on hydration importance.",
        insights: "Strong exercise habits provide excellent foundation, but nutritional awareness is critical missing piece for blood pressure control."
      },
      201: { // Thomas Anderson
        engagement: "Thomas demonstrates exceptional consistency across all fitness features, but his intense engagement may indicate risk of overtraining.",
        hraIssues: "Muscle strain issues suggest need for better recovery protocols despite his high engagement with tracking tools.",
        ghostedActions: "Complete avoidance of stress management tools despite high training load indicates potential blind spot in recovery strategy.",
        insights: "High performance metrics combined with muscle strain suggest need for smarter training periodization and stress management integration."
      },
      301: { // Kevin Harris
        engagement: "Kevin's meditation focus shows excellent understanding of his anxiety management needs, with clear improvement in consistency over time.",
        hraIssues: "Significant progress in sleep quality through meditation indicates effective anxiety management strategy development.",
        ghostedActions: "Physical activity avoidance may be anxiety-related, suggesting need for gentle movement introduction alongside mental health work.",
        insights: "Strong mental health foundation being built through meditation - physical activity integration could amplify anxiety management benefits."
      }
    };
    
    const userInsights = insights[userId as keyof typeof insights];
    if (userInsights) {
      return userInsights[category as keyof typeof userInsights] || "Analyzing user patterns for personalized insights.";
    }
    
    return "Analyzing user patterns for personalized insights.";
  };

  const renderChart = () => {
    if (!showChart) return null;
    
    const userChartData = getUserChartData();
    
    // Chart selection based on question category and content
    if (category === "engagement") {
      if (question.includes("most") || question.includes("features")) {
        return (
          <div className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={userChartData.featureUsage.slice(0, 5)} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={120} />
                <Tooltip />
                <Bar dataKey="usage" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );
      } else if (question.includes("frequency") || question.includes("changed over time") || question.includes("usage")) {
        return (
          <div className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userChartData.weeklyEngagement}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sessions" stroke="#4F46E5" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        );
      } else if (question.includes("time of day") || question.includes("patterns")) {
        // Use health trends or performance data if available
        const trendData = userChartData.healthTrends || userChartData.performanceMetrics || userChartData.mentalHealthTrends;
        if (trendData) {
          return (
            <div className="h-[300px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey={Object.keys(trendData[0])[1]} stroke="#4F46E5" strokeWidth={2} />
                  {Object.keys(trendData[0]).length > 2 && (
                    <Line type="monotone" dataKey={Object.keys(trendData[0])[2]} stroke="#10B981" strokeWidth={2} />
                  )}
                </LineChart>
              </ResponsiveContainer>
            </div>
          );
        }
      }
    } else if (category === "hraIssues") {
      // Show user-specific health issue distribution
      const healthIssues = userId === 101 ? [
        { name: "Acidity", value: 45 },
        { name: "Stress", value: 35 },
        { name: "Sleep Issues", value: 15 },
        { name: "Energy", value: 5 }
      ] : userId === 102 ? [
        { name: "High Blood Pressure", value: 50 },
        { name: "Back Pain", value: 30 },
        { name: "Stress", value: 15 },
        { name: "Sleep Quality", value: 5 }
      ] : userId === 201 ? [
        { name: "Muscle Strain", value: 40 },
        { name: "Overtraining Risk", value: 35 },
        { name: "Recovery Issues", value: 20 },
        { name: "Sleep Quality", value: 5 }
      ] : userId === 301 ? [
        { name: "Anxiety", value: 45 },
        { name: "Insomnia", value: 30 },
        { name: "Social Isolation", value: 20 },
        { name: "Physical Inactivity", value: 5 }
      ] : [
        { name: "Various Issues", value: 100 }
      ];
      
      return (
        <div className="h-[300px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={healthIssues}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {healthIssues.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      );
    } else if (category === "ghostedActions") {
      // Show user-specific ghosted features
      const ghostedData = userId === 101 ? [
        { feature: "Sleep Monitoring", daysAbandoned: 45 },
        { feature: "Meditation Sessions", daysAbandoned: 30 },
        { feature: "Goal Setting", daysAbandoned: 15 }
      ] : userId === 102 ? [
        { feature: "Nutrition Tracking", daysAbandoned: 60 },
        { feature: "Water Intake", daysAbandoned: 35 },
        { feature: "Meditation", daysAbandoned: 90 }
      ] : userId === 201 ? [
        { feature: "Stress Management", daysAbandoned: 50 },
        { feature: "Meditation", daysAbandoned: 40 }
      ] : userId === 301 ? [
        { feature: "Workout Logging", daysAbandoned: 25 },
        { feature: "Goal Setting", daysAbandoned: 20 },
        { feature: "Nutrition Tracking", daysAbandoned: 35 }
      ] : [
        { feature: "Various Features", daysAbandoned: 30 }
      ];
      
      return (
        <div className="h-[300px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ghostedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="feature" />
              <YAxis label={{ value: 'Days Since Last Use', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Bar dataKey="daysAbandoned" fill="#EF4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    } else if (category === "insights") {
      // Show user-specific correlation data
      const correlationData = userChartData.healthTrends || userChartData.performanceMetrics || userChartData.mentalHealthTrends;
      if (correlationData) {
        return (
          <div className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={correlationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey={Object.keys(correlationData[0])[1]} stroke="#10B981" strokeWidth={2} />
                <Line type="monotone" dataKey={Object.keys(correlationData[0])[2]} stroke="#F59E0B" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        );
      }
    }
    
    // Default chart if no specific match
    return (
      <div className="h-[300px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={userChartData.featureUsage}>
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
          Smart Snapshot
        </CardTitle>
        <CardDescription>Select a category and question to visualize data</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Tabs defaultValue="engagement" value={category} onValueChange={handleCategoryChange}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="engagement">User Journey</TabsTrigger>
              <TabsTrigger value="hraIssues">Health Index</TabsTrigger>
              <TabsTrigger value="ghostedActions">Ghosted Actions</TabsTrigger>
              <TabsTrigger value="insights">Knowledge Gateway</TabsTrigger>
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
                {getQuestionsForCategory().map((q, i) => (
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
                  {getUserSpecificInsight()}
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
