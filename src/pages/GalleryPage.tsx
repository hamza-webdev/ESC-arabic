import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { galleryData } from '../data/galleryData';

const GalleryPage: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'الكل' },
    { id: 'مباريات', name: 'مباريات' },
    { id: 'تدريبات', name: 'تدريبات' },
    { id: 'فعاليات', name: 'فعاليات' },
    { id: 'مجتمع', name: 'مجتمع' },
  ];

  const filteredImages = galleryData
    .filter(image => 
      (categoryFilter === 'all' || image.category === categoryFilter) &&
      (image.title.includes(searchTerm))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const handleImageClick = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const selectedImageData = selectedImage !== null 
    ? galleryData.find(img => img.id === selectedImage) 
    : null;

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
          <h1 className="text-4xl font-bold mb-4">معرض الصور</h1>
          <p className="text-xl max-w-2xl mx-auto">
            مجموعة من الصور الحصرية لفريق الأمل  الرياضي خلال المباريات والتدريبات والفعاليات المختلفة
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
                placeholder="ابحث في الصور..."
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

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredImages.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-xl text-gray-600">لا توجد صور متطابقة مع البحث</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map(image => (
                <div 
                  key={image.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                  onClick={() => handleImageClick(image.id)}
                >
                  <div className="relative h-64">
                    <img 
                      src={image.image} 
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <span className="text-white font-medium">{image.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal for image preview */}
      {selectedImage !== null && selectedImageData && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 fade-in">
          <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-screen">
            <div className="relative">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-1 hover:bg-black/70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <img 
                src={selectedImageData.image} 
                alt={selectedImageData.title}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold">{selectedImageData.title}</h3>
              <div className="flex items-center text-gray-500 text-sm mt-2 justify-between">
                <span>{formatDate(selectedImageData.date)}</span>
                <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {selectedImageData.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="bg-primary-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">هل لديك صور للفريق؟</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            شارك صورك مع مجتمع المشجعين وساهم في إثراء أرشيف النادي
          </p>
          <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg text-lg transition-colors duration-300">
            أرسل صورك
          </button>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;