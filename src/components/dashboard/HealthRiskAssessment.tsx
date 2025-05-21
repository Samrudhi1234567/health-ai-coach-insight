
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Heart } from "lucide-react";
import { userData } from "@/data/mockData";

interface HealthRiskAssessmentProps {
  userId: number | null;
}

const HealthRiskAssessment = ({ userId }: HealthRiskAssessmentProps) => {
  const [activeTab, setActiveTab] = useState<string>("");

  if (!userId || !userData[userId as keyof typeof userData]) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Health Risk Assessment</CardTitle>
          <CardDescription>Select a user to view their health issues</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const user = userData[userId as keyof typeof userData];
  const { healthAssessment } = user;

  // Set default active tab if not set and issues exist
  if (healthAssessment.severeIssues.length > 0 && !activeTab) {
    setActiveTab(healthAssessment.severeIssues[0].issue);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart size={18} className="text-red-500" />
          Health Risk Assessment
        </CardTitle>
        <CardDescription>Detected health issues and potential causes</CardDescription>
      </CardHeader>
      <CardContent>
        {healthAssessment.severeIssues.length > 0 ? (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4">
              {healthAssessment.severeIssues.map((issue, index) => (
                <TabsTrigger key={index} value={issue.issue} className="text-xs md:text-sm">
                  {issue.issue}
                </TabsTrigger>
              ))}
            </TabsList>

            {healthAssessment.severeIssues.map((issue, index) => (
              <TabsContent key={index} value={issue.issue} className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <div className="flex items-center mb-3">
                    <AlertCircle size={18} className="text-red-500 mr-2" />
                    <h3 className="text-md font-medium text-red-800">{issue.issue}</h3>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-red-700">Potential Causes:</h4>
                    <ul className="space-y-2">
                      {issue.causes.map((cause, causeIndex) => (
                        <li key={causeIndex} className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span className="text-sm text-red-700">{cause}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="text-sm font-medium text-blue-700 mb-2">Recommendations:</h4>
                  <ul className="space-y-2">
                    {issue.issue === "Acidity" && (
                      <>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-sm text-blue-700">Suggest regular meal times schedule</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-sm text-blue-700">Recommend reducing caffeine intake</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-sm text-blue-700">Introduce stress management techniques</span>
                        </li>
                      </>
                    )}
                    
                    {issue.issue === "Stress" && (
                      <>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-sm text-blue-700">Prioritize sleep hygiene improvements</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-sm text-blue-700">Schedule regular recreation activities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-sm text-blue-700">Introduce mindfulness meditation sessions</span>
                        </li>
                      </>
                    )}
                    
                    {issue.issue === "High Blood Pressure" && (
                      <>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-sm text-blue-700">Develop low-sodium meal plans</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-sm text-blue-700">Increase cardio exercise frequency</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-sm text-blue-700">Track daily blood pressure readings</span>
                        </li>
                      </>
                    )}

                    {issue.issue === "Back Pain" && (
                      <>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-sm text-blue-700">Implement posture correction exercises</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-sm text-blue-700">Schedule core strengthening workouts</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-sm text-blue-700">Suggest ergonomic workspace adjustments</span>
                        </li>
                      </>
                    )}

                    {issue.issue === "Anxiety" && (
                      <>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-sm text-blue-700">Introduce daily breathing exercises</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-sm text-blue-700">Suggest cognitive behavioral techniques</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-sm text-blue-700">Recommend social connection activities</span>
                        </li>
                      </>
                    )}

                    {issue.issue === "Insomnia" && (
                      <>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-sm text-blue-700">Implement screen-free evening routine</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-sm text-blue-700">Recommend consistent sleep/wake schedule</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-sm text-blue-700">Suggest bedtime relaxation practices</span>
                        </li>
                      </>
                    )}

                    {issue.issue === "Muscle Strain" && (
                      <>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-sm text-blue-700">Create proper warm-up routine</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-sm text-blue-700">Adjust training schedule to prevent overtraining</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-sm text-blue-700">Introduce recovery techniques (stretching, foam rolling)</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <div className="flex flex-col items-center justify-center py-6">
            <Heart size={48} className="text-green-500 mb-2" />
            <p className="text-green-600 font-medium">No severe health issues detected</p>
            <p className="text-sm text-gray-500 mt-1">The user has not reported any significant health concerns</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default HealthRiskAssessment;
