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

// GET /matches - Récupérer toutes les matches
router.get(
  '/',
  asyncHandler(async (req, res): Promise<void> => {
    const matches = await prisma.match.findMany({
      orderBy: { date: 'desc' },
    });
    res.json(matches);
  })
);

// GET /matches/:id - Récupérer une matches par ID
router.get(
  '/:id',
  asyncHandler(async (req, res): Promise<void> => {
    const id = Number(req.params.id);
    const matches = await prisma.match.findUnique({ where: { id } });

    if (!matches) {
      res.status(404).json({ error: 'Not found' });
      return;
    }

    res.json(matches);
  })
);

// POST /matches - Créer une matches
router.post(
  '/',
  asyncHandler(async (req, res): Promise<void> => {
    const {date, competition, venue, homeTeam, awayTeam, homeScore, awayScore } = req.body;

    const matches = await prisma.match.create({
      data: {
        date: new Date(date),
        competition,
        venue,
        homeTeam,
        awayTeam,
        homeScore,
        awayScore
      },
    });

    res.status(201).json(matches);
  })
);

// PUT /matches/:id - Mettre à jour une matches
router.put(
  '/:id',
  asyncHandler(async (req, res): Promise<void> => {
    const id = Number(req.params.id);
    const { date, competition, venue, homeTeam, awayTeam, homeScore, awayScore } = req.body;

    const matches = await prisma.match.update({
      where: { id },
      data: {
        date: new Date(date),
        competition,
        venue,
        homeTeam,
        awayTeam,
        homeScore,
        awayScore
      },
    });

    res.json(matches);
  })
);

// DELETE /matches/:id - Supprimer une matches
router.delete(
  '/:id',
  asyncHandler(async (req, res): Promise<void> => {
    const id = Number(req.params.id);
    await prisma.match.delete({ where: { id } });
    res.status(204).end();
  })
);

export default router;
