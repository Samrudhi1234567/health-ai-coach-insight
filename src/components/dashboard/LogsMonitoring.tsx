
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { usersByCoach, userLogData } from "@/data/mockData";
import { ClipboardList } from "lucide-react";

interface LogsMonitoringProps {
  coachId: number | null;
}

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

const LogsMonitoring = ({ coachId }: LogsMonitoringProps) => {
  const [selectedDuration, setSelectedDuration] = useState<string>("week");
  const [selectedLogType, setSelectedLogType] = useState<string>("food");
  const [missedUsers, setMissedUsers] = useState<Array<{ id: number; name: string; avatarUrl: string; lastLogDate: string }>>([]);

  useEffect(() => {
    console.log("Filtering with:", { coachId, selectedDuration, selectedLogType });
    
    if (coachId && selectedDuration && selectedLogType) {
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

      const coachUsers = usersByCoach[coachId as keyof typeof usersByCoach] || [];
      const coachLogData = userLogData[coachId as keyof typeof userLogData] || {};
      
      console.log("Coach users:", coachUsers.length);
      console.log("Cutoff date:", cutoffDate);

      const usersWhoMissed = coachUsers.filter(user => {
        const userLogs = coachLogData[user.id as keyof typeof coachLogData];
        if (!userLogs || typeof userLogs !== 'object') {
          console.log(`User ${user.id} has no logs`);
          return true; // No log data means they missed it
        }

        const userLogsAny = userLogs as any;
        const lastLogDateStr = userLogsAny.lastLogs?.[selectedLogType];
        
        if (!lastLogDateStr) {
          console.log(`User ${user.id} has no ${selectedLogType} log`);
          return true; // No log for this type
        }

        const lastLogDate = new Date(lastLogDateStr);
        const hasLogged = lastLogDate >= cutoffDate;
        
        console.log(`User ${user.id} last ${selectedLogType} log:`, lastLogDateStr, "Has logged since cutoff:", hasLogged);
        
        return !hasLogged; // Return true if they HAVEN'T logged since cutoff
      }).map(user => {
        const userLogs = coachLogData[user.id as keyof typeof coachLogData];
        let lastLogDate = "Never";
        
        if (userLogs && typeof userLogs === 'object') {
          const userLogsAny = userLogs as any;
          lastLogDate = userLogsAny.lastLogs?.[selectedLogType] || "Never";
        }
        
        return {
          ...user,
          lastLogDate
        };
      });

      console.log("Users who missed:", usersWhoMissed.length);
      setMissedUsers(usersWhoMissed);
    } else {
      setMissedUsers([]);
    }
  }, [coachId, selectedDuration, selectedLogType]);

  if (!coachId) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardList size={18} className="text-health-primary" />
            Logs Monitoring
          </CardTitle>
          <CardDescription>Select a coach to monitor user logging patterns</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ClipboardList size={18} className="text-health-primary" />
          Logs Monitoring
        </CardTitle>
        <CardDescription>Track which users haven't logged specific activities within the selected timeframe</CardDescription>
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
                Users who haven't logged {logTypes.find(l => l.value === selectedLogType)?.label.toLowerCase()} in {durationFilters.find(d => d.value === selectedDuration)?.label.toLowerCase()}
              </h3>
              <Badge variant={missedUsers.length > 0 ? "destructive" : "default"}>
                {missedUsers.length} users
              </Badge>
            </div>

            {missedUsers.length > 0 ? (
              <div className="grid grid-cols-1 gap-3">
                {missedUsers.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatarUrl} alt={user.name} />
                        <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <span className="font-medium text-gray-900">{user.name}</span>
                        <p className="text-sm text-gray-500">ID: {user.id}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Last logged:</p>
                      <p className="text-sm font-medium text-red-600">
                        {user.lastLogDate === "Never" ? "Never" : new Date(user.lastLogDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <ClipboardList size={48} className="mx-auto mb-4 text-gray-300" />
                <p className="text-lg font-medium">Great job! 🎉</p>
                <p>All users have logged their {logTypes.find(l => l.value === selectedLogType)?.label.toLowerCase()} in {durationFilters.find(d => d.value === selectedDuration)?.label.toLowerCase()}.</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LogsMonitoring;
