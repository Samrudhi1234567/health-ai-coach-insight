
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { usersByCoach, userLogData, coaches } from "@/data/mockData";
import { Users } from "lucide-react";

const logTypes = [
  { value: "hydration", label: "Hydration Log" },
  { value: "food", label: "Food Log" },
  { value: "steps", label: "Steps Log" },
  { value: "activity", label: "Activity Log" },
  { value: "meditation", label: "Meditation Log" },
  { value: "sleep", label: "Sleep Log" },
  { value: "weight", label: "Weight Log" }
];

const durationFilters = [
  { value: "today", label: "Today", days: 0 },
  { value: "yesterday", label: "Yesterday", days: 1 },
  { value: "week", label: "This Week", days: 7 },
  { value: "month", label: "This Month", days: 30 }
];

interface CoachImpact {
  id: number;
  name: string;
  avatarUrl: string;
  missedUsersCount: number;
  totalUsers: number;
}

const CoachesImpact = () => {
  const [selectedDuration, setSelectedDuration] = useState<string>("week");
  const [selectedLogType, setSelectedLogType] = useState<string>("food");
  const [coachesImpact, setCoachesImpact] = useState<CoachImpact[]>([]);

  useEffect(() => {
    console.log("Filtering coaches with:", { selectedDuration, selectedLogType });
    
    if (selectedDuration && selectedLogType) {
      const durationFilter = durationFilters.find(d => d.value === selectedDuration);
      if (!durationFilter) return;

      let cutoffDate = new Date();
      
      // Adjust cutoff date based on filter type
      if (selectedDuration === "today") {
        cutoffDate.setHours(0, 0, 0, 0);
      } else if (selectedDuration === "yesterday") {
        cutoffDate.setDate(cutoffDate.getDate() - 1);
        cutoffDate.setHours(0, 0, 0, 0);
      } else if (selectedDuration === "week") {
        cutoffDate.setDate(cutoffDate.getDate() - 7);
      } else if (selectedDuration === "month") {
        cutoffDate.setDate(cutoffDate.getDate() - 30);
      }

      console.log("Cutoff date:", cutoffDate);

      const impactData: CoachImpact[] = coaches.map(coach => {
        const coachUsers = usersByCoach[coach.id as keyof typeof usersByCoach] || [];
        const coachLogData = userLogData[coach.id as keyof typeof userLogData] || {};
        
        const usersWhoMissed = coachUsers.filter(user => {
          const userLogs = coachLogData[user.id as keyof typeof coachLogData];
          if (!userLogs || typeof userLogs !== 'object') {
            return true; // No log data means they missed it
          }

          const userLogsAny = userLogs as any;
          const lastLogDateStr = userLogsAny.lastLogs?.[selectedLogType];
          
          if (!lastLogDateStr) {
            return true; // No log for this type
          }

          const lastLogDate = new Date(lastLogDateStr);
          const hasLogged = lastLogDate >= cutoffDate;
          
          return !hasLogged; // Return true if they HAVEN'T logged since cutoff
        });

        console.log(`Coach ${coach.name}: ${usersWhoMissed.length}/${coachUsers.length} users missed ${selectedLogType}`);

        return {
          id: coach.id,
          name: coach.name,
          avatarUrl: coach.avatarUrl,
          missedUsersCount: usersWhoMissed.length,
          totalUsers: coachUsers.length
        };
      }).filter(coach => coach.missedUsersCount > 0); // Only show coaches with users who missed logs

      console.log("Coaches with impact:", impactData.length);
      setCoachesImpact(impactData);
    } else {
      setCoachesImpact([]);
    }
  }, [selectedDuration, selectedLogType]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users size={18} className="text-health-primary" />
          Coaches Impact
        </CardTitle>
        <CardDescription>Track coaches whose users haven't logged specific activities within the selected timeframe</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-700">Duration</label>
              <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Time Period</SelectLabel>
                    {durationFilters.map((filter) => (
                      <SelectItem key={filter.value} value={filter.value}>
                        {filter.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-700">Log Type</label>
              <Select value={selectedLogType} onValueChange={setSelectedLogType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select log type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Activity Logs</SelectLabel>
                    {logTypes.map((log) => (
                      <SelectItem key={log.value} value={log.value}>
                        {log.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">
                Coaches with users who haven't logged {logTypes.find(l => l.value === selectedLogType)?.label.toLowerCase()} in {durationFilters.find(d => d.value === selectedDuration)?.label.toLowerCase()}
              </h3>
              <Badge variant={coachesImpact.length > 0 ? "destructive" : "default"}>
                {coachesImpact.length} coaches
              </Badge>
            </div>

            {coachesImpact.length > 0 ? (
              <div className="grid grid-cols-1 gap-3">
                {coachesImpact.map((coach) => (
                  <div key={coach.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={coach.avatarUrl} alt={coach.name} />
                        <AvatarFallback>{coach.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <span className="font-medium text-gray-900">{coach.name}</span>
                        <p className="text-sm text-gray-500">ID: {coach.id}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Users who missed:</p>
                      <p className="text-sm font-medium text-red-600">
                        {coach.missedUsersCount} out of {coach.totalUsers}
                      </p>
                      <p className="text-xs text-gray-500">
                        ({Math.round((coach.missedUsersCount / coach.totalUsers) * 100)}% impact)
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Users size={48} className="mx-auto mb-4 text-gray-300" />
                <p className="text-lg font-medium">Excellent coaching! 🎉</p>
                <p>All coaches have their users logging {logTypes.find(l => l.value === selectedLogType)?.label.toLowerCase()} in {durationFilters.find(d => d.value === selectedDuration)?.label.toLowerCase()}.</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoachesImpact;
