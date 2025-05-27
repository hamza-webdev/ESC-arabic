"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
router.get('/', async (req, res) => {
    const player = await prisma.player.findMany({ orderBy: { date: 'desc' } });
    res.json(player);
});
router.get('/:id', async (req, res) => {
    const player = await prisma.player.findUnique({ where: { id: Number(req.params.id) } });
    if (!player)
        return res.status(404).json({ error: 'Not found' });
    res.json(player);
});
router.post('/', async (req, res) => {
    const { title, summary, content, image, date } = req.body;
    const player = await prisma.player.create({ data: { title, summary, content, image, date: new Date(date) } });
    res.status(201).json(player);
});
router.put('/:id', async (req, res) => {
    // Only include fields that exist in your Player model
    const { name, age, position, team, date } = req.body;
    const player = await prisma.player.update({
        where: { id: Number(req.params.id) },
        data: {
            ...(name !== undefined && { name }),
            ...(age !== undefined && { age }),
            ...(position !== undefined && { position }),
            ...(team !== undefined && { team }),
            ...(date !== undefined && { date: new Date(date) })
        }
    });
    res.json(player);
});
router.delete('/:id', async (req, res) => {
    await prisma.player.delete({ where: { id: Number(req.params.id) } });
    res.status(204).end();
});
exports.default = router;
