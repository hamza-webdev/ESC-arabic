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

// GET /gallery - Récupérer toutes les gallery
router.get(
  '/',
  asyncHandler(async (req, res): Promise<void> => {
    const gallery = await prisma.gallery.findMany({
      orderBy: { date: 'desc' },
    });
    res.json(gallery);
  })
);

// GET /gallery/:id - Récupérer une gallery par ID
router.get(
  '/:id',
  asyncHandler(async (req, res): Promise<void> => {
    const id = Number(req.params.id);
    const gallery = await prisma.gallery.findUnique({ where: { id } });

    if (!gallery) {
      res.status(404).json({ error: 'Not found' });
      return;
    }

    res.json(gallery);
  })
);

// POST /gallery - Créer une gallery
router.post(
  '/',
  asyncHandler(async (req, res): Promise<void> => {
    const { title, image, date } = req.body;

    const gallery = await prisma.gallery.create({
      data: {
        title,       
        image,
        date: new Date(date),
      },
    });

    res.status(201).json(gallery);
  })
);

// PUT /gallery/:id - Mettre à jour une gallery
router.put(
  '/:id',
  asyncHandler(async (req, res): Promise<void> => {
    const id = Number(req.params.id);
    const { title,image, date } = req.body;

    const gallery = await prisma.gallery.update({
      where: { id },
      data: {
        title,        
        image,
        date: new Date(date),
      },
    });

    res.json(gallery);
  })
);

// DELETE /gallery/:id - Supprimer une gallery
router.delete(
  '/:id',
  asyncHandler(async (req, res): Promise<void> => {
    const id = Number(req.params.id);
    await prisma.gallery.delete({ where: { id } });
    res.status(204).end();
  })
);

export default router;
