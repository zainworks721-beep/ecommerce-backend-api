export let errorHandler = (err, req, res, next) => {
    // console.log(err)

    res.status(500).json({ status: '500', message: 'Internal server error' });
}