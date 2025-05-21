
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, AlertCircle } from "lucide-react";
import { userData } from "@/data/mockData";
import { format, parseISO } from "date-fns";

interface CallNotesProps {
  userId: number | null;
}

const CallNotes = ({ userId }: CallNotesProps) => {
  if (!userId || !userData[userId as keyof typeof userData]) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Call Notes Insights</CardTitle>
          <CardDescription>Select a user to view their call notes</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const user = userData[userId as keyof typeof userData];
  const { callNotes } = user;

  // Extract key focus area from latest call note
  const getKeyFocus = () => {
    if (callNotes.length === 0) return null;
    
    // Simple extraction of key focus areas based on keywords in the most recent note
    const latestNote = callNotes[0].note.toLowerCase();
    
    if (latestNote.includes("sleep")) return "Sleep quality improvement";
    if (latestNote.includes("diet") || latestNote.includes("meal") || latestNote.includes("nutrition")) 
      return "Nutrition and meal planning";
    if (latestNote.includes("energy")) return "Energy level management";
    if (latestNote.includes("stress")) return "Stress reduction techniques";
    if (latestNote.includes("exercise") || latestNote.includes("workout")) 
      return "Exercise routine consistency";
    
    return "General health maintenance";
  };

  const keyFocus = getKeyFocus();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare size={18} className="text-health-primary" />
          Call Notes Insights
        </CardTitle>
        <CardDescription>Recent coaching call summaries</CardDescription>
      </CardHeader>
      <CardContent>
        {callNotes.length > 0 ? (
          <div className="space-y-4">
            {keyFocus && (
              <div className="bg-violet-50 p-4 rounded-lg border border-violet-100 mb-4">
                <div className="flex items-start">
                  <AlertCircle size={18} className="text-violet-500 mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-violet-700">Key Focus Area</h3>
                    <p className="text-sm text-violet-600 mt-1">{keyFocus}</p>
                  </div>
                </div>
              </div>
            )}
            
            <h3 className="text-sm font-medium">Recent Call Notes</h3>
            <div className="space-y-3">
              {callNotes.map((note, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-lg ${index === 0 ? 'bg-blue-50 border border-blue-100' : 'bg-gray-50'}`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-medium text-gray-500">
                      {format(parseISO(note.date), "MMM d, yyyy")}
                    </span>
                    {index === 0 && (
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Latest</span>
                    )}
                  </div>
                  <p className="text-sm">{note.note}</p>
                </div>
              ))}
            </div>

            <div className="bg-green-50 p-3 rounded-lg border border-green-100 mt-4">
              <h3 className="text-sm font-medium text-green-700 mb-2">Suggested Discussion Points</h3>
              <ul className="text-sm text-green-600 space-y-1">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Follow up on progress since last session</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Address any challenges with current focus area</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Set specific goals for the upcoming week</span>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-6">
            <MessageSquare size={48} className="text-gray-400 mb-2" />
            <p className="text-gray-600 font-medium">No call notes available</p>
            <p className="text-sm text-gray-500 mt-1">This user doesn't have any recorded coaching calls</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CallNotes;
