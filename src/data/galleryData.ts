export interface GalleryImage {
  id: number;
  title: string;
  image: string;
  category: string;
  date: string;
}

export const galleryData: GalleryImage[] = [
  {
    id: 1,
    title: 'تدريبات الفريق الأسبوعية',
    image: 'https://images.pexels.com/photos/3041176/pexels-photo-3041176.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'تدريبات',
    date: '2025-04-15'
  },
  {
    id: 2,
    title: 'مباراة الأمل ضد النصر',
    image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'مباريات',
    date: '2025-05-18'
  },
  {
    id: 3,
    title: 'تكريم اللاعبين المتميزين',
    image: 'https://images.pexels.com/photos/6767782/pexels-photo-6767782.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'فعاليات',
    date: '2025-04-30'
  },
  {
    id: 4,
    title: 'تدريبات اللياقة البدنية',
    image: 'https://images.pexels.com/photos/8224988/pexels-photo-8224988.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'تدريبات',
    date: '2025-04-10'
  },
  {
    id: 5,
    title: 'مباراة ودية مع فريق الشباب',
    image: 'https://images.pexels.com/photos/8225186/pexels-photo-8225186.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'مباريات',
    date: '2025-04-05'
  },
  {
    id: 6,
    title: 'حفل تقديم القميص الجديد',
    image: 'https://images.pexels.com/photos/6603175/pexels-photo-6603175.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'فعاليات',
    date: '2025-03-28'
  },
  {
    id: 7,
    title: 'لقطات من مباراة الكأس',
    image: 'https://images.pexels.com/photos/8224751/pexels-photo-8224751.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'مباريات',
    date: '2025-03-20'
  },
  {
    id: 8,
    title: 'زيارة مدرسة محلية',
    image: 'https://images.pexels.com/photos/6941089/pexels-photo-6941089.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'مجتمع',
    date: '2025-03-15'
  },
  {
    id: 9,
    title: 'تمارين الإحماء قبل المباراة',
    image: 'https://images.pexels.com/photos/5778899/pexels-photo-5778899.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'تدريبات',
    date: '2025-03-10'
  }
];