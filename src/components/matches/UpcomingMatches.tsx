import React from 'react';
import { Calendar } from 'lucide-react';
import { matchesData } from '../../data/matchesData';

interface UpcomingMatchesProps {
  limit?: number;
}

const UpcomingMatches: React.FC<UpcomingMatchesProps> = ({ limit }) => {
  // Filter only upcoming matches and limit them if needed
  const upcomingMatches = matchesData
    .filter(match => new Date(match.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, limit);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('ar-TN', options);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {upcomingMatches.map((match) => (
        <div 
          key={match.id}
          className="match-card bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="bg-primary-600 text-white p-3 flex items-center justify-between">
            <span className="font-bold">{match.competition}</span>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
              <span className="text-sm">{formatDate(match.date)}</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-8">
              <div className="text-center flex-1">
                <img 
                  src={match.homeTeam.logo} 
                  alt={match.homeTeam.name}
                  className="h-16 w-16 object-contain mx-auto mb-2"
                />
                <h3 className="font-bold">{match.homeTeam.name}</h3>
              </div>
              <div className="text-2xl font-bold px-4">VS</div>
              <div className="text-center flex-1">
                <img 
                  src={match.awayTeam.logo} 
                  alt={match.awayTeam.name}
                  className="h-16 w-16 object-contain mx-auto mb-2"
                />
                <h3 className="font-bold">{match.awayTeam.name}</h3>
              </div>
            </div>
            <div className="text-center text-gray-600">
              <p>{match.venue}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingMatches;