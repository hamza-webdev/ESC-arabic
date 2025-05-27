import React from 'react';
import { Mail, MapPin, Phone, Users, Calendar, MessageSquare } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">اتصل بنا</h1>
          <p className="text-xl max-w-2xl mx-auto">
            تواصل مع إدارة فريق الأمل الرياضي لأي استفسار أو اقتراح
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">معلومات الاتصال</h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="bg-primary-100 rounded-full p-3 mt-1">
                      <Phone className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">رقم الهاتف</h3>
                      <p className="text-gray-600">+216 XX XXX XXX</p>
                      <p className="text-gray-600">+216 XX XXX XXX</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="bg-primary-100 rounded-full p-3 mt-1">
                      <Mail className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">البريد الإلكتروني</h3>
                      <p className="text-gray-600">info@alamalteam.com</p>
                      <p className="text-gray-600">support@alamalteam.com</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="bg-primary-100 rounded-full p-3 mt-1">
                      <MapPin className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">العنوان</h3>
                      <p className="text-gray-600">ملعب البلدية، شربان (المهدية )</p>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-6">أوقات العمل</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="font-medium">الأحد - الخميس</span>
                    <span>9:00 صباحاً - 5:00 مساءً</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">الجمعة</span>
                    <span>9:00 صباحاً - 12:00 ظهراً</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">السبت</span>
                    <span>مغلق</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">أرسل رسالة</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">الاسم الكامل</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">البريد الإلكتروني</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">الموضوع</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="أدخل موضوع الرسالة"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">الرسالة</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="اكتب رسالتك هنا..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300"
                  >
                    إرسال الرسالة
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Reasons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">كيف يمكننا مساعدتك؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-primary-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">انضم إلى الفريق</h3>
              <p className="text-gray-600">
                للاستفسار عن الانضمام إلى فريق الأمل الرياضي كلاعب أو متطوع
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-primary-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">معلومات المباريات</h3>
              <p className="text-gray-600">
                للاستفسار عن مواعيد المباريات وشراء التذاكر وأماكن الملاعب
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-primary-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">اقتراحات وشكاوى</h3>
              <p className="text-gray-600">
                لتقديم اقتراحات لتطوير النادي أو الإبلاغ عن أي مشكلة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">موقعنا</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">خريطة موقع النادي ستظهر هنا</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;