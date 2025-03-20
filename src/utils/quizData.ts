export interface Question {
  id: number;
  text: string;
  options: { value: number; label: string }[];
}

// Based on PHQ-9 (Patient Health Questionnaire-9)
export const questions: Question[] = [
  {
    id: 1,
    text: "Over the last 2 weeks, how often have you had little interest or pleasure in doing things?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  },
  {
    id: 2,
    text: "Over the last 2 weeks, how often have you been feeling down, depressed, or hopeless?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  },
  {
    id: 3,
    text: "Over the last 2 weeks, how often have you had trouble falling or staying asleep, or sleeping too much?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  },
  {
    id: 4,
    text: "Over the last 2 weeks, how often have you been feeling tired or having little energy?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  },
  {
    id: 5,
    text: "Over the last 2 weeks, how often have you had poor appetite or been overeating?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  },
  {
    id: 6,
    text: "Over the last 2 weeks, how often have you been feeling bad about yourself - or that you are a failure or have let yourself or your family down?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  },
  {
    id: 7,
    text: "Over the last 2 weeks, how often have you had trouble concentrating on things, such as reading or watching television?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  },
  {
    id: 8,
    text: "Over the last 2 weeks, how often have you been moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  },
  {
    id: 9,
    text: "Over the last 2 weeks, how often have you had thoughts that you would be better off dead, or thoughts of hurting yourself in some way?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  }
];

export interface ResultCategory {
  range: [number, number];
  title: string;
  description: string;
  recommendations: string[];
  severity: 'minimal' | 'mild' | 'moderate' | 'moderately-severe' | 'severe';
}

export const resultCategories: ResultCategory[] = [
  {
    range: [0, 4],
    title: "Minimal Depression Symptoms",
    description: "Your responses suggest minimal symptoms of depression. This is a positive result, though everyone experiences ups and downs in life.",
    recommendations: [
      "Continue healthy habits like regular exercise and quality sleep",
      "Maintain social connections and engage in activities you enjoy",
      "Practice mindfulness and stress management techniques",
      "Consider a follow-up assessment if symptoms change"
    ],
    severity: "minimal"
  },
  {
    range: [5, 9],
    title: "Mild Depression Symptoms",
    description: "Your responses suggest mild symptoms of depression. While these symptoms may not be severe, they might be impacting your daily life.",
    recommendations: [
      "Talk to a trusted friend or family member about how you're feeling",
      "Incorporate regular physical activity into your routine",
      "Practice sleep hygiene and maintain a balanced diet",
      "Consider reaching out to a mental health professional for additional support"
    ],
    severity: "mild"
  },
  {
    range: [10, 14],
    title: "Moderate Depression Symptoms",
    description: "Your responses suggest moderate symptoms of depression. These symptoms are significant and likely affecting multiple areas of your life.",
    recommendations: [
      "Consider scheduling an appointment with a mental health professional",
      "Talk to your primary care physician about your symptoms",
      "Prioritize self-care activities and healthy routines",
      "Reach out to supportive friends and family members",
      "Explore stress reduction and mindfulness techniques"
    ],
    severity: "moderate"
  },
  {
    range: [15, 19],
    title: "Moderately Severe Depression Symptoms",
    description: "Your responses suggest moderately severe symptoms of depression. These symptoms are significant and likely substantially impacting your daily functioning.",
    recommendations: [
      "We strongly recommend consulting with a mental health professional soon",
      "Discuss your symptoms with your primary care doctor",
      "Consider joining a support group",
      "Create a safety plan if you're experiencing any thoughts of self-harm",
      "Establish daily routines to maintain stability"
    ],
    severity: "moderately-severe"
  },
  {
    range: [20, 27],
    title: "Severe Depression Symptoms",
    description: "Your responses suggest severe symptoms of depression. This level of symptoms represents a serious condition that requires attention.",
    recommendations: [
      "Please seek professional help as soon as possible from a mental health provider",
      "If you're having thoughts of harming yourself, call 988 (Suicide & Crisis Lifeline) immediately",
      "Consider scheduling an urgent appointment with a psychiatrist or your primary care physician",
      "Don't face this alone - inform a trusted person about your condition",
      "Create a daily structure with small, manageable goals"
    ],
    severity: "severe"
  }
];

export const calculateResult = (answers: (number | null)[]): ResultCategory | null => {
  // Check if all questions are answered
  if (answers.some(answer => answer === null)) {
    return null;
  }
  
  // Calculate total score
  const totalScore = answers.reduce((sum, current) => sum + (current || 0), 0);
  
  // Find matching category
  return resultCategories.find(
    category => totalScore >= category.range[0] && totalScore <= category.range[1]
  ) || null;
};

export const getMentalHealthResources = () => [
  {
    name: "988 Suicide & Crisis Lifeline",
    description: "The 988 Suicide & Crisis Lifeline provides 24/7, free and confidential support for people in distress, prevention and crisis resources.",
    contact: "Call or text 988",
    url: "https://988lifeline.org/"
  },
  {
    name: "Crisis Text Line",
    description: "Text with a trained crisis counselor for free 24/7 support.",
    contact: "Text HOME to 741741",
    url: "https://www.crisistextline.org/"
  },
  {
    name: "National Alliance on Mental Illness (NAMI)",
    description: "The nation's largest grassroots mental health organization dedicated to building better lives for Americans affected by mental illness.",
    contact: "Helpline: 1-800-950-NAMI (6264)",
    url: "https://www.nami.org/"
  },
  {
    name: "Substance Abuse and Mental Health Services Administration (SAMHSA)",
    description: "SAMHSA's National Helpline offers 24/7 treatment referral and information service for individuals facing mental and/or substance use disorders.",
    contact: "1-800-662-HELP (4357)",
    url: "https://www.samhsa.gov/find-help/national-helpline"
  },
  {
    name: "MentalHealth.gov",
    description: "Provides one-stop access to U.S. government mental health information.",
    contact: "N/A",
    url: "https://www.mentalhealth.gov/"
  },
  {
    name: "Psychology Today Therapist Directory",
    description: "Find detailed professional listings for treatment facilities and providers in your area.",
    contact: "N/A",
    url: "https://www.psychologytoday.com/us/therapists"
  }
];

export interface IndianMentalHealthResource {
  name: string;
  description: string;
  location: string;
  contact?: string;
  url: string;
}

export const getIndianMentalHealthResources = (): IndianMentalHealthResource[] => [
  {
    name: "NIMHANS",
    description: "National Institute of Mental Health and Neurosciences - India's premier mental health institution offering specialized care and helpline services.",
    location: "Bangalore, India",
    contact: "Toll-Free: 080-26995100",
    url: "https://nimhans.ac.in"
  },
  {
    name: "The Live Love Laugh Foundation",
    description: "A charitable trust founded by Deepika Padukone that aims to give hope to every person experiencing stress, anxiety, and depression.",
    location: "Mumbai, India",
    contact: "info@tlllfoundation.org",
    url: "https://www.thelivelovelaughfoundation.org/"
  },
  {
    name: "AASRA",
    description: "A crisis intervention center for the lonely, distressed and suicidal. AASRA provides 24/7 helpline services.",
    location: "Mumbai, India",
    contact: "Helpline: 91-9820466726",
    url: "http://www.aasra.info/"
  },
  {
    name: "Vandrevala Foundation",
    description: "Provides free and confidential emotional support for mental health issues and psychiatric crisis to people in India.",
    location: "Mumbai, India",
    contact: "Helpline: 9999 666 555",
    url: "https://www.vandrevalafoundation.com/"
  },
  {
    name: "Manastha",
    description: "A platform connecting individuals to verified and professional mental health experts across India.",
    location: "Multiple cities, India",
    contact: "contact@manastha.com",
    url: "https://www.manastha.com/"
  },
  {
    name: "Mpower",
    description: "An initiative by the Aditya Birla Education Trust that provides holistic mental health care solutions in India.",
    location: "Mumbai, Delhi, Bangalore, India",
    contact: "1800-120-820050",
    url: "https://mpowerminds.com/"
  }
];
