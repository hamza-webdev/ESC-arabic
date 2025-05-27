import React, { useState } from 'react';
import { Calendar, Search } from 'lucide-react';
import { newsData } from '../data/newsData';

const NewsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'الكل' },
    { id: 'مباريات', name: 'مباريات' },
    { id: 'تعاقدات', name: 'تعاقدات' },
    { id: 'تدريبات', name: 'تدريبات' },
    { id: 'إدارة', name: 'إدارة' },
  ];

  const filteredNews = newsData
    .filter(news => 
      (categoryFilter === 'all' || news.category === categoryFilter) &&
      (news.title.includes(searchTerm) || news.content.includes(searchTerm))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('ar-TN', options);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">أخبار الفريق</h1>
          <p className="text-xl max-w-2xl mx-auto">
            تابع آخر أخبار وتحديثات فريق الأمل الرياضي
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white py-8 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div className="relative w-full md:w-1/3">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pr-10 p-2.5 focus:ring-primary-500 focus:border-primary-500"
                placeholder="ابحث في الأخبار..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setCategoryFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    categoryFilter === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredNews.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-xl text-gray-600">لا توجد أخبار متطابقة مع البحث</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                {filteredNews.map(news => (
                  <div 
                    key={news.id}
                    className="news-card bg-white rounded-lg shadow-md overflow-hidden mb-8"
                  >
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <Calendar className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
                        <span>{formatDate(news.date)}</span>
                        <span className="mx-2">•</span>
                        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {news.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3">{news.title}</h2>
                      <p className="text-gray-600 mb-4">{news.summary}</p>
                      <div className="text-right">
                        <a 
                          href={`#/news/${news.id}`}
                          className="text-primary-600 hover:text-primary-700 font-medium inline-block"
                        >
                          اقرأ المزيد
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                {/* Recent News Sidebar */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 border-b pb-2">آخر الأخبار</h3>
                  <ul className="space-y-4">
                    {newsData
                      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                      .slice(0, 5)
                      .map(news => (
                        <li key={news.id} className="border-b pb-4 last:border-b-0">
                          <a href={`#/news/${news.id}`} className="hover:text-primary-600">
                            <p className="font-medium">{news.title}</p>
                            <p className="text-sm text-gray-500 mt-1">{formatDate(news.date)}</p>
                          </a>
                        </li>
                      ))
                    }
                  </ul>
                </div>
                
                {/* Categories */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4 border-b pb-2">التصنيفات</h3>
                  <ul className="space-y-2">
                    {categories
                      .filter(cat => cat.id !== 'all')
                      .map(category => (
                        <li key={category.id}>
                          <button 
                            onClick={() => setCategoryFilter(category.id)}
                            className={`w-full text-right p-2 rounded hover:bg-gray-100 transition-colors ${
                              categoryFilter === category.id ? 'bg-primary-50 text-primary-600' : ''
                            }`}
                          >
                            {category.name} ({newsData.filter(news => news.category === category.id).length})
                          </button>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">اشترك في النشرة الإخبارية</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            اشترك ليصلك كل جديد عن فريق الأمل الرياضي مباشرة إلى بريدك الإلكتروني
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                placeholder="أدخل بريدك الإلكتروني"
              />
              <button className="bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                اشترك
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;