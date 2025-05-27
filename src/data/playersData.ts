export interface Player {
  id: number;
  name: string;
  position: string;
  number: number;
  image: string;
  age: number;
  nationality: string;
  bio: string;
  stats: {
    matches: number;
    goals?: number;
    assists?: number;
    cleanSheets?: number;
    saves?: number;
  };
}

export const playersData: Player[] = [
  {
    id: 1,
    name: 'أحمد الحسن',
    position: 'مهاجم',
    number: 9,
    image: 'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=300',
    age: 24,
    nationality: 'تونسي',
    bio: 'مهاجم متميز بسرعته وقدرته على التسجيل من مختلف المواقف، انضم للفريق في 2022 وأصبح من العناصر الأساسية.',
    stats: {
      matches: 45,
      goals: 28,
      assists: 12
    }
  },
  {
    id: 2,
    name: 'محمد علي',
    position: 'وسط مهاجم',
    number: 10,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGpjZeWurtn6QTx6Jz_U7IZO17ttDXQ5srg&s?auto=compress&cs=tinysrgb&w=300',
    age: 26,
    nationality: 'تونسي',
    bio: 'صانع ألعاب الفريق وقائده في الملعب، يتميز برؤيته للعب وتمريراته الدقيقة. من أبناء النادي وأحد رموزه.',
    stats: {
      matches: 67,
      goals: 15,
      assists: 32
    }
  },
  {
    id: 3,
    name: 'كريم رجب',
    position: 'وسط',
    number: 8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMG8X9zzb2I-sl6bayH9IPpns0fjKD3abso2pL1IBye9wkhaTi82ErydpyECrjDzaIeGY&usqp=CAU?auto=compress&cs=tinysrgb&w=300',
    age: 23,
    nationality: 'تونسي',
    bio: 'انضم حديثاً للفريق، لاعب وسط بمهارات عالية في الاستحواذ والتمرير، سبق له تمثيل المنتخب الوطني للشباب.',
    stats: {
      matches: 12,
      goals: 3,
      assists: 5
    }
  },
  {
    id: 4,
    name: 'ياسين المؤدب',
    position: 'مدافع',
    number: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdr_qLdLXFrllG9wwEQYL7f7W9xm-elfYmrcABr7ePzF2wmaJtY0VbZzQBPOkcJllpPA&usqp=CAU?auto=compress&cs=tinysrgb&w=300',
    age: 28,
    nationality: 'تونسي',
    bio: 'مدافع قوي وصلب، قائد خط الدفاع ومن أكثر اللاعبين خبرة في الفريق. انضم للنادي في 2018.',
    stats: {
      matches: 78,
      goals: 5,
      assists: 3
    }
  },
  {
    id: 5,
    name: 'نزار الحارس',
    position: 'حارس مرمى',
    number: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8xdgS1pK_7-SxYa-JABHhjwZTnxmNFANLAY2AjVOCVb9EaTAeWxtLSGuRKBxU3uVD8tY&usqp=CAU?auto=compress&cs=tinysrgb&w=300',
    age: 29,
    nationality: 'تونسي',
    bio: 'حارس مرمى متميز بردود فعله السريعة وقدرته على قيادة الدفاع. انضم للفريق في 2020 وأصبح الحارس الأساسي.',
    stats: {
      matches: 56,
      cleanSheets: 22,
      saves: 189
    }
  },
  {
    id: 6,
    name: 'أمين الصادق',
    position: 'جناح',
    number: 7,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZiKRANq28XFQXSattm07yG96Jnl0J8cn4p0EYrZMyQn5f-tKuRNcsN6u4CDU19ggD9E&usqp=CAU?auto=compress&cs=tinysrgb&w=300',
    age: 22,
    nationality: 'تونسي',
    bio: 'لاعب شاب موهوب يتميز بسرعته ومراوغاته على الأجنحة. من أبناء أكاديمية النادي وأحد المواهب الواعدة.',
    stats: {
      matches: 34,
      goals: 9,
      assists: 14
    }
  },
  {
    id: 7,
    name: 'رامي السالمي',
    position: 'مدافع',
    number: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dwClNrS5Ood5gD6-zz0Gcc12A-TFIoJdQQ&s?auto=compress&cs=tinysrgb&w=300',
    age: 25,
    nationality: 'تونسي',
    bio: 'ظهير أيسر متميز بانطلاقاته الهجومية ومساندته للهجوم، مع صلابة دفاعية جيدة.',
    stats: {
      matches: 41,
      goals: 2,
      assists: 8
    }
  },
  {
    id: 8,
    name: 'بلال محمود',
    position: 'وسط دفاعي',
    number: 6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxDhzTL4kDJtF1pLbrQAHKZOEOEAT3gjcT4w&s?auto=compress&cs=tinysrgb&w=300',
    age: 27,
    nationality: 'تونسي',
    bio: 'لاعب وسط دفاعي قوي في الاستحواذ والمراقبة، يعتبر حلقة الوصل بين الدفاع والهجوم.',
    stats: {
      matches: 52,
      goals: 3,
      assists: 6
    }
  }
];