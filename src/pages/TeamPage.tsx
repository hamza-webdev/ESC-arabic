import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { playersData } from '../data/playersData';

const TeamPage: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const positions = [
    { id: 'all', name: 'الكل' },
    { id: 'حارس مرمى', name: 'حراس المرمى' },
    { id: 'مدافع', name: 'المدافعون' },
    { id: 'وسط', name: 'لاعبو الوسط' },
    { id: 'وسط مهاجم', name: 'صانعو اللعب' },
    { id: 'جناح', name: 'الأجنحة' },
    { id: 'مهاجم', name: 'المهاجمون' },
  ];

  const filteredPlayers = filter === 'all' 
    ? playersData 
    : playersData.filter(player => player.position === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">فريقنا</h1>
          <p className="text-xl max-w-2xl mx-auto">
            تعرف على تشكيلة فريق الأمل الرياضي لكرة القدم، نخبة من المواهب التي تمثل النادي بكل فخر
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-8 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {positions.map(position => (
              <button
                key={position.id}
                onClick={() => setFilter(position.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === position.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {position.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Players Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPlayers.map(player => (
              <div key={player.id} className="player-card bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={player.image} 
                    alt={player.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{player.name}</h3>
                    <span className="bg-primary-100 text-primary-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      {player.number}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{player.position}</p>
                  <div className="border-t border-gray-100 pt-3 mt-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">العمر: {player.age}</span>
                      <span className="text-gray-500">الجنسية: {player.nationality}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Staff */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">الجهاز الفني والإداري</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/6866393/pexels-photo-6866393.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="المدرب"
                className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">سمير العابد</h3>
              <p className="text-primary-600 font-medium">المدرب الرئيسي</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/8224754/pexels-photo-8224754.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="مساعد المدرب"
                className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">منير الحمدي</h3>
              <p className="text-primary-600 font-medium">مساعد المدرب</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/6347919/pexels-photo-6347919.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="مدرب اللياقة"
                className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">خالد محمود</h3>
              <p className="text-primary-600 font-medium">مدرب اللياقة البدنية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">انضم إلى فريق الأمل</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            هل تملك الموهبة والشغف لكرة القدم؟ نحن نبحث دائماً عن مواهب جديدة للانضمام إلى صفوف الفريق
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4">تواصل مع إدارة الفريق</h3>
            <ul className="space-y-3 text-right">
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="h-5 w-5 text-primary-600" />
                <span>+216 XX XXX XXX</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="h-5 w-5 text-primary-600" />
                <span>recruiting@alamalteam.com</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <MapPin className="h-5 w-5 text-primary-600" />
                <span>ملعب البلدية، شربان، تونس</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;