import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const newsRoutes = Router();
const prisma = new PrismaClient();

newsRoutes.get('/', async (req, res) => {
  const news = await prisma.news.findMany({ orderBy: { date: 'desc' } });
  res.json(news);
});

newsRoutes.get('/:id', async (req, res) => {
  const news = await prisma.news.findUnique({ where: { id: Number(req.params.id) } });
  if (!news) return res.status(404).json({ error: 'Not found' });
  res.json(news);
});

newsRoutes.post('/', async (req, res) => {
  const { title, summary, content, image, date } = req.body;
  const news = await prisma.news.create({ data: { title, summary, content, image, date: new Date(date) } });
  res.status(201).json(news);
});

newsRoutes.put('/:id', async (req, res) => {
  const { title, summary, content, image, date } = req.body;
  const news = await prisma.news.update({
    where: { id: Number(req.params.id) },
    data: { title, summary, content, image, date: new Date(date) }
  });
  res.json(news);
});

newsRoutes.delete('/:id', async (req, res) => {
  await prisma.news.delete({ where: { id: Number(req.params.id) } });
  res.status(204).end();
});

export default newsRoutes;