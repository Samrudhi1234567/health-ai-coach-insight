// Mock data for the AI Coach Dashboard

// Coaches
export const coaches = [
  { id: 1, name: "Dr. Sarah Johnson", specialization: "Nutrition & Weight Management", avatarUrl: "https://randomuser.me/api/portraits/women/32.jpg" },
  { id: 2, name: "Michael Chen", specialization: "Fitness & Strength Training", avatarUrl: "https://randomuser.me/api/portraits/men/33.jpg" },
  { id: 3, name: "Dr. Emily Williams", specialization: "Mental Health & Stress Management", avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 4, name: "Robert Taylor", specialization: "Sleep & Recovery", avatarUrl: "https://randomuser.me/api/portraits/men/41.jpg" }
];

// Users per coach (expanded to 5+ users per coach)
export const usersByCoach = {
  1: [
    { id: 101, name: "Jessica Brown", avatarUrl: "https://randomuser.me/api/portraits/women/63.jpg" },
    { id: 102, name: "Daniel Wilson", avatarUrl: "https://randomuser.me/api/portraits/men/72.jpg" },
    { id: 103, name: "Amanda Miller", avatarUrl: "https://randomuser.me/api/portraits/women/17.jpg" },
    { id: 104, name: "Ryan Johnson", avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg" },
    { id: 105, name: "Sophia Davis", avatarUrl: "https://randomuser.me/api/portraits/women/24.jpg" },
    { id: 106, name: "Marcus Thompson", avatarUrl: "https://randomuser.me/api/portraits/men/67.jpg" }
  ],
  2: [
    { id: 201, name: "Thomas Anderson", avatarUrl: "https://randomuser.me/api/portraits/men/91.jpg" },
    { id: 202, name: "Lisa Martinez", avatarUrl: "https://randomuser.me/api/portraits/women/28.jpg" },
    { id: 203, name: "Alex Rodriguez", avatarUrl: "https://randomuser.me/api/portraits/men/15.jpg" },
    { id: 204, name: "Emma Thompson", avatarUrl: "https://randomuser.me/api/portraits/women/52.jpg" },
    { id: 205, name: "Jake Williams", avatarUrl: "https://randomuser.me/api/portraits/men/38.jpg" },
    { id: 206, name: "Olivia Brown", avatarUrl: "https://randomuser.me/api/portraits/women/71.jpg" }
  ],
  3: [
    { id: 301, name: "Kevin Harris", avatarUrl: "https://randomuser.me/api/portraits/men/18.jpg" },
    { id: 302, name: "Jennifer Garcia", avatarUrl: "https://randomuser.me/api/portraits/women/39.jpg" },
    { id: 303, name: "Christopher Lee", avatarUrl: "https://randomuser.me/api/portraits/men/59.jpg" },
    { id: 304, name: "Sarah Wilson", avatarUrl: "https://randomuser.me/api/portraits/women/82.jpg" },
    { id: 305, name: "Michael Davis", avatarUrl: "https://randomuser.me/api/portraits/men/26.jpg" },
    { id: 306, name: "Rachel Green", avatarUrl: "https://randomuser.me/api/portraits/women/34.jpg" }
  ],
  4: [
    { id: 401, name: "Stephanie Clark", avatarUrl: "https://randomuser.me/api/portraits/women/58.jpg" },
    { id: 402, name: "Jason Rodriguez", avatarUrl: "https://randomuser.me/api/portraits/men/29.jpg" },
    { id: 403, name: "Linda Martinez", avatarUrl: "https://randomuser.me/api/portraits/women/47.jpg" },
    { id: 404, name: "David Miller", avatarUrl: "https://randomuser.me/api/portraits/men/84.jpg" },
    { id: 405, name: "Ashley Taylor", avatarUrl: "https://randomuser.me/api/portraits/women/65.jpg" },
    { id: 406, name: "Brian Anderson", avatarUrl: "https://randomuser.me/api/portraits/men/53.jpg" }
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

// Log types for the new logs monitoring page
export const logTypes = [
  "hydration",
  "food", 
  "steps",
  "activity",
  "meditation",
  "sleep",
  "weight"
];

// User detailed data (expanded for all users)
export const userData = {
  // Dr. Sarah Johnson's users (Nutrition & Weight Management)
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
      { date: "2025-05-03", note: "Discussed strategies for consistent meal planning" }
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
        { issue: "High Blood Pressure", causes: ["Salt intake", "Insufficient cardio", "Stress"] }
      ]
    },
    callNotes: [
      { date: "2025-05-15", note: "Daniel making good progress with strength training program" }
    ]
  },
  103: {
    personalInfo: {
      age: 28,
      gender: "Female",
      lastAppOpen: "2025-05-20",
      lifestyle: "Active",
      engagementScore: 6.5,
      subscriptionStatus: "Unpaid",
      bmi: 22.1
    },
    activityInsights: {
      appLaunches: 15,
      daysActive: 12,
      mostActiveFeature: "Water Intake",
      leastActiveFeature: "Goal Setting",
      videosWatched: 5,
      daysInSystem: 45
    },
    featureEngagement: {
      ghostedFeatures: ["Goal Setting", "HRA Questionnaire"],
      consistentFeatures: ["Water Intake", "Nutrition Tracking"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "Iron Deficiency", causes: ["Poor diet", "Heavy periods", "Low iron absorption"] }
      ]
    },
    callNotes: [
      { date: "2025-05-12", note: "Amanda needs to focus on iron-rich foods" }
    ]
  },
  104: {
    personalInfo: {
      age: 35,
      gender: "Male",
      lastAppOpen: "2025-05-17",
      lifestyle: "Sedentary",
      engagementScore: 4.2,
      subscriptionStatus: "Paid",
      bmi: 28.5
    },
    activityInsights: {
      appLaunches: 8,
      daysActive: 6,
      mostActiveFeature: "Step Counter",
      leastActiveFeature: "Nutrition Tracking",
      videosWatched: 2,
      daysInSystem: 30
    },
    featureEngagement: {
      ghostedFeatures: ["Nutrition Tracking", "Workout Logging", "Water Intake"],
      consistentFeatures: ["Step Counter"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "Obesity", causes: ["Sedentary lifestyle", "Poor eating habits", "Stress eating"] }
      ]
    },
    callNotes: [
      { date: "2025-05-14", note: "Ryan struggling with motivation, needs more support" }
    ]
  },
  105: {
    personalInfo: {
      age: 26,
      gender: "Female",
      lastAppOpen: "2025-05-21",
      lifestyle: "Active",
      engagementScore: 9.1,
      subscriptionStatus: "Paid",
      bmi: 21.8
    },
    activityInsights: {
      appLaunches: 35,
      daysActive: 28,
      mostActiveFeature: "Nutrition Tracking",
      leastActiveFeature: "Video Tutorials",
      videosWatched: 15,
      daysInSystem: 95
    },
    featureEngagement: {
      ghostedFeatures: ["Video Tutorials"],
      consistentFeatures: ["Nutrition Tracking", "Water Intake", "Step Counter", "Goal Setting"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "Perfectionism", causes: ["High standards", "Fear of failure", "Social pressure"] }
      ]
    },
    callNotes: [
      { date: "2025-05-18", note: "Sophia excelling in all areas, might need work-life balance guidance" }
    ]
  },
  106: {
    personalInfo: {
      age: 38,
      gender: "Male",
      lastAppOpen: "2025-05-16",
      lifestyle: "Moderately Active",
      engagementScore: 5.8,
      subscriptionStatus: "Unpaid",
      bmi: 25.2
    },
    activityInsights: {
      appLaunches: 12,
      daysActive: 10,
      mostActiveFeature: "Sleep Monitoring",
      leastActiveFeature: "Meditation Sessions",
      videosWatched: 4,
      daysInSystem: 60
    },
    featureEngagement: {
      ghostedFeatures: ["Meditation Sessions", "HRA Questionnaire"],
      consistentFeatures: ["Sleep Monitoring", "Step Counter"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "Sleep Apnea", causes: ["Weight", "Poor sleep hygiene", "Stress"] }
      ]
    },
    callNotes: [
      { date: "2025-05-11", note: "Marcus reports better sleep quality with new routine" }
    ]
  },

  // Michael Chen's users (Fitness & Strength Training)
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
      { date: "2025-05-17", note: "Thomas achieved new personal record in strength metrics" }
    ]
  },
  202: {
    personalInfo: {
      age: 31,
      gender: "Female",
      lastAppOpen: "2025-05-19",
      lifestyle: "Very Active",
      engagementScore: 8.7,
      subscriptionStatus: "Paid",
      bmi: 22.4
    },
    activityInsights: {
      appLaunches: 24,
      daysActive: 22,
      mostActiveFeature: "Workout Logging",
      leastActiveFeature: "Water Intake",
      videosWatched: 14,
      daysInSystem: 78
    },
    featureEngagement: {
      ghostedFeatures: ["Water Intake"],
      consistentFeatures: ["Workout Logging", "Nutrition Tracking", "Goal Setting"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "Overtraining Syndrome", causes: ["Excessive training", "Inadequate rest", "Poor nutrition timing"] }
      ]
    },
    callNotes: [
      { date: "2025-05-16", note: "Lisa needs to incorporate more rest days" }
    ]
  },
  203: {
    personalInfo: {
      age: 25,
      gender: "Male",
      lastAppOpen: "2025-05-21",
      lifestyle: "Active",
      engagementScore: 7.3,
      subscriptionStatus: "Paid",
      bmi: 24.8
    },
    activityInsights: {
      appLaunches: 19,
      daysActive: 16,
      mostActiveFeature: "Step Counter",
      leastActiveFeature: "Meditation Sessions",
      videosWatched: 9,
      daysInSystem: 52
    },
    featureEngagement: {
      ghostedFeatures: ["Meditation Sessions", "HRA Questionnaire"],
      consistentFeatures: ["Step Counter", "Workout Logging"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "Knee Pain", causes: ["Running on hard surfaces", "Poor form", "Inadequate stretching"] }
      ]
    },
    callNotes: [
      { date: "2025-05-13", note: "Alex needs to focus on proper running form" }
    ]
  },
  204: {
    personalInfo: {
      age: 33,
      gender: "Female",
      lastAppOpen: "2025-05-18",
      lifestyle: "Moderately Active",
      engagementScore: 6.9,
      subscriptionStatus: "Unpaid",
      bmi: 23.7
    },
    activityInsights: {
      appLaunches: 16,
      daysActive: 13,
      mostActiveFeature: "Nutrition Tracking",
      leastActiveFeature: "Video Tutorials",
      videosWatched: 6,
      daysInSystem: 40
    },
    featureEngagement: {
      ghostedFeatures: ["Video Tutorials", "Goal Setting"],
      consistentFeatures: ["Nutrition Tracking", "Water Intake"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "Lower Back Pain", causes: ["Weak core", "Poor posture", "Sedentary work"] }
      ]
    },
    callNotes: [
      { date: "2025-05-15", note: "Emma showing improvement in core strength exercises" }
    ]
  },
  205: {
    personalInfo: {
      age: 27,
      gender: "Male",
      lastAppOpen: "2025-05-20",
      lifestyle: "Very Active",
      engagementScore: 8.9,
      subscriptionStatus: "Paid",
      bmi: 22.1
    },
    activityInsights: {
      appLaunches: 26,
      daysActive: 24,
      mostActiveFeature: "Workout Logging",
      leastActiveFeature: "Stress Management",
      videosWatched: 16,
      daysInSystem: 88
    },
    featureEngagement: {
      ghostedFeatures: ["Stress Management"],
      consistentFeatures: ["Workout Logging", "Nutrition Tracking", "Sleep Monitoring", "Water Intake"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "Exercise Addiction", causes: ["Compulsive behavior", "Body image issues", "Perfectionism"] }
      ]
    },
    callNotes: [
      { date: "2025-05-19", note: "Jake needs guidance on balanced approach to fitness" }
    ]
  },
  206: {
    personalInfo: {
      age: 30,
      gender: "Female",
      lastAppOpen: "2025-05-17",
      lifestyle: "Active",
      engagementScore: 7.6,
      subscriptionStatus: "Paid",
      bmi: 21.9
    },
    activityInsights: {
      appLaunches: 20,
      daysActive: 17,
      mostActiveFeature: "Goal Setting",
      leastActiveFeature: "HRA Questionnaire",
      videosWatched: 11,
      daysInSystem: 71
    },
    featureEngagement: {
      ghostedFeatures: ["HRA Questionnaire"],
      consistentFeatures: ["Goal Setting", "Workout Logging", "Step Counter"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "Shoulder Impingement", causes: ["Poor form", "Muscle imbalances", "Overuse"] }
      ]
    },
    callNotes: [
      { date: "2025-05-14", note: "Olivia making progress with shoulder rehabilitation exercises" }
    ]
  },

  // Dr. Emily Williams' users (Mental Health & Stress Management)
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
      { date: "2025-05-16", note: "Kevin reports improved sleep quality after implementing meditation routine" }
    ]
  },
  302: {
    personalInfo: {
      age: 29,
      gender: "Female",
      lastAppOpen: "2025-05-21",
      lifestyle: "Sedentary",
      engagementScore: 8.4,
      subscriptionStatus: "Paid",
      bmi: 24.2
    },
    activityInsights: {
      appLaunches: 23,
      daysActive: 20,
      mostActiveFeature: "Stress Management",
      leastActiveFeature: "Step Counter",
      videosWatched: 13,
      daysInSystem: 67
    },
    featureEngagement: {
      ghostedFeatures: ["Step Counter", "Workout Logging"],
      consistentFeatures: ["Stress Management", "Meditation Sessions", "Sleep Monitoring"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "Depression", causes: ["Work burnout", "Social isolation", "Hormonal changes"] }
      ]
    },
    callNotes: [
      { date: "2025-05-18", note: "Jennifer showing improvement in mood tracking consistency" }
    ]
  },
  303: {
    personalInfo: {
      age: 41,
      gender: "Male",
      lastAppOpen: "2025-05-20",
      lifestyle: "Sedentary",
      engagementScore: 6.1,
      subscriptionStatus: "Paid",
      bmi: 27.3
    },
    activityInsights: {
      appLaunches: 14,
      daysActive: 11,
      mostActiveFeature: "Sleep Monitoring",
      leastActiveFeature: "Nutrition Tracking",
      videosWatched: 7,
      daysInSystem: 85
    },
    featureEngagement: {
      ghostedFeatures: ["Nutrition Tracking", "Water Intake", "Step Counter"],
      consistentFeatures: ["Sleep Monitoring", "Stress Management"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "Chronic Stress", causes: ["Work demands", "Family responsibilities", "Financial pressure"] }
      ]
    },
    callNotes: [
      { date: "2025-05-17", note: "Christopher needs to work on stress coping strategies" }
    ]
  },
  304: {
    personalInfo: {
      age: 32,
      gender: "Female",
      lastAppOpen: "2025-05-19",
      lifestyle: "Moderately Active",
      engagementScore: 7.8,
      subscriptionStatus: "Paid",
      bmi: 23.5
    },
    activityInsights: {
      appLaunches: 21,
      daysActive: 18,
      mostActiveFeature: "Meditation Sessions",
      leastActiveFeature: "Goal Setting",
      videosWatched: 10,
      daysInSystem: 76
    },
    featureEngagement: {
      ghostedFeatures: ["Goal Setting"],
      consistentFeatures: ["Meditation Sessions", "Stress Management", "Sleep Monitoring", "Water Intake"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "Panic Attacks", causes: ["High stress", "Caffeine sensitivity", "Poor sleep"] }
      ]
    },
    callNotes: [
      { date: "2025-05-16", note: "Sarah responding well to breathing exercises" }
    ]
  },
  305: {
    personalInfo: {
      age: 28,
      gender: "Male",
      lastAppOpen: "2025-05-18",
      lifestyle: "Active",
      engagementScore: 5.9,
      subscriptionStatus: "Unpaid",
      bmi: 24.7
    },
    activityInsights: {
      appLaunches: 11,
      daysActive: 9,
      mostActiveFeature: "Video Tutorials",
      leastActiveFeature: "HRA Questionnaire",
      videosWatched: 8,
      daysInSystem: 35
    },
    featureEngagement: {
      ghostedFeatures: ["HRA Questionnaire", "Goal Setting"],
      consistentFeatures: ["Video Tutorials", "Meditation Sessions"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "Social Anxiety", causes: ["Past trauma", "Low self-esteem", "Perfectionism"] }
      ]
    },
    callNotes: [
      { date: "2025-05-15", note: "Michael making slow but steady progress with exposure therapy techniques" }
    ]
  },
  306: {
    personalInfo: {
      age: 34,
      gender: "Female",
      lastAppOpen: "2025-05-21",
      lifestyle: "Moderately Active",
      engagementScore: 8.6,
      subscriptionStatus: "Paid",
      bmi: 22.8
    },
    activityInsights: {
      appLaunches: 25,
      daysActive: 22,
      mostActiveFeature: "Stress Management",
      leastActiveFeature: "Workout Logging",
      videosWatched: 14,
      daysInSystem: 92
    },
    featureEngagement: {
      ghostedFeatures: ["Workout Logging"],
      consistentFeatures: ["Stress Management", "Meditation Sessions", "Sleep Monitoring", "Nutrition Tracking"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "Burnout", causes: ["Work overload", "Lack of boundaries", "Poor self-care"] }
      ]
    },
    callNotes: [
      { date: "2025-05-19", note: "Rachel implementing better work-life balance strategies" }
    ]
  },

  // Robert Taylor's users (Sleep & Recovery)
  401: {
    personalInfo: {
      age: 37,
      gender: "Female",
      lastAppOpen: "2025-05-20",
      lifestyle: "Moderately Active",
      engagementScore: 7.9,
      subscriptionStatus: "Paid",
      bmi: 25.1
    },
    activityInsights: {
      appLaunches: 22,
      daysActive: 19,
      mostActiveFeature: "Sleep Monitoring",
      leastActiveFeature: "Workout Logging",
      videosWatched: 12,
      daysInSystem: 89
    },
    featureEngagement: {
      ghostedFeatures: ["Workout Logging"],
      consistentFeatures: ["Sleep Monitoring", "Stress Management", "Water Intake"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "Chronic Insomnia", causes: ["Stress", "Irregular schedule", "Poor sleep hygiene"] }
      ]
    },
    callNotes: [
      { date: "2025-05-18", note: "Stephanie showing improvement with new sleep routine" }
    ]
  },
  402: {
    personalInfo: {
      age: 31,
      gender: "Male",
      lastAppOpen: "2025-05-19",
      lifestyle: "Active",
      engagementScore: 8.3,
      subscriptionStatus: "Paid",
      bmi: 23.9
    },
    activityInsights: {
      appLaunches: 24,
      daysActive: 21,
      mostActiveFeature: "Sleep Monitoring",
      leastActiveFeature: "Meditation Sessions",
      videosWatched: 15,
      daysInSystem: 73
    },
    featureEngagement: {
      ghostedFeatures: ["Meditation Sessions"],
      consistentFeatures: ["Sleep Monitoring", "Workout Logging", "Nutrition Tracking"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "Sleep Apnea", causes: ["Weight", "Alcohol consumption", "Sleep position"] }
      ]
    },
    callNotes: [
      { date: "2025-05-17", note: "Jason considering sleep study consultation" }
    ]
  },
  403: {
    personalInfo: {
      age: 44,
      gender: "Female",
      lastAppOpen: "2025-05-18",
      lifestyle: "Sedentary",
      engagementScore: 6.7,
      subscriptionStatus: "Unpaid",
      bmi: 26.8
    },
    activityInsights: {
      appLaunches: 15,
      daysActive: 12,
      mostActiveFeature: "Sleep Monitoring",
      leastActiveFeature: "Step Counter",
      videosWatched: 6,
      daysInSystem: 58
    },
    featureEngagement: {
      ghostedFeatures: ["Step Counter", "Workout Logging", "Goal Setting"],
      consistentFeatures: ["Sleep Monitoring", "Stress Management"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "Restless Leg Syndrome", causes: ["Iron deficiency", "Caffeine", "Stress"] }
      ]
    },
    callNotes: [
      { date: "2025-05-16", note: "Linda needs iron level testing" }
    ]
  },
  404: {
    personalInfo: {
      age: 39,
      gender: "Male",
      lastAppOpen: "2025-05-21",
      lifestyle: "Moderately Active",
      engagementScore: 7.4,
      subscriptionStatus: "Paid",
      bmi: 24.6
    },
    activityInsights: {
      appLaunches: 18,
      daysActive: 15,
      mostActiveFeature: "Sleep Monitoring",
      leastActiveFeature: "Water Intake",
      videosWatched: 9,
      daysInSystem: 64
    },
    featureEngagement: {
      ghostedFeatures: ["Water Intake", "HRA Questionnaire"],
      consistentFeatures: ["Sleep Monitoring", "Nutrition Tracking", "Step Counter"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "Shift Work Sleep Disorder", causes: ["Irregular schedule", "Light exposure", "Poor sleep environment"] }
      ]
    },
    callNotes: [
      { date: "2025-05-20", note: "David adapting well to shift work sleep strategies" }
    ]
  },
  405: {
    personalInfo: {
      age: 26,
      gender: "Female",
      lastAppOpen: "2025-05-19",
      lifestyle: "Active",
      engagementScore: 8.8,
      subscriptionStatus: "Paid",
      bmi: 21.5
    },
    activityInsights: {
      appLaunches: 27,
      daysActive: 24,
      mostActiveFeature: "Sleep Monitoring",
      leastActiveFeature: "Video Tutorials",
      videosWatched: 16,
      daysInSystem: 81
    },
    featureEngagement: {
      ghostedFeatures: ["Video Tutorials"],
      consistentFeatures: ["Sleep Monitoring", "Workout Logging", "Nutrition Tracking", "Meditation Sessions"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "Delayed Sleep Phase", causes: ["Natural circadian rhythm", "Evening light exposure", "Stress"] }
      ]
    },
    callNotes: [
      { date: "2025-05-17", note: "Ashley making excellent progress with light therapy" }
    ]
  },
  406: {
    personalInfo: {
      age: 33,
      gender: "Male",
      lastAppOpen: "2025-05-20",
      lifestyle: "Sedentary",
      engagementScore: 5.2,
      subscriptionStatus: "Unpaid",
      bmi: 28.1
    },
    activityInsights: {
      appLaunches: 10,
      daysActive: 8,
      mostActiveFeature: "Sleep Monitoring",
      leastActiveFeature: "Nutrition Tracking",
      videosWatched: 4,
      daysInSystem: 47
    },
    featureEngagement: {
      ghostedFeatures: ["Nutrition Tracking", "Workout Logging", "Goal Setting", "Water Intake"],
      consistentFeatures: ["Sleep Monitoring"]
    },
    healthAssessment: {
      severeIssues: [
        { issue: "Chronic Fatigue", causes: ["Poor sleep quality", "Sedentary lifestyle", "Depression"] }
      ]
    },
    callNotes: [
      { date: "2025-05-18", note: "Brian needs comprehensive approach to address fatigue" }
    ]
  }
};

// User-specific predefined questions based on their data and issues
export const userSpecificQuestions = {
  101: {
    engagement: [
      "How has Jessica's nutrition tracking consistency improved her dietary habits?",
      "What time of day does Jessica typically log her meals?",
      "Is Jessica's water intake tracking correlating with her energy levels?"
    ],
    hraIssues: [
      "How is Jessica managing her acidity issues with dietary changes?",
      "What stress management techniques has Jessica tried?",
      "Are Jessica's irregular meal times improving?"
    ],
    ghostedActions: [
      "When did Jessica last use the meditation feature?",
      "Has Jessica tried the sleep monitoring feature?",
      "What prevented Jessica from completing her weekly stress assessment?"
    ],
    insights: [
      "Is there a pattern between Jessica's meal timing and energy levels?",
      "How does Jessica's caffeine intake affect her acidity symptoms?",
      "What correlation exists between Jessica's work stress and eating patterns?"
    ]
  },
  102: {
    engagement: [
      "How consistent is Daniel with his workout logging?",
      "What types of exercises does Daniel log most frequently?",
      "Is Daniel's app usage higher on workout days?"
    ],
    hraIssues: [
      "How is Daniel's blood pressure responding to his fitness routine?",
      "What dietary changes has Daniel made to reduce sodium intake?",
      "Is Daniel's back pain improving with core strengthening?"
    ],
    ghostedActions: [
      "When did Daniel last track his water intake?",
      "Has Daniel used the meditation sessions for stress relief?",
      "What nutrition tracking habits has Daniel abandoned?"
    ],
    insights: [
      "Is there correlation between Daniel's workout intensity and sleep quality?",
      "How does Daniel's hydration affect his workout performance?",
      "What behavior changes correlate with Daniel's blood pressure improvements?"
    ]
  },
  // Add more user-specific questions for other users...
  201: {
    engagement: [
      "How has Thomas's workout logging evolved over his 65 days in the system?",
      "What types of strength training does Thomas log most frequently?",
      "Is Thomas's high engagement score sustainable long-term?"
    ],
    hraIssues: [
      "How is Thomas managing his muscle strain recovery?",
      "What warm-up routines has Thomas implemented?",
      "Is Thomas following proper recovery protocols?"
    ],
    ghostedActions: [
      "When did Thomas last engage with stress management features?",
      "Has Thomas tried the meditation sessions for recovery?",
      "What stress management tools has Thomas ignored?"
    ],
    insights: [
      "Is there correlation between Thomas's training intensity and injury risk?",
      "How does Thomas's sleep quality affect his workout performance?",
      "What patterns exist in Thomas's most productive training days?"
    ]
  }
};

// General predefined questions (fallback)
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

// Mock data for logs monitoring (simulating which users haven't logged specific activities)
export const userLogData = {
  1: { // Dr. Sarah Johnson's users
    101: { // Jessica Brown
      lastLogs: {
        hydration: "2025-05-29", // today
        food: "2025-05-29", // today
        steps: "2025-05-28", // yesterday
        activity: "2025-05-27", // 2 days ago
        meditation: "2025-05-20", // over a week ago
        sleep: "2025-05-29", // today
        weight: "2025-05-25" // 4 days ago
      }
    },
    102: { // Daniel Wilson
      lastLogs: {
        hydration: "2025-05-22", // week ago
        food: "2025-05-28", // yesterday
        steps: "2025-05-29", // today
        activity: "2025-05-29", // today
        meditation: "2025-05-15", // 2 weeks ago
        sleep: "2025-05-28", // yesterday
        weight: "2025-05-26" // 3 days ago
      }
    },
    103: { // Amanda Miller
      lastLogs: {
        hydration: "2025-05-29", // today
        food: "2025-05-29", // today
        steps: "2025-05-27", // 2 days ago
        activity: "2025-05-26", // 3 days ago
        meditation: "2025-05-23", // 6 days ago
        sleep: "2025-05-28", // yesterday
        weight: "2025-05-18" // over a week ago
      }
    },
    104: { // Ryan Johnson - low engagement user
      lastLogs: {
        hydration: "2025-05-20", // over a week ago
        food: "2025-05-21", // over a week ago
        steps: "2025-05-27", // 2 days ago
        activity: "2025-05-19", // 10 days ago
        meditation: "2025-05-10", // almost 3 weeks ago
        sleep: "2025-05-26", // 3 days ago
        weight: "2025-05-24" // 5 days ago
      }
    },
    105: { // Sophia Davis - high engagement user
      lastLogs: {
        hydration: "2025-05-29", // today
        food: "2025-05-29", // today
        steps: "2025-05-29", // today
        activity: "2025-05-29", // today
        meditation: "2025-05-28", // yesterday
        sleep: "2025-05-29", // today
        weight: "2025-05-29" // today
      }
    },
    106: { // Marcus Thompson
      lastLogs: {
        hydration: "2025-05-26", // 3 days ago
        food: "2025-05-25", // 4 days ago
        steps: "2025-05-23", // 6 days ago
        activity: "2025-05-22", // week ago
        meditation: "2025-05-16", // almost 2 weeks ago
        sleep: "2025-05-28", // yesterday
        weight: "2025-05-20" // over a week ago
      }
    }
  },
  2: { // Michael Chen's users
    201: { // Thomas Anderson
      lastLogs: {
        hydration: "2025-05-28", // yesterday
        food: "2025-05-29", // today
        steps: "2025-05-29", // today
        activity: "2025-05-29", // today
        meditation: "2025-05-17", // almost 2 weeks ago
        sleep: "2025-05-28", // yesterday
        weight: "2025-05-27" // 2 days ago
      }
    },
    202: { // Lisa Martinez
      lastLogs: {
        hydration: "2025-05-23", // 6 days ago
        food: "2025-05-28", // yesterday
        steps: "2025-05-29", // today
        activity: "2025-05-29", // today
        meditation: "2025-05-25", // 4 days ago
        sleep: "2025-05-28", // yesterday
        weight: "2025-05-26" // 3 days ago
      }
    },
    203: { // Alex Rodriguez
      lastLogs: {
        hydration: "2025-05-29", // today
        food: "2025-05-27", // 2 days ago
        steps: "2025-05-29", // today
        activity: "2025-05-29", // today
        meditation: "2025-05-14", // 2 weeks ago
        sleep: "2025-05-28", // yesterday
        weight: "2025-05-24" // 5 days ago
      }
    },
    204: { // Emma Thompson
      lastLogs: {
        hydration: "2025-05-27", // 2 days ago
        food: "2025-05-26", // 3 days ago
        steps: "2025-05-25", // 4 days ago
        activity: "2025-05-24", // 5 days ago
        meditation: "2025-05-22", // week ago
        sleep: "2025-05-27", // 2 days ago
        weight: "2025-05-19" // 10 days ago
      }
    },
    205: { // Jake Williams
      lastLogs: {
        hydration: "2025-05-29", // today
        food: "2025-05-29", // today
        steps: "2025-05-29", // today
        activity: "2025-05-29", // today
        meditation: "2025-05-21", // over a week ago
        sleep: "2025-05-29", // today
        weight: "2025-05-28" // yesterday
      }
    },
    206: { // Olivia Brown
      lastLogs: {
        hydration: "2025-05-25", // 4 days ago
        food: "2025-05-24", // 5 days ago
        steps: "2025-05-28", // yesterday
        activity: "2025-05-28", // yesterday
        meditation: "2025-05-26", // 3 days ago
        sleep: "2025-05-27", // 2 days ago
        weight: "2025-05-18" // over a week ago
      }
    }
  },
  3: { // Dr. Emily Williams' users
    301: { // Kevin Harris
      lastLogs: {
        hydration: "2025-05-26", // 3 days ago
        food: "2025-05-25", // 4 days ago
        steps: "2025-05-23", // 6 days ago
        activity: "2025-05-20", // over a week ago
        meditation: "2025-05-29", // today
        sleep: "2025-05-29", // today
        weight: "2025-05-22" // week ago
      }
    },
    302: { // Jennifer Garcia
      lastLogs: {
        hydration: "2025-05-28", // yesterday
        food: "2025-05-27", // 2 days ago
        steps: "2025-05-24", // 5 days ago
        activity: "2025-05-21", // over a week ago
        meditation: "2025-05-29", // today
        sleep: "2025-05-29", // today
        weight: "2025-05-25" // 4 days ago
      }
    },
    303: { // Christopher Lee
      lastLogs: {
        hydration: "2025-05-22", // week ago
        food: "2025-05-20", // over a week ago
        steps: "2025-05-23", // 6 days ago
        activity: "2025-05-19", // 10 days ago
        meditation: "2025-05-28", // yesterday
        sleep: "2025-05-29", // today
        weight: "2025-05-24" // 5 days ago
      }
    },
    304: { // Sarah Wilson
      lastLogs: {
        hydration: "2025-05-28", // yesterday
        food: "2025-05-27", // 2 days ago
        steps: "2025-05-26", // 3 days ago
        activity: "2025-05-25", // 4 days ago
        meditation: "2025-05-29", // today
        sleep: "2025-05-29", // today
        weight: "2025-05-23" // 6 days ago
      }
    },
    305: { // Michael Davis
      lastLogs: {
        hydration: "2025-05-25", // 4 days ago
        food: "2025-05-24", // 5 days ago
        steps: "2025-05-27", // 2 days ago
        activity: "2025-05-28", // yesterday
        meditation: "2025-05-28", // yesterday
        sleep: "2025-05-26", // 3 days ago
        weight: "2025-05-17" // almost 2 weeks ago
      }
    },
    306: { // Rachel Green
      lastLogs: {
        hydration: "2025-05-29", // today
        food: "2025-05-28", // yesterday
        steps: "2025-05-27", // 2 days ago
        activity: "2025-05-23", // 6 days ago
        meditation: "2025-05-29", // today
        sleep: "2025-05-29", // today
        weight: "2025-05-26" // 3 days ago
      }
    }
  },
  4: { // Robert Taylor's users
    401: { // Stephanie Clark
      lastLogs: {
        hydration: "2025-05-28", // yesterday
        food: "2025-05-27", // 2 days ago
        steps: "2025-05-26", // 3 days ago
        activity: "2025-05-22", // week ago
        meditation: "2025-05-26", // 3 days ago
        sleep: "2025-05-29", // today
        weight: "2025-05-25" // 4 days ago
      }
    },
    402: { // Jason Rodriguez
      lastLogs: {
        hydration: "2025-05-26", // 3 days ago
        food: "2025-05-28", // yesterday
        steps: "2025-05-29", // today
        activity: "2025-05-28", // yesterday
        meditation: "2025-05-18", // over a week ago
        sleep: "2025-05-29", // today
        weight: "2025-05-24" // 5 days ago
      }
    },
    403: { // Linda Martinez
      lastLogs: {
        hydration: "2025-05-24", // 5 days ago
        food: "2025-05-23", // 6 days ago
        steps: "2025-05-21", // over a week ago
        activity: "2025-05-19", // 10 days ago
        meditation: "2025-05-25", // 4 days ago
        sleep: "2025-05-27", // 2 days ago
        weight: "2025-05-20" // over a week ago
      }
    },
    404: { // David Miller
      lastLogs: {
        hydration: "2025-05-24", // 5 days ago
        food: "2025-05-29", // today
        steps: "2025-05-29", // today
        activity: "2025-05-28", // yesterday
        meditation: "2025-05-26", // 3 days ago
        sleep: "2025-05-29", // today
        weight: "2025-05-27" // 2 days ago
      }
    },
    405: { // Ashley Taylor
      lastLogs: {
        hydration: "2025-05-29", // today
        food: "2025-05-29", // today
        steps: "2025-05-29", // today
        activity: "2025-05-28", // yesterday
        meditation: "2025-05-29", // today
        sleep: "2025-05-29", // today
        weight: "2025-05-28" // yesterday
      }
    },
    406: { // Brian Anderson - low engagement user
      lastLogs: {
        hydration: "2025-05-21", // over a week ago
        food: "2025-05-20", // over a week ago
        steps: "2025-05-25", // 4 days ago
        activity: "2025-05-18", // over a week ago
        meditation: "2025-05-27", // 2 days ago
        sleep: "2025-05-28", // yesterday
        weight: "2025-05-22" // week ago
      }
    }
  }
};

// User-specific responses for AskAnything component
export const userSpecificResponses = {
  // Dr. Sarah Johnson's users (Nutrition & Weight Management)
  101: { // Jessica Brown
    sleep: {
      answer: "Jessica averages 6.3 hours of sleep, struggling with late-night meals affecting her rest. Her acidity issues often wake her up around 2-3 AM.",
      chartType: "line",
      data: [
        { day: "Monday", hours: 6.0 },
        { day: "Tuesday", hours: 6.5 },
        { day: "Wednesday", hours: 5.8 },
        { day: "Thursday", hours: 6.2 },
        { day: "Friday", hours: 6.8 },
        { day: "Saturday", hours: 7.2 },
        { day: "Sunday", hours: 6.9 }
      ]
    },
    water: {
      answer: "Jessica's hydration is inconsistent, averaging 4.8 glasses daily. She often forgets to drink water during work stress periods.",
      chartType: "bar",
      data: [
        { week: "Week 1", glasses: 4.2 },
        { week: "Week 2", glasses: 5.1 },
        { week: "Week 3", glasses: 4.9 },
        { week: "Week 4", glasses: 5.0 }
      ]
    },
    stress: {
      answer: "Jessica's stress peaks during meal planning and work deadlines, directly correlating with her acidity flare-ups.",
      chartType: "line",
      data: [
        { day: "Monday", level: 7.8, meditation: 0 },
        { day: "Tuesday", level: 6.5, meditation: 1 },
        { day: "Wednesday", level: 7.2, meditation: 0 },
        { day: "Thursday", level: 8.1, meditation: 0 },
        { day: "Friday", level: 6.8, meditation: 1 },
        { day: "Saturday", level: 4.5, meditation: 1 },
        { day: "Sunday", level: 5.2, meditation: 1 }
      ]
    },
    exercise: {
      answer: "Jessica exercises 2-3 times per week, mostly yoga (60%) and walking (40%). She avoids high-intensity workouts due to acidity concerns.",
      chartType: "pie",
      data: [
        { name: "Yoga", value: 60 },
        { name: "Walking", value: 35 },
        { name: "Swimming", value: 5 }
      ]
    },
    diet: {
      answer: "Jessica logs meals 85% of the time but struggles with portion control and timing. She often skips breakfast, worsening her acidity.",
      chartType: "bar",
      data: [
        { nutrient: "Protein", actual: 65, target: 100 },
        { nutrient: "Fiber", actual: 55, target: 100 },
        { nutrient: "Calcium", actual: 45, target: 100 },
        { nutrient: "Iron", actual: 40, target: 100 },
        { nutrient: "Water", actual: 60, target: 100 }
      ]
    },
    default: {
      answer: "Jessica shows strong engagement with nutrition tracking but needs support with meal timing and stress management to address her acidity issues.",
      chartType: "none"
    }
  },
  102: { // Daniel Wilson
    sleep: {
      answer: "Daniel gets 7.1 hours average but quality is poor due to back pain. He wakes up 2-3 times nightly and feels unrested.",
      chartType: "line",
      data: [
        { day: "Monday", hours: 7.0 },
        { day: "Tuesday", hours: 6.8 },
        { day: "Wednesday", hours: 7.5 },
        { day: "Thursday", hours: 6.9 },
        { day: "Friday", hours: 7.2 },
        { day: "Saturday", hours: 7.8 },
        { day: "Sunday", hours: 7.3 }
      ]
    },
    water: {
      answer: "Daniel drinks only 3.2 glasses daily, well below his 10-glass target. His low hydration affects his blood pressure management.",
      chartType: "bar",
      data: [
        { week: "Week 1", glasses: 3.0 },
        { week: "Week 2", glasses: 3.5 },
        { week: "Week 3", glasses: 3.1 },
        { week: "Week 4", glasses: 3.2 }
      ]
    },
    stress: {
      answer: "Daniel's stress is moderate but spikes during high-sodium meals, directly affecting his blood pressure readings.",
      chartType: "line",
      data: [
        { day: "Monday", level: 6.2, meditation: 0 },
        { day: "Tuesday", level: 5.8, meditation: 0 },
        { day: "Wednesday", level: 6.5, meditation: 0 },
        { day: "Thursday", level: 7.1, meditation: 0 },
        { day: "Friday", level: 6.0, meditation: 0 },
        { day: "Saturday", level: 4.8, meditation: 1 },
        { day: "Sunday", level: 5.2, meditation: 0 }
      ]
    },
    exercise: {
      answer: "Daniel is very consistent with strength training (70%) and cardio (30%), exercising 5-6 times weekly with excellent form tracking.",
      chartType: "pie",
      data: [
        { name: "Strength Training", value: 70 },
        { name: "Cardio", value: 25 },
        { name: "Stretching", value: 5 }
      ]
    },
    diet: {
      answer: "Daniel rarely tracks nutrition but his estimated sodium intake is 150% above target, impacting his blood pressure goals.",
      chartType: "bar",
      data: [
        { nutrient: "Sodium", actual: 150, target: 100 },
        { nutrient: "Protein", actual: 120, target: 100 },
        { nutrient: "Fiber", actual: 70, target: 100 },
        { nutrient: "Potassium", actual: 60, target: 100 },
        { nutrient: "Water", actual: 40, target: 100 }
      ]
    },
    default: {
      answer: "Daniel excels in fitness tracking but needs significant improvement in nutrition monitoring and hydration to manage his blood pressure.",
      chartType: "none"
    }
  },
  201: { // Thomas Anderson
    sleep: {
      answer: "Thomas maintains excellent sleep hygiene with 7.8 hours average, but recovery sleep suffers after intense training days.",
      chartType: "line",
      data: [
        { day: "Monday", hours: 8.2 },
        { day: "Tuesday", hours: 7.5 },
        { day: "Wednesday", hours: 8.0 },
        { day: "Thursday", hours: 7.2 },
        { day: "Friday", hours: 7.8 },
        { day: "Saturday", hours: 8.5 },
        { day: "Sunday", hours: 8.1 }
      ]
    },
    water: {
      answer: "Thomas drinks 8.5 glasses daily, meeting hydration goals on training days but falling short on rest days.",
      chartType: "bar",
      data: [
        { week: "Week 1", glasses: 8.2 },
        { week: "Week 2", glasses: 8.8 },
        { week: "Week 3", glasses: 8.5 },
        { week: "Week 4", glasses: 8.7 }
      ]
    },
    exercise: {
      answer: "Thomas trains 6 days weekly with perfect form tracking: strength (60%), HIIT (25%), cardio (15%). Risk of overtraining detected.",
      chartType: "pie",
      data: [
        { name: "Strength Training", value: 60 },
        { name: "HIIT", value: 25 },
        { name: "Cardio", value: 15 }
      ]
    },
    default: {
      answer: "Thomas shows exceptional fitness dedication but needs stress management guidance to prevent overtraining syndrome.",
      chartType: "none"
    }
  },
  301: { // Kevin Harris
    sleep: {
      answer: "Kevin's sleep improved from 5.2 to 6.8 hours after starting meditation, but anxiety still causes 3-4 weekly disruptions.",
      chartType: "line",
      data: [
        { day: "Monday", hours: 6.2 },
        { day: "Tuesday", hours: 7.0 },
        { day: "Wednesday", hours: 6.8 },
        { day: "Thursday", hours: 6.5 },
        { day: "Friday", hours: 5.8 },
        { day: "Saturday", hours: 7.5 },
        { day: "Sunday", hours: 7.2 }
      ]
    },
    stress: {
      answer: "Kevin's anxiety peaks on Sundays (anticipating Monday) and improves significantly on meditation days.",
      chartType: "line",
      data: [
        { day: "Monday", level: 8.2, meditation: 0 },
        { day: "Tuesday", level: 6.5, meditation: 1 },
        { day: "Wednesday", level: 7.1, meditation: 0 },
        { day: "Thursday", level: 6.8, meditation: 1 },
        { day: "Friday", level: 5.9, meditation: 1 },
        { day: "Saturday", level: 4.2, meditation: 1 },
        { day: "Sunday", level: 8.5, meditation: 0 }
      ]
    },
    default: {
      answer: "Kevin responds well to meditation but needs consistent practice to manage Sunday anxiety spikes.",
      chartType: "none"
    }
  }
};
