export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface Match {
  id: number;
  date: string;
  competition: string;
  homeTeam: Team;
  awayTeam: Team;
  venue: string;
  result?: {
    homeScore: number;
    awayScore: number;
  };
}

// Sample team logos using Pexels sports-related images as placeholders
const teamLogoPlaceholder = "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=150";
const alAmalLogo = "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=150";

export const matchesData: Match[] = [
  {
    id: 1,
    date: '2025-06-15T17:00:00',
    competition: 'الدوري المحلي',
    homeTeam: {
      id: 1,
      name: 'فريق الأمل',
      logo: alAmalLogo
    },
    awayTeam: {
      id: 2,
      name: 'النجم الرياضي',
      logo: teamLogoPlaceholder
    },
    venue: 'ملعب البلدية، شربان'
  },
  {
    id: 2,
    date: '2025-06-22T18:30:00',
    competition: 'كأس الجمهورية',
    homeTeam: {
      id: 3,
      name: 'الاتحاد الرياضي',
      logo: teamLogoPlaceholder
    },
    awayTeam: {
      id: 1,
      name: 'فريق الأمل',
      logo: alAmalLogo
    },
    venue: 'الملعب الرئيسي، تونس'
  },
  {
    id: 3,
    date: '2025-06-29T17:00:00',
    competition: 'الدوري المحلي',
    homeTeam: {
      id: 1,
      name: 'فريق الأمل',
      logo: alAmalLogo
    },
    awayTeam: {
      id: 4,
      name: 'المستقبل الرياضي',
      logo: teamLogoPlaceholder
    },
    venue: 'ملعب البلدية، شربان'
  },
  {
    id: 4,
    date: '2025-07-06T19:00:00',
    competition: 'الدوري المحلي',
    homeTeam: {
      id: 5,
      name: 'الوفاق الرياضي',
      logo: teamLogoPlaceholder
    },
    awayTeam: {
      id: 1,
      name: 'فريق الأمل',
      logo: alAmalLogo
    },
    venue: 'ملعب الوفاق، سوسة'
  },
  {
    id: 5,
    date: '2025-05-25T17:00:00',
    competition: 'الدوري المحلي',
    homeTeam: {
      id: 1,
      name: 'فريق الأمل',
      logo: alAmalLogo
    },
    awayTeam: {
      id: 6,
      name: 'الهلال الرياضي',
      logo: teamLogoPlaceholder
    },
    venue: 'ملعب البلدية، شربان',
    result: {
      homeScore: 2,
      awayScore: 1
    }
  },
  {
    id: 6,
    date: '2025-05-18T18:30:00',
    competition: 'كأس الجمهورية',
    homeTeam: {
      id: 7,
      name: 'النصر الرياضي',
      logo: teamLogoPlaceholder
    },
    awayTeam: {
      id: 1,
      name: 'فريق الأمل',
      logo: alAmalLogo
    },
    venue: 'ملعب النصر، المنستير',
    result: {
      homeScore: 0,
      awayScore: 3
    }
  }
];