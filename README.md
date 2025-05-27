# فريق الأمل الرياضي - شربان

هذا المشروع عبارة عن موقع إلكتروني ودعم لوحة تحكم (Backend Dashboard) لنادي "فريق الأمل الرياضي" بمدينة شربان.

## المميزات الرئيسية

- واجهة أمامية (Frontend) حديثة مبنية بـ React, TypeScript, Vite, Tailwind CSS مع دعم كامل للغة العربية (RTL).
- إدارة ديناميكية للأخبار، المباريات، اللاعبين، ومعرض الصور عبر لوحة تحكم (Backend) مبنية بـ Node.js, Express, Prisma و PostgreSQL.
- بيانات تجريبية (seed) تُولّد تلقائياً باللغة العربية.

---

## هيكلية المشروع

```
ESC-arabic/
│
├── src/                # واجهة المستخدم React
│   ├── components/     # مكونات الواجهة (رأس، تذييل، بطاقات...)
│   ├── data/           # بيانات ثابتة (للاختبار فقط)
│   ├── pages/          # صفحات الموقع (رئيسية، فريق، مباريات...)
│   └── ...
│
├── backend/            # لوحة التحكم وواجهة برمجة التطبيقات
│   ├── src/
│   │   ├── routes/     # ملفات CRUD (news, matches, players, gallery)
│   │   ├── index.ts    # نقطة الدخول للـ API
│   │   └── seed.ts     # سكريبت إدخال بيانات تجريبية بالعربية
│   ├── prisma/
│   │   └── schema.prisma # تعريف قاعدة البيانات Prisma
│   └── package.json
│
└── README.md
```

---

## تشغيل المشروع

### 1. تشغيل الواجهة الأمامية (Frontend)

```bash
npm install
npm run dev
```

### 2. تشغيل لوحة التحكم (Backend)

```bash
cd backend
npm install
npx prisma migrate dev
npm run dev
```

### 3. إدخال بيانات تجريبية بالعربية

```bash
npx ts-node src/seed.ts
```

---

## نقاط النهاية (Endpoints) للاختبار عبر Postman

### الأخبار (News)
- جميع الأخبار: `GET http://localhost:4000/api/news`
- خبر محدد: `GET http://localhost:4000/api/news/1`
- إضافة خبر: `POST http://localhost:4000/api/news`

### اللاعبين (Players)
- جميع اللاعبين: `GET http://localhost:4000/api/players`
- لاعب محدد: `GET http://localhost:4000/api/players/1`
- إضافة لاعب: `POST http://localhost:4000/api/players`

### المباريات (Matches)
- جميع المباريات: `GET http://localhost:4000/api/matches`
- مباراة محددة: `GET http://localhost:4000/api/matches/1`
- إضافة مباراة: `POST http://localhost:4000/api/matches`

### المعرض (Gallery)
- جميع الصور: `GET http://localhost:4000/api/gallery`
- صورة محددة: `GET http://localhost:4000/api/gallery/1`
- إضافة صورة: `POST http://localhost:4000/api/gallery`

---

## مثال Body لإضافة خبر (POST /api/news)
```json
{
  "title": "خبر جديد",
  "summary": "ملخص الخبر",
  "content": "تفاصيل الخبر...",
  "image": "https://example.com/image.jpg",
  "date": "2025-05-27T12:00:00.000Z"
}
```

---

## الرخصة
هذا المشروع للاستخدام غير التجاري والتعليمي فقط.

---

© فريق الأمل الرياضي - شربان
