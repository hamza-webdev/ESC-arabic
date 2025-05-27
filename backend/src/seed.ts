import { PrismaClient } from '@prisma/client';
import { Faker, ar } from '@faker-js/faker';

const faker = new Faker({ locale: ar });
const prisma = new PrismaClient();

async function seed() {
  // News
  for (let i = 1; i <= 10; i++) {
    await prisma.news.create({
      data: {
        title: `خبر رقم ${i}: ${faker.lorem.words(3)}`,
        summary: faker.lorem.sentence(10),
        content: faker.lorem.paragraphs(3),
        image: `https://picsum.photos/seed/news${i}/600/400`,
        date: faker.date.recent({ days: 30 }),
      },
    });
  }

  // Players
  const positions = ['حارس مرمى', 'مدافع', 'وسط ميدان', 'مهاجم'];
  for (let i = 1; i <= 25; i++) {
    await prisma.player.create({
      data: {
        name: faker.person.fullName(),
        position: positions[i % positions.length],
        number: i,
        image: `https://randomuser.me/api/portraits/men/${i}.jpg`,
      },
    });
  }

  // Gallery
  for (let i = 1; i <= 50; i++) {
    await prisma.gallery.create({
      data: {
        title: `صورة رقم ${i}`,
        image: `https://picsum.photos/seed/gallery${i}/800/600`,
        date: faker.date.recent({ days: 60 }),
      },
    });
  }

  // Matches
  for (let i = 1; i <= 20; i++) {
    await prisma.match.create({
      data: {
        date: faker.date.soon({ days: 60 }),
        competition: `بطولة ${faker.lorem.word()}`,
        venue: `ملعب ${faker.location.city()}`,
        homeTeam: `الفريق المحلي ${faker.lorem.word()}`,
        awayTeam: `الفريق الضيف ${faker.lorem.word()}`,
        homeScore: i % 2 === 0 ? faker.number.int({ min: 0, max: 5 }) : null,
        awayScore: i % 2 === 0 ? faker.number.int({ min: 0, max: 5 }) : null,
      },
    });
  }

  console.log('تم إدخال بيانات تجريبية باللغة العربية بنجاح!');
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
