const middleware= (req, res, next) => {
    const validApiKey = 'abc123';
    const apiKey = req.query.apiKey;

    if (!apiKey) {
        res.status(401).json({ status: '401', message: 'API key is missing' });
        return
    }
    if (apiKey !== validApiKey) {
        res.status(401).json({ status: '401', message: 'Invalid API key' });
        return
    }
    if (apiKey === validApiKey) {
        next();
    }
}

export { middleware };

