import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

import newsRoutes from './routes/news';
import matchesRoutes from './routes/matches';
import playersRoutes from './routes/players';
import galleryRoutes from './routes/gallery';

dotenv.config();
const app = express();
//const prisma = new PrismaClient();

// Middlewares globaux
app.use(cors());
app.use(express.json());

// Routes API
app.use('/api/news', newsRoutes);
app.use('/api/matches', matchesRoutes);
app.use('/api/players', playersRoutes);
app.use('/api/gallery', galleryRoutes);

// Route test
app.get('/', (req: Request, res: Response): void => {
  res.send('ESC Chorban Backend API OK');
});

// Gestion globale des erreurs
app.use((err: any, req: Request, res: Response, next: NextFunction): void => {
  console.error('Erreur non capturée :', err);
  res.status(500).json({ error: 'Erreur interne du serveur' });
});

// Démarrage du serveur
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
