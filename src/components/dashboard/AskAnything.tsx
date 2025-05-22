
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Search, MessageSquare, ArrowRight } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface AskAnythingProps {
  userId: number | null;
}

const AskAnything = ({ userId }: AskAnythingProps) => {
  const [query, setQuery] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    answer: string;
    chartType: string;
    data?: any[];
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userId) {
      toast({
        title: "No user selected",
        description: "Please select a user before asking questions",
        variant: "destructive",
      });
      return;
    }
    
    if (!query.trim()) {
      toast({
        title: "Empty query",
        description: "Please enter a question",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);

    // Simulate API call with setTimeout
    setTimeout(() => {
      generateMockResponse(query);
      setIsAnalyzing(false);
    }, 1500);
  };

  const generateMockResponse = (question: string) => {
    const q = question.toLowerCase();
    
    if (q.includes("sleep") || q.includes("sleeping")) {
      setResult({
        answer: "The user's sleep patterns show an average of 6.8 hours per night over the last 30 days, with significant improvement on weekends (7.5+ hours) versus weekdays (6.2 hours average).",
        chartType: "line",
        data: [
          { day: "Monday", hours: 6.2 },
          { day: "Tuesday", hours: 6.5 },
          { day: "Wednesday", hours: 6.0 },
          { day: "Thursday", hours: 6.3 },
          { day: "Friday", hours: 6.8 },
          { day: "Saturday", hours: 7.8 },
          { day: "Sunday", hours: 7.5 }
        ]
      });
    } else if (q.includes("water") || q.includes("hydration")) {
      setResult({
        answer: "The user's water intake varies significantly, ranging from 4-7 glasses per day. The target is 8 glasses, which they've only met twice in the past 30 days.",
        chartType: "bar",
        data: [
          { week: "Week 1", glasses: 5.2 },
          { week: "Week 2", glasses: 4.8 },
          { week: "Week 3", glasses: 6.1 },
          { week: "Week 4", glasses: 5.7 }
        ]
      });
    } else if (q.includes("stress") || q.includes("anxiety")) {
      setResult({
        answer: "Stress levels are highest on Mondays and Thursdays, which correlate with reported work deadlines. Evening meditation has been effective at reducing stress on days it was practiced.",
        chartType: "line",
        data: [
          { day: "Monday", level: 7.5, meditation: 0 },
          { day: "Tuesday", level: 6.2, meditation: 1 },
          { day: "Wednesday", level: 5.8, meditation: 1 },
          { day: "Thursday", level: 7.2, meditation: 0 },
          { day: "Friday", level: 5.5, meditation: 1 },
          { day: "Saturday", level: 4.2, meditation: 1 },
          { day: "Sunday", level: 4.8, meditation: 0 }
        ]
      });
    } else if (q.includes("exercise") || q.includes("workout")) {
      setResult({
        answer: "The user exercises 3-4 times per week, with strength training being the most common activity (45%), followed by walking (30%), yoga (15%), and HIIT (10%).",
        chartType: "pie",
        data: [
          { name: "Strength Training", value: 45 },
          { name: "Walking", value: 30 },
          { name: "Yoga", value: 15 },
          { name: "HIIT", value: 10 }
        ]
      });
    } else if (q.includes("diet") || q.includes("nutrition") || q.includes("food")) {
      setResult({
        answer: "The user has been consistent with meal logging (85% of days), with dinner being the most commonly skipped meal. Protein intake is below target on 60% of logged days.",
        chartType: "bar",
        data: [
          { nutrient: "Protein", actual: 75, target: 100 },
          { nutrient: "Carbs", actual: 110, target: 100 },
          { nutrient: "Fat", actual: 95, target: 100 },
          { nutrient: "Fiber", actual: 65, target: 100 },
          { nutrient: "Water", actual: 70, target: 100 }
        ]
      });
    } else {
      setResult({
        answer: "Based on the user's overall data, their engagement score is 7.3/10, with nutrition tracking being their most consistent feature. Their health assessment indicates mild stress and acidity issues that may benefit from lifestyle adjustments.",
        chartType: "none"
      });
    }
  };

  const renderChart = () => {
    if (!result || !result.chartType || !result.data) return null;

    const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444'];

    if (result.chartType === "bar") {
      return (
        <div className="h-[250px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={result.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={Object.keys(result.data[0])[0]} />
              <YAxis />
              <Tooltip />
              <Bar dataKey={Object.keys(result.data[0])[1]} fill="#4F46E5" />
              {Object.keys(result.data[0]).length > 2 && (
                <Bar dataKey={Object.keys(result.data[0])[2]} fill="#10B981" />
              )}
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    } else if (result.chartType === "line") {
      return (
        <div className="h-[250px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={result.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={Object.keys(result.data[0])[0]} />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey={Object.keys(result.data[0])[1]} stroke="#4F46E5" strokeWidth={2} />
              {Object.keys(result.data[0]).length > 2 && (
                <Line type="monotone" dataKey={Object.keys(result.data[0])[2]} stroke="#10B981" strokeWidth={2} />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      );
    } else if (result.chartType === "pie") {
      return (
        <div className="h-[250px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={result.data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {result.data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      );
    }
    
    return null;
  };

  const exampleQuestions = [
    "How is the user's sleep pattern?",
    "What's the user's water intake like?",
    "How consistent is the user with exercise?",
    "When does the user experience most stress?",
    "What is the user's nutrition balance?"
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare size={18} className="text-health-primary" />
          Want to Dig Deeper? GOQii-GPT
        </CardTitle>
        <CardDescription>Ask custom questions about user data</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Ask a question about this user..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={isAnalyzing || !userId}
              className="flex-1"
            />
            <Button type="submit" disabled={isAnalyzing || !userId || !query.trim()}>
              {isAnalyzing ? "Analyzing..." : "Ask"}
            </Button>
          </div>
          
          {!result && !isAnalyzing && (
            <div className="pt-2">
              <p className="text-xs text-gray-500 mb-2">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {exampleQuestions.map((q, i) => (
                  <Button 
                    key={i} 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setQuery(q)}
                    disabled={!userId}
                    className="text-xs"
                  >
                    {q}
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          {isAnalyzing && (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="animate-pulse flex space-x-2 mb-2">
                <div className="h-2 w-2 bg-health-primary rounded-full"></div>
                <div className="h-2 w-2 bg-health-primary rounded-full"></div>
                <div className="h-2 w-2 bg-health-primary rounded-full"></div>
              </div>
              <p className="text-sm text-gray-500">Analyzing user data...</p>
            </div>
          )}
          
          {result && (
            <div className="pt-2 space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <Search size={18} className="text-blue-500 mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-blue-700">Analysis</h3>
                    <p className="text-sm text-blue-600 mt-1">{result.answer}</p>
                  </div>
                </div>
              </div>
              
              {renderChart()}
              
              <div className="flex justify-end">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    setResult(null);
                    setQuery("");
                  }}
                  className="text-sm text-gray-500 flex items-center"
                >
                  <span>Ask another question</span>
                  <ArrowRight size={14} className="ml-1" />
                </Button>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default AskAnything;
