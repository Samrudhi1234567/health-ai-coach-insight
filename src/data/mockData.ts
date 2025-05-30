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
export const userPredefinedQuestions = {
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
  103: {
    engagement: [
      "How consistent is Amanda with her water intake tracking?",
      "What nutrition patterns help Amanda's iron absorption?",
      "Is Amanda's engagement improving with goal setting?"
    ],
    hraIssues: [
      "How is Amanda addressing her iron deficiency through diet?",
      "What foods has Amanda added to improve iron levels?",
      "Is Amanda's energy improving with better nutrition?"
    ],
    ghostedActions: [
      "Why did Amanda stop using goal setting features?",
      "Has Amanda completed her HRA questionnaire?",
      "What prevented Amanda from continuing with workout logging?"
    ],
    insights: [
      "Is there correlation between Amanda's iron-rich meals and energy levels?",
      "How does Amanda's menstrual cycle affect her tracking patterns?",
      "What motivates Amanda to maintain consistent logging?"
    ]
  },
  104: {
    engagement: [
      "How can Ryan improve his low app engagement?",
      "What motivates Ryan to use the step counter consistently?",
      "Is Ryan's engagement improving over time?"
    ],
    hraIssues: [
      "How is Ryan addressing his weight management goals?",
      "What stress eating patterns has Ryan identified?",
      "Is Ryan making progress with his sedentary lifestyle?"
    ],
    ghostedActions: [
      "Why did Ryan abandon nutrition tracking so quickly?",
      "Has Ryan tried any workout logging features?",
      "What barriers prevent Ryan from using water intake tracking?"
    ],
    insights: [
      "What small wins can motivate Ryan to increase engagement?",
      "How does Ryan's mood affect his tracking consistency?",
      "What features would be most beneficial for Ryan's goals?"
    ]
  },
  105: {
    engagement: [
      "How does Sophia maintain such high engagement across all features?",
      "What patterns exist in Sophia's daily app usage?",
      "Is Sophia's perfectionist tendencies affecting her health goals?"
    ],
    hraIssues: [
      "How is Sophia managing her perfectionist stress?",
      "What healthy boundaries has Sophia established?",
      "Is Sophia's high performance sustainable long-term?"
    ],
    ghostedActions: [
      "Why does Sophia avoid video tutorials despite high engagement?",
      "Has Sophia explored features for stress management?",
      "What would encourage Sophia to use educational content?"
    ],
    insights: [
      "How can Sophia balance her perfectionism with self-care?",
      "What patterns show Sophia might be overcommitting?",
      "How does Sophia's social pressure affect her health choices?"
    ]
  },
  106: {
    engagement: [
      "How consistent is Marcus with his sleep monitoring?",
      "What improves Marcus's engagement with health tracking?",
      "Is Marcus's sleep quality affecting his app usage?"
    ],
    hraIssues: [
      "How is Marcus managing his sleep apnea symptoms?",
      "What sleep hygiene improvements has Marcus made?",
      "Is Marcus's weight affecting his sleep quality?"
    ],
    ghostedActions: [
      "Why did Marcus stop using meditation features?",
      "Has Marcus completed his health risk assessment?",
      "What would motivate Marcus to track additional metrics?"
    ],
    insights: [
      "How does Marcus's sleep quality correlate with daily activities?",
      "What environmental factors affect Marcus's sleep patterns?",
      "How can Marcus improve his overall engagement with health tracking?"
    ]
  },
  201: {
    engagement: [
      "How has Thomas's workout logging evolved over his training period?",
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
  },
  202: {
    engagement: [
      "How consistent is Lisa with her workout logging?",
      "What types of training does Lisa prefer?",
      "Is Lisa's engagement helping her avoid overtraining?"
    ],
    hraIssues: [
      "How is Lisa preventing overtraining syndrome?",
      "What recovery protocols has Lisa adopted?",
      "Is Lisa balancing intensity with adequate rest?"
    ],
    ghostedActions: [
      "Why does Lisa avoid water intake tracking?",
      "Has Lisa explored nutrition timing features?",
      "What would encourage Lisa to track hydration?"
    ],
    insights: [
      "How does Lisa's training load correlate with recovery metrics?",
      "What patterns indicate Lisa needs more rest days?",
      "How can Lisa optimize her training-recovery balance?"
    ]
  },
  203: {
    engagement: [
      "How consistent is Alex with his step counting?",
      "What running patterns does Alex track most?",
      "Is Alex's engagement helping with injury prevention?"
    ],
    hraIssues: [
      "How is Alex managing his knee pain?",
      "What running form improvements has Alex made?",
      "Is Alex incorporating enough stretching and recovery?"
    ],
    ghostedActions: [
      "Why did Alex stop using meditation features?",
      "Has Alex completed his health assessments?",
      "What prevents Alex from tracking stress levels?"
    ],
    insights: [
      "How does Alex's running surface choice affect his knee pain?",
      "What correlation exists between Alex's form and injury risk?",
      "How can Alex improve his injury prevention strategies?"
    ]
  },
  204: {
    engagement: [
      "How consistent is Emma with her nutrition tracking?",
      "What motivates Emma to maintain her tracking habits?",
      "Is Emma's engagement helping with her fitness goals?"
    ],
    hraIssues: [
      "How is Emma addressing her lower back pain?",
      "What core strengthening progress has Emma made?",
      "Is Emma improving her posture and work setup?"
    ],
    ghostedActions: [
      "Why did Emma abandon video tutorials?",
      "Has Emma tried goal setting features?",
      "What would motivate Emma to use educational content?"
    ],
    insights: [
      "How does Emma's work posture correlate with back pain?",
      "What exercises most effectively help Emma's core strength?",
      "How can Emma maintain consistency with her fitness routine?"
    ]
  },
  205: {
    engagement: [
      "How does Jake maintain such high fitness engagement?",
      "What workout patterns does Jake follow most consistently?",
      "Is Jake's engagement indicating potential exercise addiction?"
    ],
    hraIssues: [
      "How is Jake managing his relationship with exercise?",
      "What body image concerns has Jake expressed?",
      "Is Jake's perfectionism affecting his health goals?"
    ],
    ghostedActions: [
      "Why does Jake avoid stress management features?",
      "Has Jake explored balance and moderation content?",
      "What would help Jake develop a healthier relationship with fitness?"
    ],
    insights: [
      "How can Jake balance his fitness passion with overall wellbeing?",
      "What signs indicate Jake might be overexercising?",
      "How does Jake's perfectionism manifest in his workout patterns?"
    ]
  },
  206: {
    engagement: [
      "How consistent is Olivia with her goal setting?",
      "What workout types does Olivia track most frequently?",
      "Is Olivia's engagement helping with her rehabilitation?"
    ],
    hraIssues: [
      "How is Olivia managing her shoulder impingement?",
      "What rehabilitation exercises has Olivia incorporated?",
      "Is Olivia avoiding movements that aggravate her shoulder?"
    ],
    ghostedActions: [
      "Why does Olivia avoid the HRA questionnaire?",
      "Has Olivia explored injury prevention content?",
      "What would motivate Olivia to complete health assessments?"
    ],
    insights: [
      "How do Olivia's workout modifications help her shoulder recovery?",
      "What movement patterns should Olivia continue to avoid?",
      "How can Olivia prevent future shoulder injuries?"
    ]
  },
  301: {
    engagement: [
      "How consistent is Kevin with his meditation practice?",
      "What stress management features does Kevin use most?",
      "Is Kevin's engagement helping with his anxiety management?"
    ],
    hraIssues: [
      "How is Kevin managing his anxiety symptoms?",
      "What improvements has Kevin seen in his sleep patterns?",
      "Is Kevin developing effective coping strategies?"
    ],
    ghostedActions: [
      "Why did Kevin abandon workout logging features?",
      "Has Kevin tried goal setting for mental health?",
      "What would motivate Kevin to incorporate physical activity?"
    ],
    insights: [
      "How does Kevin's meditation practice correlate with anxiety levels?",
      "What triggers should Kevin continue to monitor?",
      "How can Kevin build confidence for physical activity?"
    ]
  },
  302: {
    engagement: [
      "How consistent is Jennifer with stress management tracking?",
      "What mental health features does Jennifer find most helpful?",
      "Is Jennifer's engagement improving her mood patterns?"
    ],
    hraIssues: [
      "How is Jennifer managing her depression symptoms?",
      "What mood tracking patterns has Jennifer identified?",
      "Is Jennifer building effective daily routines?"
    ],
    ghostedActions: [
      "Why does Jennifer avoid step counting and workouts?",
      "Has Jennifer explored gentle movement options?",
      "What would encourage Jennifer to incorporate light activity?"
    ],
    insights: [
      "How do Jennifer's mood patterns correlate with her self-care activities?",
      "What daily routines most effectively support Jennifer's mental health?",
      "How can Jennifer gradually increase her physical activity comfort?"
    ]
  },
  303: {
    engagement: [
      "How consistent is Christopher with his sleep tracking?",
      "What stress management techniques work best for Christopher?",
      "Is Christopher's limited engagement affecting his progress?"
    ],
    hraIssues: [
      "How is Christopher managing his chronic stress?",
      "What work-life balance strategies has Christopher tried?",
      "Is Christopher developing sustainable stress coping methods?"
    ],
    ghostedActions: [
      "Why did Christopher abandon nutrition and hydration tracking?",
      "Has Christopher explored stress-eating awareness features?",
      "What would motivate Christopher to track basic health metrics?"
    ],
    insights: [
      "How do Christopher's work demands correlate with his stress levels?",
      "What patterns exist between Christopher's sleep and stress management?",
      "How can Christopher build sustainable stress management habits?"
    ]
  },
  304: {
    engagement: [
      "How consistent is Sarah with her meditation practice?",
      "What stress management features help Sarah most with panic attacks?",
      "Is Sarah's engagement helping her develop coping strategies?"
    ],
    hraIssues: [
      "How is Sarah managing her panic attack triggers?",
      "What breathing techniques has Sarah found most effective?",
      "Is Sarah identifying and avoiding her trigger patterns?"
    ],
    ghostedActions: [
      "Why does Sarah avoid goal setting features?",
      "Has Sarah explored structured anxiety management programs?",
      "What would help Sarah set manageable health goals?"
    ],
    insights: [
      "How do Sarah's meditation sessions correlate with panic attack frequency?",
      "What environmental factors most affect Sarah's anxiety levels?",
      "How can Sarah build confidence in managing her anxiety symptoms?"
    ]
  },
  305: {
    engagement: [
      "How helpful are video tutorials for Michael's social anxiety?",
      "What meditation techniques work best for Michael?",
      "Is Michael's engagement improving his social confidence?"
    ],
    hraIssues: [
      "How is Michael addressing his social anxiety symptoms?",
      "What exposure therapy techniques has Michael tried?",
      "Is Michael building social confidence gradually?"
    ],
    ghostedActions: [
      "Why did Michael avoid the HRA questionnaire and goal setting?",
      "Has Michael explored social skills development content?",
      "What would help Michael feel safe setting social goals?"
    ],
    insights: [
      "How do Michael's meditation practices help with social situations?",
      "What patterns exist between Michael's anxiety and social interactions?",
      "How can Michael gradually build social engagement skills?"
    ]
  },
  306: {
    engagement: [
      "How consistent is Rachel with stress management tracking?",
      "What features help Rachel most with work-life balance?",
      "Is Rachel's engagement helping prevent burnout recurrence?"
    ],
    hraIssues: [
      "How is Rachel recovering from burnout?",
      "What work boundary strategies has Rachel implemented?",
      "Is Rachel developing sustainable self-care routines?"
    ],
    ghostedActions: [
      "Why does Rachel avoid workout logging despite good engagement?",
      "Has Rachel explored gentle movement for stress relief?",
      "What would motivate Rachel to incorporate physical activity?"
    ],
    insights: [
      "How do Rachel's stress management practices correlate with work performance?",
      "What patterns indicate Rachel might be overcommitting again?",
      "How can Rachel maintain healthy boundaries long-term?"
    ]
  },
  401: {
    engagement: [
      "How consistent is Stephanie with her sleep monitoring?",
      "What sleep hygiene practices help Stephanie most?",
      "Is Stephanie's engagement improving her insomnia?"
    ],
    hraIssues: [
      "How is Stephanie managing her chronic insomnia?",
      "What sleep routine changes has Stephanie implemented?",
      "Is Stephanie addressing underlying stress affecting her sleep?"
    ],
    ghostedActions: [
      "Why did Stephanie stop workout logging?",
      "Has Stephanie explored gentle evening activities?",
      "What would motivate Stephanie to add light physical activity?"
    ],
    insights: [
      "How do Stephanie's stress levels correlate with her sleep quality?",
      "What environmental factors most affect Stephanie's sleep patterns?",
      "How can Stephanie optimize her pre-sleep routine for better rest?"
    ]
  },
  402: {
    engagement: [
      "How consistent is Jason with sleep monitoring?",
      "What workout patterns help Jason's sleep quality?",
      "Is Jason's engagement helping with his sleep apnea management?"
    ],
    hraIssues: [
      "How is Jason managing his sleep apnea symptoms?",
      "What lifestyle changes has Jason made for better sleep?",
      "Is Jason considering or pursuing sleep study recommendations?"
    ],
    ghostedActions: [
      "Why does Jason avoid meditation sessions?",
      "Has Jason explored relaxation techniques for better sleep?",
      "What would motivate Jason to try stress-reduction activities?"
    ],
    insights: [
      "How do Jason's workout times correlate with his sleep quality?",
      "What patterns exist between Jason's weight and sleep apnea symptoms?",
      "How can Jason optimize his sleep environment for better rest?"
    ]
  },
  403: {
    engagement: [
      "How consistent is Linda with her sleep tracking?",
      "What stress management techniques help Linda's restless leg syndrome?",
      "Is Linda's limited engagement affecting her sleep improvement?"
    ],
    hraIssues: [
      "How is Linda managing her restless leg syndrome?",
      "What dietary changes has Linda tried for iron deficiency?",
      "Is Linda addressing stress factors affecting her sleep?"
    ],
    ghostedActions: [
      "Why did Linda abandon step counting and workouts?",
      "Has Linda explored gentle movement for leg circulation?",
      "What would motivate Linda to track basic activity levels?"
    ],
    insights: [
      "How do Linda's iron levels correlate with her restless leg symptoms?",
      "What patterns exist between Linda's stress and sleep disruption?",
      "How can Linda improve circulation to help with restless legs?"
    ]
  },
  404: {
    engagement: [
      "How consistent is David with sleep monitoring for shift work?",
      "What nutrition patterns help David's irregular schedule?",
      "Is David's engagement helping him adapt to shift work?"
    ],
    hraIssues: [
      "How is David managing shift work sleep disorder?",
      "What light exposure strategies has David implemented?",
      "Is David creating an optimal sleep environment for day sleeping?"
    ],
    ghostedActions: [
      "Why has David abandoned most tracking features?",
      "Has David explored gentle activity options for fatigue?",
      "What would motivate David to gradually increase his health tracking?"
    ],
    insights: [
      "How does David's shift patterns correlate with his sleep quality?",
      "What nutrition timing strategies help David's energy levels?",
      "How can David optimize his sleep schedule for his work rotation?"
    ]
  },
  405: {
    engagement: [
      "How consistent is Ashley with her comprehensive health tracking?",
      "What sleep optimization techniques work best for Ashley?",
      "Is Ashley's high engagement helping with her delayed sleep phase?"
    ],
    hraIssues: [
      "How is Ashley managing her delayed sleep phase disorder?",
      "What light therapy protocols has Ashley implemented?",
      "Is Ashley successfully shifting her circadian rhythm?"
    ],
    ghostedActions: [
      "Why does Ashley avoid video tutorials despite high engagement?",
      "Has Ashley explored sleep education content?",
      "What would motivate Ashley to use educational resources?"
    ],
    insights: [
      "How does Ashley's light therapy correlate with her sleep timing improvements?",
      "What patterns show Ashley's circadian rhythm is adjusting?",
      "How can Ashley maintain her progress with delayed sleep phase management?"
    ]
  },
  406: {
    engagement: [
      "How can Brian improve his minimal app engagement?",
      "What motivates Brian to maintain sleep monitoring?",
      "Is Brian's fatigue affecting his ability to engage with health tracking?"
    ],
    hraIssues: [
      "How is Brian addressing his chronic fatigue?",
      "What factors contribute most to Brian's fatigue patterns?",
      "Is Brian exploring the connection between his sedentary lifestyle and fatigue?"
    ],
    ghostedActions: [
      "Why has Brian abandoned most tracking features?",
      "Has Brian explored gentle activity options for fatigue?",
      "What would motivate Brian to gradually increase his health tracking?"
    ],
    insights: [
      "How does Brian's sleep quality correlate with his daily energy levels?",
      "What patterns exist between Brian's mood and his willingness to track health metrics?",
      "How can Brian build sustainable energy through gradual lifestyle changes?"
    ]
  }
};

// User-specific chart data
export const userSpecificChartData = {
  1: {
    weeklyEngagement: [
      { week: "Week 1", sessions: 12 },
      { week: "Week 2", sessions: 15 },
      { week: "Week 3", sessions: 18 },
      { week: "Week 4", sessions: 22 }
    ],
    featureUsage: [
      { name: "Hydration", usage: 85 },
      { name: "Food Log", usage: 70 },
      { name: "Exercise", usage: 60 },
      { name: "Sleep", usage: 90 }
    ],
    healthTrends: [
      { day: "Mon", acidity: 6.2, stress: 4 },
      { day: "Tue", acidity: 6.5, stress: 3 },
      { day: "Wed", acidity: 6.8, stress: 5 },
      { day: "Thu", acidity: 6.4, stress: 3 },
      { day: "Fri", acidity: 6.7, stress: 4 }
    ],
    performanceMetrics: [
      { day: "Mon", bloodPressure: 120, workoutIntensity: 7 },
      { day: "Tue", bloodPressure: 118, workoutIntensity: 8 },
      { day: "Wed", bloodPressure: 122, workoutIntensity: 6 },
      { day: "Thu", bloodPressure: 119, workoutIntensity: 9 },
      { day: "Fri", bloodPressure: 121, workoutIntensity: 7 }
    ],
    mentalHealthTrends: [
      { day: "Mon", mood: 7, energy: 6 },
      { day: "Tue", mood: 8, energy: 7 },
      { day: "Wed", mood: 6, energy: 5 },
      { day: "Thu", mood: 9, energy: 8 },
      { day: "Fri", mood: 7, energy: 6 }
    ]
  },
  2: {
    weeklyEngagement: [
      { week: "Week 1", sessions: 8 },
      { week: "Week 2", sessions: 11 },
      { week: "Week 3", sessions: 14 },
      { week: "Week 4", sessions: 16 }
    ],
    featureUsage: [
      { name: "Meditation", usage: 95 },
      { name: "Sleep Log", usage: 88 },
      { name: "Food Log", usage: 45 },
      { name: "Exercise", usage: 35 }
    ],
    healthTrends: [
      { day: "Mon", acidity: 7.1, stress: 6 },
      { day: "Tue", acidity: 6.9, stress: 5 },
      { day: "Wed", acidity: 7.2, stress: 7 },
      { day: "Thu", acidity: 6.8, stress: 4 },
      { day: "Fri", acidity: 7.0, stress: 6 }
    ],
    performanceMetrics: [
      { day: "Mon", bloodPressure: 125, workoutIntensity: 4 },
      { day: "Tue", bloodPressure: 127, workoutIntensity: 3 },
      { day: "Wed", bloodPressure: 124, workoutIntensity: 5 },
      { day: "Thu", bloodPressure: 126, workoutIntensity: 4 },
      { day: "Fri", bloodPressure: 125, workoutIntensity: 4 }
    ],
    mentalHealthTrends: [
      { day: "Mon", mood: 5, energy: 4 },
      { day: "Tue", mood: 6, energy: 5 },
      { day: "Wed", mood: 4, energy: 3 },
      { day: "Thu", mood: 7, energy: 6 },
      { day: "Fri", mood: 6, energy: 5 }
    ]
  },
  3: {
    weeklyEngagement: [
      { week: "Week 1", sessions: 18 },
      { week: "Week 2", sessions: 22 },
      { week: "Week 3", sessions: 25 },
      { week: "Week 4", sessions: 28 }
    ],
    featureUsage: [
      { name: "Exercise", usage: 92 },
      { name: "Food Log", usage: 88 },
      { name: "Hydration", usage: 95 },
      { name: "Sleep", usage: 85 }
    ],
    healthTrends: [
      { day: "Mon", acidity: 5.8, stress: 2 },
      { day: "Tue", acidity: 6.0, stress: 1 },
      { day: "Wed", acidity: 5.9, stress: 3 },
      { day: "Thu", acidity: 6.1, stress: 2 },
      { day: "Fri", acidity: 5.7, stress: 2 }
    ],
    performanceMetrics: [
      { day: "Mon", bloodPressure: 110, workoutIntensity: 9 },
      { day: "Tue", bloodPressure: 108, workoutIntensity: 10 },
      { day: "Wed", bloodPressure: 112, workoutIntensity: 8 },
      { day: "Thu", bloodPressure: 109, workoutIntensity: 9 },
      { day: "Fri", bloodPressure: 111, workoutIntensity: 8 }
    ],
    mentalHealthTrends: [
      { day: "Mon", mood: 9, energy: 9 },
      { day: "Tue", mood: 8, energy: 8 },
      { day: "Wed", mood: 9, energy: 9 },
      { day: "Thu", mood: 8, energy: 8 },
      { day: "Fri", mood: 9, energy: 9 }
    ]
  },
  4: {
    weeklyEngagement: [
      { week: "Week 1", sessions: 5 },
      { week: "Week 2", sessions: 7 },
      { week: "Week 3", sessions: 6 },
      { week: "Week 4", sessions: 9 }
    ],
    featureUsage: [
      { name: "Sleep Log", usage: 60 },
      { name: "Hydration", usage: 40 },
      { name: "Food Log", usage: 30 },
      { name: "Exercise", usage: 20 }
    ],
    healthTrends: [
      { day: "Mon", acidity: 7.5, stress: 8 },
      { day: "Tue", acidity: 7.3, stress: 7 },
      { day: "Wed", acidity: 7.6, stress: 9 },
      { day: "Thu", acidity: 7.2, stress: 6 },
      { day: "Fri", acidity: 7.4, stress: 8 }
    ],
    performanceMetrics: [
      { day: "Mon", bloodPressure: 135, workoutIntensity: 2 },
      { day: "Tue", bloodPressure: 138, workoutIntensity: 1 },
      { day: "Wed", bloodPressure: 140, workoutIntensity: 3 },
      { day: "Thu", bloodPressure: 136, workoutIntensity: 2 },
      { day: "Fri", bloodPressure: 137, workoutIntensity: 2 }
    ],
    mentalHealthTrends: [
      { day: "Mon", mood: 3, energy: 2 },
      { day: "Tue", mood: 4, energy: 3 },
      { day: "Wed", mood: 2, energy: 2 },
      { day: "Thu", mood: 5, energy: 4 },
      { day: "Fri", mood: 3, energy: 3 }
    ]
  },
  5: {
    weeklyEngagement: [
      { week: "Week 1", sessions: 14 },
      { week: "Week 2", sessions: 16 },
      { week: "Week 3", sessions: 19 },
      { week: "Week 4", sessions: 21 }
    ],
    featureUsage: [
      { name: "Food Log", usage: 78 },
      { name: "Exercise", usage: 82 },
      { name: "Hydration", usage: 75 },
      { name: "Meditation", usage: 65 }
    ],
    healthTrends: [
      { day: "Mon", acidity: 6.3, stress: 3 },
      { day: "Tue", acidity: 6.5, stress: 4 },
      { day: "Wed", acidity: 6.2, stress: 2 },
      { day: "Thu", acidity: 6.6, stress: 5 },
      { day: "Fri", acidity: 6.4, stress: 3 }
    ],
    performanceMetrics: [
      { day: "Mon", bloodPressure: 118, workoutIntensity: 7 },
      { day: "Tue", bloodPressure: 116, workoutIntensity: 8 },
      { day: "Wed", bloodPressure: 120, workoutIntensity: 6 },
      { day: "Thu", bloodPressure: 117, workoutIntensity: 8 },
      { day: "Fri", bloodPressure: 119, workoutIntensity: 7 }
    ],
    mentalHealthTrends: [
      { day: "Mon", mood: 7, energy: 7 },
      { day: "Tue", mood: 8, energy: 8 },
      { day: "Wed", mood: 6, energy: 6 },
      { day: "Thu", mood: 8, energy: 7 },
      { day: "Fri", mood: 7, energy: 7 }
    ]
  },
  6: {
    weeklyEngagement: [
      { week: "Week 1", sessions: 20 },
      { week: "Week 2", sessions: 24 },
      { week: "Week 3", sessions: 26 },
      { week: "Week 4", sessions: 30 }
    ],
    featureUsage: [
      { name: "Meditation", usage: 98 },
      { name: "Sleep Log", usage: 95 },
      { name: "Hydration", usage: 90 },
      { name: "Food Log", usage: 85 }
    ],
    healthTrends: [
      { day: "Mon", acidity: 5.5, stress: 1 },
      { day: "Tue", acidity: 5.7, stress: 2 },
      { day: "Wed", acidity: 5.6, stress: 1 },
      { day: "Thu", acidity: 5.8, stress: 2 },
      { day: "Fri", acidity: 5.4, stress: 1 }
    ],
    performanceMetrics: [
      { day: "Mon", bloodPressure: 105, workoutIntensity: 10 },
      { day: "Tue", bloodPressure: 107, workoutIntensity: 9 },
      { day: "Wed", bloodPressure: 106, workoutIntensity: 10 },
      { day: "Thu", bloodPressure: 104, workoutIntensity: 9 },
      { day: "Fri", bloodPressure: 108, workoutIntensity: 10 }
    ],
    mentalHealthTrends: [
      { day: "Mon", mood: 10, energy: 10 },
      { day: "Tue", mood: 9, energy: 9 },
      { day: "Wed", mood: 10, energy: 10 },
      { day: "Thu", mood: 9, energy: 9 },
      { day: "Fri", mood: 10, energy: 10 }
    ]
  },
  7: {
    weeklyEngagement: [
      { week: "Week 1", sessions: 10 },
      { week: "Week 2", sessions: 12 },
      { week: "Week 3", sessions: 11 },
      { week: "Week 4", sessions: 14 }
    ],
    featureUsage: [
      { name: "Exercise", usage: 55 },
      { name: "Food Log", usage: 65 },
      { name: "Sleep Log", usage: 70 },
      { name: "Hydration", usage: 50 }
    ],
    healthTrends: [
      { day: "Mon", acidity: 6.8, stress: 5 },
      { day: "Tue", acidity: 6.6, stress: 4 },
      { day: "Wed", acidity: 7.0, stress: 6 },
      { day: "Thu", acidity: 6.7, stress: 4 },
      { day: "Fri", acidity: 6.9, stress: 5 }
    ],
    performanceMetrics: [
      { day: "Mon", bloodPressure: 122, workoutIntensity: 5 },
      { day: "Tue", bloodPressure: 124, workoutIntensity: 6 },
      { day: "Wed", bloodPressure: 121, workoutIntensity: 4 },
      { day: "Thu", bloodPressure: 125, workoutIntensity: 6 },
      { day: "Fri", bloodPressure: 123, workoutIntensity: 5 }
    ],
    mentalHealthTrends: [
      { day: "Mon", mood: 6, energy: 5 },
      { day: "Tue", mood: 7, energy: 6 },
      { day: "Wed", mood: 5, energy: 4 },
      { day: "Thu", mood: 7, energy: 6 },
      { day: "Fri", mood: 6, energy: 5 }
    ]
  },
  8: {
    weeklyEngagement: [
      { week: "Week 1", sessions: 16 },
      { week: "Week 2", sessions: 18 },
      { week: "Week 3", sessions: 20 },
      { week: "Week 4", sessions: 23 }
    ],
    featureUsage: [
      { name: "Food Log", usage: 88 },
      { name: "Hydration", usage: 92 },
      { name: "Exercise", usage: 75 },
      { name: "Sleep Log", usage: 80 }
    ],
    healthTrends: [
      { day: "Mon", acidity: 6.1, stress: 3 },
      { day: "Tue", acidity: 6.3, stress: 4 },
      { day: "Wed", acidity: 6.0, stress: 2 },
      { day: "Thu", acidity: 6.4, stress: 4 },
      { day: "Fri", acidity: 6.2, stress: 3 }
    ],
    performanceMetrics: [
      { day: "Mon", bloodPressure: 115, workoutIntensity: 7 },
      { day: "Tue", bloodPressure: 117, workoutIntensity: 8 },
      { day: "Wed", bloodPressure: 114, workoutIntensity: 6 },
      { day: "Thu", bloodPressure: 118, workoutIntensity: 8 },
      { day: "Fri", bloodPressure: 116, workoutIntensity: 7 }
    ],
    mentalHealthTrends: [
      { day: "Mon", mood: 8, energy: 7 },
      { day: "Tue", mood: 7, energy: 8 },
      { day: "Wed", mood: 9, energy: 8 },
      { day: "Thu", mood: 7, energy: 7 },
      { day: "Fri", mood: 8, energy: 8 }
    ]
  },
  9: {
    weeklyEngagement: [
      { week: "Week 1", sessions: 6 },
      { week: "Week 2", sessions: 4 },
      { week: "Week 3", sessions: 8 },
      { week: "Week 4", sessions: 7 }
    ],
    featureUsage: [
      { name: "Sleep Log", usage: 45 },
      { name: "Hydration", usage: 35 },
      { name: "Food Log", usage: 25 },
      { name: "Exercise", usage: 15 }
    ],
    healthTrends: [
      { day: "Mon", acidity: 7.8, stress: 9 },
      { day: "Tue", acidity: 7.6, stress: 8 },
      { day: "Wed", acidity: 8.0, stress: 10 },
      { day: "Thu", acidity: 7.7, stress: 7 },
      { day: "Fri", acidity: 7.9, stress: 9 }
    ],
    performanceMetrics: [
      { day: "Mon", bloodPressure: 145, workoutIntensity: 1 },
      { day: "Tue", bloodPressure: 148, workoutIntensity: 2 },
      { day: "Wed", bloodPressure: 150, workoutIntensity: 1 },
      { day: "Thu", bloodPressure: 147, workoutIntensity: 1 },
      { day: "Fri", bloodPressure: 149, workoutIntensity: 2 }
    ],
    mentalHealthTrends: [
      { day: "Mon", mood: 2, energy: 1 },
      { day: "Tue", mood: 3, energy: 2 },
      { day: "Wed", mood: 1, energy: 1 },
      { day: "Thu", mood: 4, energy: 3 },
      { day: "Fri", mood: 2, energy: 2 }
    ]
  },
  10: {
    weeklyEngagement: [
      { week: "Week 1", sessions: 25 },
      { week: "Week 2", sessions: 28 },
      { week: "Week 3", sessions: 30 },
      { week: "Week 4", sessions: 32 }
    ],
    featureUsage: [
      { name: "Exercise", usage: 100 },
      { name: "Food Log", usage: 98 },
      { name: "Hydration", usage: 100 },
      { name: "Meditation", usage: 95 }
    ],
    healthTrends: [
      { day: "Mon", acidity: 5.2, stress: 1 },
      { day: "Tue", acidity: 5.4, stress: 1 },
      { day: "Wed", acidity: 5.1, stress: 0 },
      { day: "Thu", acidity: 5.5, stress: 2 },
      { day: "Fri", acidity: 5.3, stress: 1 }
    ],
    performanceMetrics: [
      { day: "Mon", bloodPressure: 100, workoutIntensity: 10 },
      { day: "Tue", bloodPressure: 102, workoutIntensity: 10 },
      { day: "Wed", bloodPressure: 99, workoutIntensity: 10 },
      { day: "Thu", bloodPressure: 101, workoutIntensity: 10 },
      { day: "Fri", bloodPressure: 103, workoutIntensity: 10 }
    ],
    mentalHealthTrends: [
      { day: "Mon", mood: 10, energy: 10 },
      { day: "Tue", mood: 10, energy: 10 },
      { day: "Wed", mood: 10, energy: 10 },
      { day: "Thu", mood: 10, energy: 10 },
      { day: "Fri", mood: 10, energy: 10 }
    ]
  }
};

// User-specific responses for AskAnything component
export const userSpecificResponses = {
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
  103: { // Amanda Miller
    sleep: {
      answer: "Amanda gets 6.8 hours of sleep but quality varies with her menstrual cycle. Iron deficiency affects her rest patterns.",
      chartType: "line",
      data: [
        { day: "Monday", hours: 6.5 },
        { day: "Tuesday", hours: 7.0 },
        { day: "Wednesday", hours: 6.8 },
        { day: "Thursday", hours: 6.2 },
        { day: "Friday", hours: 7.2 },
        { day: "Saturday", hours: 7.5 },
        { day: "Sunday", hours: 7.0 }
      ]
    },
    water: {
      answer: "Amanda consistently drinks 6.5 glasses daily, one of her most successful tracking habits. Hydration helps with her energy levels.",
      chartType: "bar",
      data: [
        { week: "Week 1", glasses: 6.2 },
        { week: "Week 2", glasses: 6.8 },
        { week: "Week 3", glasses: 6.5 },
        { week: "Week 4", glasses: 6.7 }
      ]
    },
    stress: {
      answer: "Amanda's stress is moderate but increases during heavy menstrual periods when her iron levels drop further.",
      chartType: "line",
      data: [
        { day: "Monday", level: 5.8, meditation: 1 },
        { day: "Tuesday", level: 5.2, meditation: 1 },
        { day: "Wednesday", level: 6.5, meditation: 0 },
        { day: "Thursday", level: 7.2, meditation: 0 },
        { day: "Friday", level: 6.8, meditation: 1 },
        { day: "Saturday", level: 4.5, meditation: 1 },
        { day: "Sunday", level: 5.0, meditation: 1 }
      ]
    },
    exercise: {
      answer: "Amanda does light cardio (50%) and yoga (40%), but energy limitations from iron deficiency limit her workout intensity.",
      chartType: "pie",
      data: [
        { name: "Light Cardio", value: 50 },
        { name: "Yoga", value: 40 },
        { name: "Walking", value: 10 }
      ]
    },
    diet: {
      answer: "Amanda tracks nutrition well and focuses on iron-rich foods, but absorption issues persist. She's improved her vitamin C intake.",
      chartType: "bar",
      data: [
        { nutrient: "Iron", actual: 75, target: 100 },
        { nutrient: "Vitamin C", actual: 85, target: 100 },
        { nutrient: "Protein", actual: 70, target: 100 },
        { nutrient: "Calcium", actual: 65, target: 100 },
        { nutrient: "Fiber", actual: 80, target: 100 }
      ]
    },
    default: {
      answer: "Amanda maintains good water intake and nutrition tracking but needs support with iron absorption strategies and gentle exercise routine building.",
      chartType: "none"
    }
  },
  104: { // Ryan Johnson
    sleep: {
      answer: "Ryan gets 6.5 hours of sleep but poor quality due to stress eating late at night. Weight affects his sleep comfort.",
      chartType: "line",
      data: [
        { day: "Monday", hours: 6.2 },
        { day: "Tuesday", hours: 6.8 },
        { day: "Wednesday", hours: 6.0 },
        { day: "Thursday", hours: 6.5 },
        { day: "Friday", hours: 7.0 },
        { day: "Saturday", hours: 7.2 },
        { day: "Sunday", hours: 6.8 }
      ]
    },
    water: {
      answer: "Ryan drinks only 2.8 glasses daily, far below target. Dehydration contributes to fatigue and poor food choices.",
      chartType: "bar",
      data: [
        { week: "Week 1", glasses: 2.5 },
        { week: "Week 2", glasses: 3.0 },
        { week: "Week 3", glasses: 2.8 },
        { week: "Week 4", glasses: 3.2 }
      ]
    },
    stress: {
      answer: "Ryan's stress is high, particularly around food choices and weight. Stress eating creates a cycle of guilt and poor habits.",
      chartType: "line",
      data: [
        { day: "Monday", level: 8.2, meditation: 0 },
        { day: "Tuesday", level: 7.8, meditation: 0 },
        { day: "Wednesday", level: 8.5, meditation: 0 },
        { day: "Thursday", level: 7.5, meditation: 0 },
        { day: "Friday", level: 6.8, meditation: 0 },
        { day: "Saturday", level: 6.2, meditation: 0 },
        { day: "Sunday", level: 7.8, meditation: 0 }
      ]
    },
    exercise: {
      answer: "Ryan walks occasionally (80%) but avoids gym activities due to self-consciousness. Step counting is his only consistent activity.",
      chartType: "pie",
      data: [
        { name: "Walking", value: 80 },
        { name: "Household Activities", value: 15 },
        { name: "Stretching", value: 5 }
      ]
    },
    diet: {
      answer: "Ryan rarely tracks food but estimated intake shows high calories, processed foods, and emotional eating patterns.",
      chartType: "bar",
      data: [
        { nutrient: "Calories", actual: 140, target: 100 },
        { nutrient: "Processed Foods", actual: 160, target: 100 },
        { nutrient: "Vegetables", actual: 25, target: 100 },
        { nutrient: "Fiber", actual: 30, target: 100 },
        { nutrient: "Water", actual: 35, target: 100 }
      ]
    },
    default: {
      answer: "Ryan needs significant support with motivation and building basic healthy habits. Small wins with step counting could be leveraged for broader engagement.",
      chartType: "none"
    }
  },
  105: { // Sophia Davis
    sleep: {
      answer: "Sophia maintains excellent 8.2-hour sleep schedule but perfectionist anxiety sometimes affects sleep quality before big goals.",
      chartType: "line",
      data: [
        { day: "Monday", hours: 8.0 },
        { day: "Tuesday", hours: 8.2 },
        { day: "Wednesday", hours: 7.8 },
        { day: "Thursday", hours: 8.5 },
        { day: "Friday", hours: 8.2 },
        { day: "Saturday", hours: 8.8 },
        { day: "Sunday", hours: 8.0 }
      ]
    },
    water: {
      answer: "Sophia consistently drinks 9.2 glasses daily, exceeding targets. Her hydration tracking is meticulous and well-maintained.",
      chartType: "bar",
      data: [
        { week: "Week 1", glasses: 9.0 },
        { week: "Week 2", glasses: 9.2 },
        { week: "Week 3", glasses: 9.5 },
        { week: "Week 4", glasses: 9.8 }
      ]
    },
    stress: {
      answer: "Sophia's stress relates to perfectionism and high standards. She manages it well but needs balance between achievement and self-care.",
      chartType: "line",
      data: [
        { day: "Monday", level: 6.8, meditation: 1 },
        { day: "Tuesday", level: 7.2, meditation: 1 },
        { day: "Wednesday", level: 8.0, meditation: 1 },
        { day: "Thursday", level: 6.2, meditation: 1 },
        { day: "Friday", level: 5.8, meditation: 1 },
        { day: "Saturday", level: 4.2, meditation: 1 },
        { day: "Sunday", level: 5.5, meditation: 1 }
      ]
    },
    exercise: {
      answer: "Sophia exercises 6 days weekly with varied routine: strength (40%), cardio (35%), yoga (25%). Performance tracking is exceptional.",
      chartType: "pie",
      data: [
        { name: "Strength Training", value: 40 },
        { name: "Cardio", value: 35 },
        { name: "Yoga", value: 25 }
      ]
    },
    diet: {
      answer: "Sophia tracks nutrition perfectly, meeting 98% of targets. Her focus on macros and timing is excellent but may be overly restrictive.",
      chartType: "bar",
      data: [
        { nutrient: "Protein", actual: 105, target: 100 },
        { nutrient: "Carbs", actual: 98, target: 100 },
        { nutrient: "Fats", actual: 102, target: 100 },
        { nutrient: "Fiber", actual: 110, target: 100 },
        { nutrient: "Vitamins", actual: 108, target: 100 }
      ]
    },
    default: {
      answer: "Sophia excels in all tracking areas but needs guidance on sustainable perfectionism and work-life balance to prevent burnout.",
      chartType: "none"
    }
  },
  106: { // Marcus Thompson
    sleep: {
      answer: "Marcus sleeps 7.8 hours but sleep apnea disrupts quality. CPAP compliance varies, affecting daytime energy levels.",
      chartType: "line",
      data: [
        { day: "Monday", hours: 7.5 },
        { day: "Tuesday", hours: 8.0 },
        { day: "Wednesday", hours: 7.8 },
        { day: "Thursday", hours: 7.2 },
        { day: "Friday", hours: 8.2 },
        { day: "Saturday", hours: 8.5 },
        { day: "Sunday", hours: 7.8 }
      ]
    },
    water: {
      answer: "Marcus drinks 5.2 glasses daily, below target. Better hydration could help with his sleep apnea and overall health.",
      chartType: "bar",
      data: [
        { week: "Week 1", glasses: 4.8 },
        { week: "Week 2", glasses: 5.2 },
        { week: "Week 3", glasses: 5.5 },
        { week: "Week 4", glasses: 5.8 }
      ]
    },
    stress: {
      answer: "Marcus experiences moderate stress, often related to sleep quality and work performance. Fatigue increases stress levels.",
      chartType: "line",
      data: [
        { day: "Monday", level: 6.8, meditation: 0 },
        { day: "Tuesday", level: 6.2, meditation: 1 },
        { day: "Wednesday", level: 7.0, meditation: 0 },
        { day: "Thursday", level: 6.5, meditation: 0 },
        { day: "Friday", level: 5.8, meditation: 1 },
        { day: "Saturday", level: 4.5, meditation: 1 },
        { day: "Sunday", level: 5.2, meditation: 0 }
      ]
    },
    exercise: {
      answer: "Marcus does light cardio (60%) and walking (40%). Sleep issues limit his energy for more intensive workouts.",
      chartType: "pie",
      data: [
        { name: "Light Cardio", value: 60 },
        { name: "Walking", value: 40 }
      ]
    },
    diet: {
      answer: "Marcus tracks nutrition sporadically. Weight management is challenging due to fatigue affecting food choices and meal prep.",
      chartType: "bar",
      data: [
        { nutrient: "Calories", actual: 115, target: 100 },
        { nutrient: "Protein", actual: 85, target: 100 },
        { nutrient: "Vegetables", actual: 60, target: 100 },
        { nutrient: "Water", actual: 65, target: 100 },
        { nutrient: "Fiber", actual: 55, target: 100 }
      ]
    },
    default: {
      answer: "Marcus needs integrated approach addressing sleep apnea management, weight loss, and energy optimization through better nutrition and hydration.",
      chartType: "none"
    }
  },
  201: { // Thomas Anderson
    sleep: {
      answer: "Thomas maintains excellent 7.8 hours of sleep but recovery sleep suffers after intense training days.",
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
    stress: {
      answer: "Thomas's stress is primarily training-related. High performance expectations create pressure but he lacks stress management tools.",
      chartType: "line",
      data: [
        { day: "Monday", level: 7.2, meditation: 0 },
        { day: "Tuesday", level: 6.8, meditation: 0 },
        { day: "Wednesday", level: 8.0, meditation: 0 },
        { day: "Thursday", level: 6.2, meditation: 0 },
        { day: "Friday", level: 7.5, meditation: 0 },
        { day: "Saturday", level: 5.2, meditation: 0 },
        { day: "Sunday", level: 6.0, meditation: 0 }
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
    diet: {
      answer: "Thomas tracks nutrition excellently, optimizing for performance. His protein and timing are on point for muscle recovery.",
      chartType: "bar",
      data: [
        { nutrient: "Protein", actual: 125, target: 100 },
        { nutrient: "Carbs", actual: 110, target: 100 },
        { nutrient: "Fats", actual: 95, target: 100 },
        { nutrient: "Hydration", actual: 105, target: 100 },
        { nutrient: "Recovery Foods", actual: 115, target: 100 }
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
    water: {
      answer: "Kevin drinks 4.8 glasses daily, below target. Anxiety sometimes makes him forget basic self-care like hydration.",
      chartType: "bar",
      data: [
        { week: "Week 1", glasses: 4.2 },
        { week: "Week 2", glasses: 5.0 },
        { week: "Week 3", glasses: 4.8 },
        { week: "Week 4", glasses: 5.2 }
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
    exercise: {
      answer: "Kevin avoids most physical activity due to anxiety. He occasionally walks (90%) but gym environments trigger social anxiety.",
      chartType: "pie",
      data: [
        { name: "Walking", value: 90 },
        { name: "Stretching", value: 10 }
      ]
    },
    diet: {
      answer: "Kevin's nutrition tracking is poor due to anxiety around food choices. Comfort eating during stress spikes affects his goals.",
      chartType: "bar",
      data: [
        { nutrient: "Vegetables", actual: 35, target: 100 },
        { nutrient: "Protein", actual: 60, target: 100 },
        { nutrient: "Comfort Foods", actual: 140, target: 100 },
        { nutrient: "Water", actual: 55, target: 100 },
        { nutrient: "Regular Meals", actual: 45, target: 100 }
      ]
    },
    default: {
      answer: "Kevin responds well to meditation but needs consistent practice to manage Sunday anxiety spikes and build confidence for physical activity.",
      chartType: "none"
    }
  }
};

// Add the missing userLogData export
export const userLogData = {
  1: { // Coach 1 data
    1: { lastLogs: { hydration: "2024-05-28", food: "2024-05-29", steps: "2024-05-27", activity: "2024-05-26", meditation: "2024-05-25", sleep: "2024-05-29", weight: "2024-05-24" } },
    2: { lastLogs: { hydration: "2024-05-29", food: "2024-05-29", steps: "2024-05-29", activity: "2024-05-29", meditation: "2024-05-29", sleep: "2024-05-29", weight: "2024-05-27" } },
    3: { lastLogs: { hydration: "2024-05-27", food: "2024-05-26", steps: "2024-05-28", activity: "2024-05-29", meditation: "2024-05-27", sleep: "2024-05-27", weight: "2024-05-25" } },
    4: { lastLogs: { hydration: "2024-05-26", food: "2024-05-27", steps: "2024-05-26", activity: "2024-05-28", meditation: "2024-05-26", sleep: "2024-05-26", weight: "2024-05-23" } },
    5: { lastLogs: { hydration: "2024-05-25", food: "2024-05-25", steps: "2024-05-25", activity: "2024-05-25", meditation: "2024-05-24", sleep: "2024-05-25", weight: "2024-05-22" } }
  },
  2: { // Coach 2 data
    6: { lastLogs: { hydration: "2024-05-29", food: "2024-05-29", steps: "2024-05-28", activity: "2024-05-29", meditation: "2024-05-29", sleep: "2024-05-29", weight: "2024-05-27" } },
    7: { lastLogs: { hydration: "2024-05-28", food: "2024-05-27", steps: "2024-05-29", activity: "2024-05-28", meditation: "2024-05-27", sleep: "2024-05-28", weight: "2024-05-26" } },
    8: { lastLogs: { hydration: "2024-05-27", food: "2024-05-28", steps: "2024-05-27", activity: "2024-05-27", meditation: "2024-05-28", sleep: "2024-05-27", weight: "2024-05-25" } }
  },
  3: { // Coach 3 data
    9: { lastLogs: { hydration: "2024-05-26", food: "2024-05-24", steps: "2024-05-26", activity: "2024-05-25", meditation: "2024-05-23", sleep: "2024-05-26", weight: "2024-05-21" } },
    10: { lastLogs: { hydration: "2024-05-29", food: "2024-05-29", steps: "2024-05-29", activity: "2024-05-29", meditation: "2024-05-29", sleep: "2024-05-29", weight: "2024-05-28" } }
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
