import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Lista de tarefas');
});

export default router;