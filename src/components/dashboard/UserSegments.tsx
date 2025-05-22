
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { usersByCoach, userData } from "@/data/mockData";
import { Users } from "lucide-react";

// Define segment types
const segments = {
  "Bare Minimum Crew": "Log once in a blue moon. They're technically there but spiritually not.",
  "Quiet Grinders": "Regular loggers who don't talk to their coach much. Consistent in the shadows.",
  "Scroll + Bounce": "Logged in, poked around, logged one thing maybe… then bounced. Low-key curious.",
  "Main Character": "Super engaged in all aspects—tracking, coaching, and goals. Their wellness story is a movie.",
  "Soft Launchers": "Just starting to engage, a little here and there. They're testing the waters.",
  "Fell Off Crew": "Used to be active, now they've gone quiet. Let's send a 'We miss you'.",
  "Newbie Vibes": "New users still figuring it out. Early in their glow-up era.",
  "Ghost Mode": "Users who neither log nor message. Totally MIA. Might need a glow-up nudge.",
  "Glow-Up Gang": "Users who track consistently and are active with their coach. They're leveling up their wellness game daily."
};

// Helper function to determine user segment based on mock data
const getUserSegment = (userId: number) => {
  if (!userData[userId as keyof typeof userData]) return null;
  
  const user = userData[userId as keyof typeof userData];
  const { personalInfo, activityInsights } = user;
  
  // Simple logic to determine segment based on available mock data
  if (personalInfo.engagementScore >= 9) return "Main Character";
  if (personalInfo.engagementScore >= 7 && activityInsights.daysActive >= 15) return "Glow-Up Gang";
  if (personalInfo.engagementScore >= 6 && activityInsights.daysActive < 10) return "Quiet Grinders";
  if (personalInfo.engagementScore <= 3 && activityInsights.daysActive <= 5) return "Ghost Mode";
  if (personalInfo.lastAppOpen && new Date(personalInfo.lastAppOpen) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)) return "Newbie Vibes";
  if (personalInfo.engagementScore < 5 && activityInsights.daysActive > 10) return "Fell Off Crew";
  if (personalInfo.engagementScore < 4) return "Bare Minimum Crew";
  if (activityInsights.appLaunches <= 3) return "Scroll + Bounce";
  
  return "Soft Launchers"; // Default
};

// Group users by segment
const groupUsersBySegment = (coachId: number | null) => {
  if (!coachId) return {};
  
  const coachUsers = usersByCoach[coachId as keyof typeof usersByCoach] || [];
  const segmentedUsers: Record<string, Array<{ id: number; name: string; avatarUrl: string }>> = {};
  
  // Initialize segments
  Object.keys(segments).forEach(segment => {
    segmentedUsers[segment] = [];
  });
  
  // Populate segments with users
  coachUsers.forEach(user => {
    const segment = getUserSegment(user.id) || "Soft Launchers";
    if (segmentedUsers[segment]) {
      segmentedUsers[segment].push(user);
    }
  });
  
  return segmentedUsers;
};

interface UserSegmentsProps {
  coachId: number | null;
}

const UserSegments = ({ coachId }: UserSegmentsProps) => {
  const [segmentedUsers, setSegmentedUsers] = useState<Record<string, Array<{ id: number; name: string; avatarUrl: string }>>>({});
  
  useEffect(() => {
    if (coachId) {
      const grouped = groupUsersBySegment(coachId);
      setSegmentedUsers(grouped);
    } else {
      setSegmentedUsers({});
    }
  }, [coachId]);
  
  if (!coachId) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users size={18} className="text-health-primary" />
            User Segments
          </CardTitle>
          <CardDescription>Select a coach to view user segments</CardDescription>
        </CardHeader>
      </Card>
    );
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users size={18} className="text-health-primary" />
          User Segments
        </CardTitle>
        <CardDescription>Users grouped by engagement patterns</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {Object.entries(segmentedUsers).map(([segmentName, users]) => {
            if (users.length === 0) return null;
            
            return (
              <div key={segmentName} className="space-y-3">
                <h3 className="text-lg font-medium text-gray-900">{segmentName}</h3>
                <p className="text-sm text-gray-500 italic">{segments[segmentName as keyof typeof segments]}</p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>ID</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map(user => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={user.avatarUrl} alt={user.name} />
                              <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{user.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{user.id}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            );
          })}
          
          {Object.values(segmentedUsers).every(users => users.length === 0) && (
            <div className="text-center py-6 text-gray-500">
              No users found for this coach
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserSegments;
