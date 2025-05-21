
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, AlertCircle } from "lucide-react";
import { userData } from "@/data/mockData";

interface FeatureEngagementProps {
  userId: number | null;
}

const FeatureEngagement = ({ userId }: FeatureEngagementProps) => {
  if (!userId || !userData[userId as keyof typeof userData]) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Feature Engagement</CardTitle>
          <CardDescription>Select a user to view their feature engagement</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const user = userData[userId as keyof typeof userData];
  const { featureEngagement } = user;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Feature Engagement Analysis</CardTitle>
        <CardDescription>User activity patterns and feature usage</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="flex items-center mb-3">
              <AlertCircle size={16} className="text-amber-500 mr-2" />
              <h3 className="text-sm font-medium">Ghosted Features</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {featureEngagement.ghostedFeatures.length > 0 ? (
                featureEngagement.ghostedFeatures.map((feature, index) => (
                  <Badge key={index} variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                    {feature}
                  </Badge>
                ))
              ) : (
                <p className="text-sm text-gray-500">No ghosted features detected</p>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Features that were previously used but have been abandoned in the last week
            </p>
          </div>

          <div>
            <div className="flex items-center mb-3">
              <Check size={16} className="text-green-500 mr-2" />
              <h3 className="text-sm font-medium">Consistently Used Features</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {featureEngagement.consistentFeatures.length > 0 ? (
                featureEngagement.consistentFeatures.map((feature, index) => (
                  <Badge key={index} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {feature}
                  </Badge>
                ))
              ) : (
                <p className="text-sm text-gray-500">No consistently used features detected</p>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Features the user engages with regularly in the last week
            </p>
          </div>

          <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
            <h3 className="text-sm font-medium text-blue-700 mb-2">Recommended Actions</h3>
            <ul className="text-sm text-blue-600 space-y-1">
              {featureEngagement.ghostedFeatures.length > 0 && (
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Re-engage user with {featureEngagement.ghostedFeatures[0]} through targeted notification
                  </span>
                </li>
              )}
              {featureEngagement.consistentFeatures.length > 0 && (
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Reinforce {featureEngagement.consistentFeatures[0]} usage with positive feedback
                  </span>
                </li>
              )}
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Schedule a check-in call to discuss feature usage patterns
                </span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureEngagement;
