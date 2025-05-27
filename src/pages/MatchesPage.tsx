import React, { useState } from 'react';
import { Calendar } from 'react-feather'; // or your icon library
import MapPin from '../components/layout/MapPin';

import { matchesData } from '../data/matchesData';

const MatchesPage: React.FC = () => {
  const [filter, setFilter] = useState('upcoming'); // 'upcoming', 'past', 'all'

  // Split matches into upcoming and past
  const today = new Date();
  const upcomingMatches = matchesData
    .filter(match => new Date(match.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
  const pastMatches = matchesData
    .filter(match => new Date(match.date) < today && match.result)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const displayedMatches = filter === 'upcoming' 
    ? upcomingMatches 
    : filter === 'past' 
      ? pastMatches 
      : [...upcomingMatches, ...pastMatches];

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
    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">جدول المباريات</h1>
          <p className="text-xl max-w-2xl mx-auto">
            تابع مواعيد مباريات فريق الأمل الرياضي ونتائجها
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-8 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                filter === 'upcoming'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              المباريات القادمة
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                filter === 'past'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              المباريات السابقة
            </button>
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              جميع المباريات
            </button>
          </div>
        </div>
      </section>

      {/* Matches List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {displayedMatches.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-xl text-gray-600">لا توجد مباريات لعرضها حالياً</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {displayedMatches.map(match => (
                <div 
                  key={match.id}
                  className="match-card bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="bg-primary-600 text-white p-3 flex justify-between items-center">
                    <span className="font-bold">{match.competition}</span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
                      <span className="text-sm">{formatDate(match.date)}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-center flex-1">
                        <img 
                          src={match.homeTeam.logo} 
                          alt={match.homeTeam.name}
                          className="h-20 w-20 object-contain mx-auto mb-3"
                        />
                        <h3 className="font-bold text-lg">{match.homeTeam.name}</h3>
                      </div>
                      
                      {match.result ? (
                        <div className="text-center mx-4">
                          <div className="text-3xl font-bold mb-1">
                            {match.result.homeScore} - {match.result.awayScore}
                          </div>
                          <div className="text-sm text-gray-500">النتيجة النهائية</div>
                        </div>
                      ) : (
                        <div className="text-2xl font-bold text-primary-600 px-4">VS</div>
                      )}
                      
                      <div className="text-center flex-1">
                        <img 
                          src={match.awayTeam.logo} 
                          alt={match.awayTeam.name}
                          className="h-20 w-20 object-contain mx-auto mb-3"
                        />
                        <h3 className="font-bold text-lg">{match.awayTeam.name}</h3>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center text-gray-600">
                      <p className="flex items-center justify-center">
                        <MapPin className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
                        {match.venue}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Season Calendar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">روزنامة الموسم 2025</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary-600">الدور الأول</h3>
                <ul className="space-y-3 text-right">
                  <li className="flex items-center space-x-3 rtl:space-x-reverse justify-center">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span>15 يونيو - 30 أغسطس</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary-600">الدور الثاني</h3>
                <ul className="space-y-3 text-right">
                  <li className="flex items-center space-x-3 rtl:space-x-reverse justify-center">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span>15 سبتمبر - 30 نوفمبر</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary-600">الأدوار النهائية</h3>
                <ul className="space-y-3 text-right">
                  <li className="flex items-center space-x-3 rtl:space-x-reverse justify-center">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span>15 ديسمبر - 30 يناير</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MatchesPage;