import { TeamMember, NavItem, WorkshopTopic } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Team', path: '/team' },
  { label: 'Workshops', path: '/workshops' },
  { label: 'Competitions', path: '/competitions' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: '1', name: 'Noah Havrot-Landry', role: 'President', image: '/images/execs/Noah.jpg' },
  { id: '2', name: 'Charles Morin', role: 'VP Internal', image: '/images/execs/Charles.png' },
  { id: '3', name: 'Adrian Marinov', role: 'Co-VP External', image: '/images/execs/Adrian.jpg' },
  { id: '4', name: 'Louis Philippe Bejjani', role: 'Co-VP External', image: '/images/execs/Louis.jpg' },
  { id: '5', name: 'Filip Snítil', role: 'VP Tech', image: '/images/execs/Filip.jpg' },
  { id: '6', name: 'Natalia Andrea Lucena Henao', role: 'VP Finance', image: '/images/execs/Natalia.jpg' },
  { id: '7', name: 'Mia Desgagné', role: 'VP Communications', image: '/images/execs/Mia.jpg' },
  { id: '8', name: 'Katya Shubochkin', role: 'VP Operations & Logistics', image: '/images/execs/Katya.jpg' },
  { id: '9', name: 'Niko Vriniotis', role: 'Team Manager', image: '/images/execs/Niko.jpg' },
];

// modulo-based workshop topics (cycles through topics)
export const WORKSHOP_TOPICS: WorkshopTopic[] = [
  { week: 0, topic: 'Muscle-ups' }, // 0 index for modulo math, effectively 1st
  { week: 1, topic: 'Handstands' },
  { week: 2, topic: 'Levers' },
  { week: 3, topic: 'Weighted' },
];

// Manual workshop topics (date-based mapping)
// Format: 'YYYY-MM-DD' => topic name
export const MANUAL_WORKSHOP_TOPICS: Record<string, string> = {
  // add dates manually:
  '2025-12-03': 'PLANCHE',
  '2025-12-10': 'Studying FOR FINALS',
  '2025-12-17': 'More studying',
  '2025-12-24': 'Merry Christmas ya filthy animals',
  '2025-12-31': 'Noah is fat and doesnt do anything',
};

// helper function to get workshop topic on workshops page
// set USE_MANUAL_TOPICS to true to use manual topics, false to use modulo
const USE_MANUAL_TOPICS = true;

export const getWorkshopTopic = (date: Date): string => {
  if (USE_MANUAL_TOPICS) {
    // Manual mode: look up by date
    const dateKey = date.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    return MANUAL_WORKSHOP_TOPICS[dateKey] || 'TBA'; // Return 'TBA' if date not found
  } else {
    // Modulo mode: cycle through topics based on week
    const dayOfMonth = date.getDate();
    const weekIndex = Math.floor((dayOfMonth - 1) / 7);
    const topic = WORKSHOP_TOPICS[weekIndex % WORKSHOP_TOPICS.length];
    return topic.topic;
  }
};

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/mcgillcalisthenics/',
  messenger: 'https://m.me/j/AbZMbapjVfoEO32a/',
  facebook: 'https://www.facebook.com/people/McGill-Calisthenics-Club/61571444662955/',
  whatsapp: 'https://chat.whatsapp.com/LooJj9ridYE6DZN5rSLXFo',
  email: 'mcgillcalisthenics@outlook.com'
};