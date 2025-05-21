
import { useState, useEffect } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { coaches } from "@/data/mockData";

interface CoachSelectorProps {
  onCoachSelect: (coachId: number) => void;
}

const CoachSelector = ({ onCoachSelect }: CoachSelectorProps) => {
  const [selectedCoach, setSelectedCoach] = useState<string>("");

  useEffect(() => {
    if (selectedCoach) {
      onCoachSelect(parseInt(selectedCoach));
    }
  }, [selectedCoach, onCoachSelect]);

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="coach-select" className="text-sm font-medium text-gray-700">
        Select Coach
      </label>
      <Select
        value={selectedCoach}
        onValueChange={setSelectedCoach}
      >
        <SelectTrigger id="coach-select" className="w-full">
          <SelectValue placeholder="Select a coach" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Available Coaches</SelectLabel>
            {coaches.map((coach) => (
              <SelectItem key={coach.id} value={coach.id.toString()} className="cursor-pointer">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={coach.avatarUrl} alt={coach.name} />
                    <AvatarFallback>{coach.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <span>{coach.name}</span>
                  <span className="text-xs text-gray-500">({coach.specialization})</span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CoachSelector;
