import { NavItem, WorkshopTopic } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Team', path: '/team' },
  { label: 'Workshops', path: '/workshops' },
  { label: 'Competitions', path: '/competitions' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
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
  '2025-12-03': 'Team Training',
  '2025-12-10': 'Team Training',
  '2025-12-17': 'Team Training',
  '2025-12-24': 'Team Training',
  '2025-12-31': 'Team Training',
  '2026-06-07': 'Handstands',
  '2026-06-14': 'Pull-ups & Muscle-ups',
  '2026-06-21': 'Open Training',
  '2026-06-28': 'Human Flag & Planche',
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
  messenger: 'https://www.instagram.com/j/AbaHC00Jm6FBpgrN/',
  facebook: 'https://www.facebook.com/people/McGill-Calisthenics-Club/61571444662955/',
  whatsapp: 'https://chat.whatsapp.com/LooJj9ridYE6DZN5rSLXFo',
  linkedin: 'https://ca.linkedin.com/company/mcgill-calisthenics-club',
  email: 'calisthenics.vpcommunications@mcgilleus.ca'
};