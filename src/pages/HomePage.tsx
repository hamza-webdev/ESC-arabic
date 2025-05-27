import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Trophy, Users, Star, ChevronLeft } from 'lucide-react';
import UpcomingMatches from '../components/matches/UpcomingMatches';
import LatestNews from '../components/news/LatestNews';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-pattern text-white py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 slide-in-right">
               فريق الأمل الرياضي شربان
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 slide-in-left">
              نسعى للتميز ونلعب بروح الفريق الواحد
            </p>
            <div className="flex flex-wrap justify-center gap-4 fade-in">
              <Link 
                to="/matches" 
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                جدول المباريات
              </Link>
              <Link 
                to="/team" 
                className="bg-transparent hover:bg-primary-700 border-2 border-white text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                تعرف على الفريق
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="bg-primary-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">الإنجازات</h3>
              <p className="text-gray-600">بطولات محلية متعددة وإنجازات على مستوى المنطقة</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="bg-primary-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">اللاعبون</h3>
              <p className="text-gray-600">مجموعة موهوبة من اللاعبين المحليين والدوليين</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="bg-primary-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">المباريات</h3>
              <p className="text-gray-600">جدول مباريات حافل وتحديثات مستمرة للمواعيد</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="bg-primary-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">التميز</h3>
              <p className="text-gray-600">الالتزام بالتميز في كل جوانب اللعبة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Match Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">المباريات القادمة</h2>
          <UpcomingMatches limit={3} />
          <div className="text-center mt-8">
            <Link 
              to="/matches" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              عرض جميع المباريات
              <ChevronLeft className="h-5 w-5 mr-1 rtl:mr-0 rtl:ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">آخر الأخبار</h2>
          <LatestNews limit={3} />
          <div className="text-center mt-8">
            <Link 
              to="/news" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              جميع الأخبار
              <ChevronLeft className="h-5 w-5 mr-1 rtl:mr-0 rtl:ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">انضم إلى عائلة فريق الأمل</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            هل أنت مهتم بدعم الفريق أو الانضمام إلينا؟ تواصل معنا الآن!
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg text-lg transition-colors duration-300"
          >
            تواصل معنا
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;