import { Router, Request, Response, NextFunction, RequestHandler } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Typage strict pour les route handlers asynchrones
type AsyncRouteHandler = (req: Request, res: Response, next: NextFunction) => Promise<void>;

// Middleware pour encapsuler les fonctions async
const asyncHandler = (fn: AsyncRouteHandler): RequestHandler => {
  return (req, res, next) => fn(req, res, next).catch(next);
};

// GET /news - Récupérer toutes les news
router.get(
  '/',
  asyncHandler(async (req, res): Promise<void> => {
    const news = await prisma.news.findMany({
      orderBy: { date: 'desc' },
    });
    res.json(news);
  })
);

// GET /news/:id - Récupérer une news par ID
router.get(
  '/:id',
  asyncHandler(async (req, res): Promise<void> => {
    const id = Number(req.params.id);
    const news = await prisma.news.findUnique({ where: { id } });

    if (!news) {
      res.status(404).json({ error: 'Not found' });
      return;
    }

    res.json(news);
  })
);

// POST /news - Créer une news
router.post(
  '/',
  asyncHandler(async (req, res): Promise<void> => {
    const { title, summary, content, image, date } = req.body;

    const news = await prisma.news.create({
      data: {
        title,
        summary,
        content,
        image,
        date: new Date(date),
      },
    });

    res.status(201).json(news);
  })
);

// PUT /news/:id - Mettre à jour une news
router.put(
  '/:id',
  asyncHandler(async (req, res): Promise<void> => {
    const id = Number(req.params.id);
    const { title, summary, content, image, date } = req.body;

    const news = await prisma.news.update({
      where: { id },
      data: {
        title,
        summary,
        content,
        image,
        date: new Date(date),
      },
    });

    res.json(news);
  })
);

// DELETE /news/:id - Supprimer une news
router.delete(
  '/:id',
  asyncHandler(async (req, res): Promise<void> => {
    const id = Number(req.params.id);
    await prisma.news.delete({ where: { id } });
    res.status(204).end();
  })
);

export default router;
