"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
router.get('/', async (req, res) => {
    const news = await prisma.news.findMany({ orderBy: { date: 'desc' } });
    res.json(news);
});
router.get('/:id', async (req, res) => {
    const news = await prisma.news.findUnique({ where: { id: Number(req.params.id) } });
    if (!news)
        return res.status(404).json({ error: 'Not found' });
    res.json(news);
});
router.post('/', async (req, res) => {
    const { title, summary, content, image, date } = req.body;
    const news = await prisma.news.create({ data: { title, summary, content, image, date: new Date(date) } });
    res.status(201).json(news);
});
router.put('/:id', async (req, res) => {
    const { title, summary, content, image, date } = req.body;
    const news = await prisma.news.update({
        where: { id: Number(req.params.id) },
        data: { title, summary, content, image, date: new Date(date) }
    });
    res.json(news);
});
router.delete('/:id', async (req, res) => {
    await prisma.news.delete({ where: { id: Number(req.params.id) } });
    res.status(204).end();
});
exports.default = router;
