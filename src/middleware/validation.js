let validateUser = (req, res, next) => {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        res.status(400).json({ status: '400', message: 'Missing required fields' });
        return
    }
    next();
}

let validateProduct = (req, res, next) => {
    const { name, price, category, stock } = req.body;

    if (!name || !price || !category || !stock) {
        res.status(400).json({ status: '400', message: 'Missing required fields' });
        return
    }
    next();
}

export { validateUser, validateProduct };