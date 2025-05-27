import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsData } from '../../data/newsData';

interface LatestNewsProps {
  limit?: number;
}

const LatestNews: React.FC<LatestNewsProps> = ({ limit }) => {
  // Sort by date and limit if needed
  const latestNews = [...newsData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('ar-TN', options);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {latestNews.map((news) => (
        <div 
          key={news.id}
          className="news-card bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img 
            src={news.image} 
            alt={news.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex items-center text-gray-500 text-sm mb-2">
              <Calendar className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
              <span>{formatDate(news.date)}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{news.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{news.summary}</p>
            <Link 
              to={`/news/${news.id}`}
              className="text-primary-600 hover:text-primary-700 font-medium inline-block"
            >
              اقرأ المزيد
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestNews;