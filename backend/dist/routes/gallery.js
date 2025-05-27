"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
router.get('/', async (req, res) => {
    const gallery = await prisma.gallery.findMany({ orderBy: { date: 'desc' } });
    res.json(gallery);
});
router.get('/:id', async (req, res) => {
    const gallery = await prisma.gallery.findUnique({ where: { id: Number(req.params.id) } });
    if (!gallery)
        return res.status(404).json({ error: 'Not found' });
    res.json(gallery);
});
router.post('/', async (req, res) => {
    const { title, summary, content, image, date } = req.body;
    const gallery = await prisma.gallery.create({ data: { title, summary, content, image, date: new Date(date) } });
    res.status(201).json(gallery);
});
router.put('/:id', async (req, res) => {
    const { title, summary, content, image, date } = req.body;
    const gallery = await prisma.gallery.update({
        where: { id: Number(req.params.id) },
        data: { title, summary, content, image, date: new Date(date) }
    });
    res.json(gallery);
});
router.delete('/:id', async (req, res) => {
    await prisma.gallery.delete({ where: { id: Number(req.params.id) } });
    res.status(204).end();
});
exports.default = router;
