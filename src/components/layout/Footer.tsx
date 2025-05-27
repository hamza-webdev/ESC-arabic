import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <Trophy className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">فريق الأمل الرياضي</span>
            </div>
            <p className="mt-4 text-gray-300">
              نادي كرة قدم يطمح للتميز والمنافسة على جميع المستويات، تأسس عام 2010 في شربان.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse mt-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white transition-colors">الفريق</Link>
              </li>
              <li>
                <Link to="/matches" className="text-gray-300 hover:text-white transition-colors">المباريات</Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-white transition-colors">الأخبار</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">معرض الصور</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">اتصل بنا</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">مواعيد التدريب</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">السبت: 5:00 - 7:00 مساءً</li>
              <li className="text-gray-300">الثلاثاء: 5:00 - 7:00 مساءً</li>
              <li className="text-gray-300">الخميس: 5:00 - 7:00 مساءً</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">اتصل بنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300">
                <Phone className="h-5 w-5 text-primary-400" />
                <span>+216 XX XXX XXX</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300">
                <Mail className="h-5 w-5 text-primary-400" />
                <span>info@alamalteam.com</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span>ملعب البلدية، شربان، تونس</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} فريق الأمل الرياضي - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;