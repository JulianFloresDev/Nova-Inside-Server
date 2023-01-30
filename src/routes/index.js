import express from 'express';

const router = express.Router();

router.use('/', (req, res) => {
  res.status(200).send('Wellcome to Nova-Inside server based on Node.js and Express module.')
});

export default router;
