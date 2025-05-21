
// Mock data for the AI Coach Dashboard

// Coaches
export const coaches = [
  { id: 1, name: "Dr. Sarah Johnson", specialization: "Nutrition & Weight Management", avatarUrl: "https://randomuser.me/api/portraits/women/32.jpg" },
  { id: 2, name: "Michael Chen", specialization: "Fitness & Strength Training", avatarUrl: "https://randomuser.me/api/portraits/men/33.jpg" },
  { id: 3, name: "Dr. Emily Williams", specialization: "Mental Health & Stress Management", avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 4, name: "Robert Taylor", specialization: "Sleep & Recovery", avatarUrl: "https://randomuser.me/api/portraits/men/41.jpg" }
];

// Users per coach
export const usersByCoach = {
  1: [
    { id: 101, name: "Jessica Brown", avatarUrl: "https://randomuser.me/api/portraits/women/63.jpg" },
    { id: 102, name: "Daniel Wilson", avatarUrl: "https://randomuser.me/api/portraits/men/72.jpg" },
    { id: 103, name: "Amanda Miller", avatarUrl: "https://randomuser.me/api/portraits/women/17.jpg" }
  ],
  2: [
    { id: 201, name: "Thomas Anderson", avatarUrl: "https://randomuser.me/api/portraits/men/91.jpg" },
    { id: 202, name: "Lisa Martinez", avatarUrl: "https://randomuser.me/api/portraits/women/28.jpg" }
  ],
  3: [
    { id: 301, name: "Kevin Harris", avatarUrl: "https://randomuser.me/api/portraits/men/18.jpg" },
    { id: 302, name: "Jennifer Garcia", avatarUrl: "https://randomuser.me/api/portraits/women/39.jpg" },
    { id: 303, name: "Christopher Lee", avatarUrl: "https://randomuser.me/api/portraits/men/59.jpg" }
  ],
  4: [
    { id: 401, name: "Stephanie Clark", avatarUrl: "https://randomuser.me/api/portraits/women/58.jpg" },
    { id: 402, name: "Jason Rodriguez", avatarUrl: "https://randomuser.me/api/portraits/men/29.jpg" }
  ]
};

// App features
export const appFeatures = [
  "Nutrition Tracking",
  "Workout Logging",
  "Sleep Monitoring",
  "Stress Management",
  "Meditation Sessions",
  "Water Intake",
  "Step Counter",
  "Goal Setting",
  "Video Tutorials",
  "HRA Questionnaire"
];

// User detailed data
export const userData = {
  101: {
    personalInfo: {
      age: 34,
      gender: "Female",
      lastAppOpen: "2025-05-18",
      lifestyle: "Sedentary",
      engagementScore: 7.8,
      subscriptionStatus: "Paid",
      bmi: 24.7
    },
    activityInsights: {
      appLaunches: 22,
      daysActive: 18,
      mostActiveFeature: "Nutrition Tracking",
      leastActiveFeature: "Meditation Sessions",
      videosWatched: 8,
      daysInSystem: 87
    },
    featureEngagement: {
      ghostedFeatures: ["Sleep Monitoring", "Meditation Sessions"],
      consistentFeatures: ["Nutrition Tracking", "Water Intake", "Step Counter"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "Acidity", causes: ["Irregular meal times", "High caffeine intake", "Stress"] },
        { issue: "Stress", causes: ["Work pressure", "Sleep deficit", "Lack of recreation"] }
      ]
    },
    callNotes: [
      { date: "2025-05-10", note: "Jessica reported improved energy levels after dietary changes" },
      { date: "2025-05-03", note: "Discussed strategies for consistent meal planning" },
      { date: "2025-04-26", note: "Focus needed on sleep hygiene and evening routine" }
    ]
  },
  102: {
    personalInfo: {
      age: 42,
      gender: "Male",
      lastAppOpen: "2025-05-19",
      lifestyle: "Moderately Active",
      engagementScore: 8.2,
      subscriptionStatus: "Paid",
      bmi: 26.3
    },
    activityInsights: {
      appLaunches: 25,
      daysActive: 21,
      mostActiveFeature: "Workout Logging",
      leastActiveFeature: "Water Intake",
      videosWatched: 12,
      daysInSystem: 120
    },
    featureEngagement: {
      ghostedFeatures: ["Meditation Sessions", "Nutrition Tracking"],
      consistentFeatures: ["Workout Logging", "Step Counter", "Goal Setting"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "High Blood Pressure", causes: ["Salt intake", "Insufficient cardio", "Stress"] },
        { issue: "Back Pain", causes: ["Poor posture", "Weak core muscles", "Long sitting hours"] }
      ]
    },
    callNotes: [
      { date: "2025-05-15", note: "Daniel making good progress with strength training program" },
      { date: "2025-05-08", note: "Needs to improve hydration levels throughout the day" },
      { date: "2025-05-01", note: "Blood pressure showing signs of improvement with new routine" }
    ]
  },
  201: {
    personalInfo: {
      age: 29,
      gender: "Male",
      lastAppOpen: "2025-05-20",
      lifestyle: "Active",
      engagementScore: 9.1,
      subscriptionStatus: "Paid",
      bmi: 23.1
    },
    activityInsights: {
      appLaunches: 28,
      daysActive: 26,
      mostActiveFeature: "Workout Logging",
      leastActiveFeature: "Stress Management",
      videosWatched: 17,
      daysInSystem: 65
    },
    featureEngagement: {
      ghostedFeatures: ["Stress Management", "Meditation Sessions"],
      consistentFeatures: ["Workout Logging", "Nutrition Tracking", "Sleep Monitoring", "Step Counter"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "Muscle Strain", causes: ["Insufficient warm-up", "Overtraining", "Inadequate recovery"] }
      ]
    },
    callNotes: [
      { date: "2025-05-17", note: "Thomas achieved new personal record in strength metrics" },
      { date: "2025-05-10", note: "Discussed importance of rest days in training cycle" },
      { date: "2025-05-03", note: "Need to focus on post-workout recovery strategies" }
    ]
  },
  // Sample for ID 301 - under mental health coach
  301: {
    personalInfo: {
      age: 36,
      gender: "Male",
      lastAppOpen: "2025-05-19",
      lifestyle: "Moderately Active",
      engagementScore: 7.3,
      subscriptionStatus: "Unpaid",
      bmi: 25.8
    },
    activityInsights: {
      appLaunches: 18,
      daysActive: 15,
      mostActiveFeature: "Meditation Sessions",
      leastActiveFeature: "Workout Logging",
      videosWatched: 9,
      daysInSystem: 42
    },
    featureEngagement: {
      ghostedFeatures: ["Workout Logging", "Goal Setting"],
      consistentFeatures: ["Meditation Sessions", "Stress Management", "Sleep Monitoring"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "Anxiety", causes: ["Work stress", "Financial concerns", "Social isolation"] },
        { issue: "Insomnia", causes: ["Evening screen time", "Irregular sleep schedule", "Stress"] }
      ]
    },
    callNotes: [
      { date: "2025-05-16", note: "Kevin reports improved sleep quality after implementing meditation routine" },
      { date: "2025-05-09", note: "Discussed stress triggers and coping mechanisms" },
      { date: "2025-05-02", note: "Need to focus on consistent bedtime routine" }
    ]
  }
};

// Predefined questions
export const predefinedQuestions = {
  engagement: [
    "Which features has the user engaged with most in the past 30 days?",
    "How has the user's app usage frequency changed over time?",
    "Is the user's engagement score improving or declining?",
    "What time of day does the user typically access the app?",
    "How does this user's engagement compare to others with similar profiles?"
  ],
  hraIssues: [
    "What health issues has the user reported in their HRA?",
    "How have the user's reported symptoms changed since their last assessment?",
    "Is the user following recommendations for their health issues?",
    "Which health issues appear to be improving based on recent data?",
    "Are there connections between different health issues the user is experiencing?"
  ],
  ghostedActions: [
    "Which features has the user stopped using recently?",
    "When did the user last track their sleep data?",
    "Has the user completed their weekly check-in questionnaire?",
    "Which recommended activities has the user not started?",
    "What nutrition tracking patterns has the user abandoned?"
  ],
  insights: [
    "What patterns exist in the user's most active days?",
    "Is there a correlation between sleep quality and activity level?",
    "How does nutrition tracking relate to reported energy levels?",
    "What behavior changes correlate with improvement in symptoms?",
    "When is the user most likely to complete recommended actions?"
  ]
};

// Chart data for visualizations
export const chartData = {
  weeklyEngagement: [
    { week: "Week 1", sessions: 12 },
    { week: "Week 2", sessions: 15 },
    { week: "Week 3", sessions: 10 },
    { week: "Week 4", sessions: 18 }
  ],
  featureUsage: [
    { name: "Nutrition Tracking", usage: 78 },
    { name: "Workout Logging", usage: 45 },
    { name: "Sleep Monitoring", usage: 32 },
    { name: "Stress Management", usage: 28 },
    { name: "Meditation Sessions", usage: 15 },
    { name: "Water Intake", usage: 62 },
    { name: "Step Counter", usage: 85 },
    { name: "Goal Setting", usage: 38 },
    { name: "Video Tutorials", usage: 24 },
    { name: "HRA Questionnaire", usage: 12 }
  ],
  dailyAppOpenTime: [
    { day: "Monday", morning: 3, afternoon: 1, evening: 2 },
    { day: "Tuesday", morning: 2, afternoon: 0, evening: 3 },
    { day: "Wednesday", morning: 4, afternoon: 2, evening: 1 },
    { day: "Thursday", morning: 1, afternoon: 3, evening: 2 },
    { day: "Friday", morning: 2, afternoon: 1, evening: 3 },
    { day: "Saturday", morning: 1, afternoon: 4, evening: 2 },
    { day: "Sunday", morning: 0, afternoon: 2, evening: 5 }
  ]
};
