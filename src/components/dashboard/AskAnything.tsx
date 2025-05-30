
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Search, MessageSquare, ArrowRight } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { userSpecificResponses } from "@/data/mockData";

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
      generateUserSpecificResponse(query, userId);
      setIsAnalyzing(false);
    }, 1500);
  };

  const generateUserSpecificResponse = (question: string, userId: number) => {
    const q = question.toLowerCase();
    const userData = userSpecificResponses[userId as keyof typeof userSpecificResponses];
    
    if (!userData) {
      // Fallback for users without specific data
      setResult({
        answer: `Based on the available data for this user, their engagement patterns and health metrics show room for improvement across multiple areas.`,
        chartType: "none"
      });
      return;
    }
    
    if (q.includes("sleep") || q.includes("sleeping")) {
      setResult(userData.sleep);
    } else if (q.includes("water") || q.includes("hydration")) {
      setResult(userData.water);
    } else if (q.includes("stress") || q.includes("anxiety")) {
      setResult(userData.stress);
    } else if (q.includes("exercise") || q.includes("workout")) {
      setResult(userData.exercise);
    } else if (q.includes("diet") || q.includes("nutrition") || q.includes("food")) {
      setResult(userData.diet);
    } else {
      setResult(userData.default);
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

  // Generate user-specific example questions
  const getUserSpecificQuestions = () => {
    if (!userId) return [];
    
    // Basic questions that work for all users
    const baseQuestions = [
      "How is the user's sleep pattern?",
      "What's the user's water intake like?",
      "How consistent is the user with exercise?",
      "When does the user experience most stress?",
      "What is the user's nutrition balance?"
    ];
    
    return baseQuestions;
  };

  const exampleQuestions = getUserSpecificQuestions();

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
