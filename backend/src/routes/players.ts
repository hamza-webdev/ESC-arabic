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

// GET /player - Récupérer toutes les player
router.get(
  '/',
  asyncHandler(async (req, res): Promise<void> => {
    const player = await prisma.player.findMany({
      orderBy: { number: 'desc' },
    });
    res.json(player);
  })
);

// GET /player/:id - Récupérer une player par ID
router.get(
  '/:id',
  asyncHandler(async (req, res): Promise<void> => {
    const id = Number(req.params.id);
    const player = await prisma.player.findUnique({ where: { id } });

    if (!player) {
      res.status(404).json({ error: 'Not found' });
      return;
    }

    res.json(player);
  })
);

// POST /player - Créer une player
router.post(
  '/',
  asyncHandler(async (req, res): Promise<void> => {
    const {  name, position, number, image } = req.body;

    const player = await prisma.player.create({
      data: {
         name,
        position,
        number,
        image
      },
    });

    res.status(201).json(player);
  })
);

// PUT /player/:id - Mettre à jour une player
router.put(
  '/:id',
  asyncHandler(async (req, res): Promise<void> => {
    const id = Number(req.params.id);
    const { name, position, number, image} = req.body;

    const player = await prisma.player.update({
      where: { id },
      data: {
        name,
        position,
        number,
        image
      },
    });

    res.json(player);
  })
);

// DELETE /player/:id - Supprimer une player
router.delete(
  '/:id',
  asyncHandler(async (req, res): Promise<void> => {
    const id = Number(req.params.id);
    await prisma.player.delete({ where: { id } });
    res.status(204).end();
  })
);

export default router;
