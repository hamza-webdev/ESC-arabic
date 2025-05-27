import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

import newsRoutes from './routes/news';
import matchesRoutes from './routes/matches';
import playersRoutes from './routes/players';
import galleryRoutes from './routes/gallery';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/news', newsRoutes);
app.use('/api/matches', matchesRoutes);
app.use('/api/players', playersRoutes);
app.use('/api/gallery', galleryRoutes);

app.get('/', (req: Request, res: Response) => res.send('ESC Chorban Backend API OK'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));