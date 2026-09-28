let ownershipMiddleware = (req, res, next) => {
    let reqId = req.params.id;

    let userOwnId = req.user ? req.user.id : null;
    let userRole = req.user ? req.user.role : null;


    if (userRole === "admin") {
        next();
        return;
    }


    if (userOwnId && reqId.toString() === userOwnId.toString()) {
        next();
        return;
    }

    res.status(403).json({ error: "Access denied. You do not own this resource." });
};

export default ownershipMiddleware