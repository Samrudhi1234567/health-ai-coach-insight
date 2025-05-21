
import { useState, useEffect } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usersByCoach } from "@/data/mockData";

interface UserSelectorProps {
  coachId: number | null;
  onUserSelect: (userId: number) => void;
}

const UserSelector = ({ coachId, onUserSelect }: UserSelectorProps) => {
  const [selectedUser, setSelectedUser] = useState<string>("");
  const [availableUsers, setAvailableUsers] = useState<Array<{id: number, name: string, avatarUrl: string}>>([]);

  useEffect(() => {
    if (coachId) {
      setAvailableUsers(usersByCoach[coachId as keyof typeof usersByCoach] || []);
      setSelectedUser(""); // Reset user selection when coach changes
    }
  }, [coachId]);

  useEffect(() => {
    if (selectedUser) {
      onUserSelect(parseInt(selectedUser));
    }
  }, [selectedUser, onUserSelect]);

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="user-select" className="text-sm font-medium text-gray-700">
        Select User
      </label>
      <Select
        value={selectedUser}
        onValueChange={setSelectedUser}
        disabled={!coachId || availableUsers.length === 0}
      >
        <SelectTrigger id="user-select" className="w-full">
          <SelectValue placeholder={coachId ? "Select a user" : "Select a coach first"} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Available Users</SelectLabel>
            {availableUsers.map((user) => (
              <SelectItem key={user.id} value={user.id.toString()} className="cursor-pointer">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <span>{user.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default UserSelector;
