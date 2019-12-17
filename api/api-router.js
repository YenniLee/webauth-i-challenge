const router = require('express').Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
    res.json({ message: 'Hello from API' })
})