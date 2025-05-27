"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
router.get('/', async (req, res) => {
    const matches = await prisma.match.findMany({ orderBy: { date: 'desc' } });
    res.json(matches);
});
router.get('/:id', async (req, res) => {
    const matches = await prisma.match.findUnique({ where: { id: Number(req.params.id) } });
    if (!matches)
        return res.status(404).json({ error: 'Not found' });
    res.json(matches);
});
router.post('/', async (req, res) => {
    const { title, summary, content, image, date } = req.body;
    const matches = await prisma.match.create({ data: { title, summary, content, image, date: new Date(date) } });
    res.status(201).json(matches);
});
router.put('/:id', async (req, res) => {
    // Only include fields that exist in your Prisma 'match' model
    const { /*title, summary, content, image,*/ date } = req.body;
    const updateData = {};
    // Uncomment and assign only if these fields exist in your model
    // if (title !== undefined) updateData.title = title;
    // if (summary !== undefined) updateData.summary = summary;
    // if (content !== undefined) updateData.content = content;
    // if (image !== undefined) updateData.image = image;
    if (date !== undefined)
        updateData.date = new Date(date);
    const matches = await prisma.match.update({
        where: { id: Number(req.params.id) },
        data: updateData
    });
    res.json(matches);
});
router.delete('/:id', async (req, res) => {
    await prisma.match.delete({ where: { id: Number(req.params.id) } });
    res.status(204).end();
});
exports.default = router;
