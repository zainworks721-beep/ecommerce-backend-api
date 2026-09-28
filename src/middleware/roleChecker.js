const roleChecker = (req, res, next) => {
    try {
        const { role } = req.user;


        if (role === "admin") {
            return next();
        }

        return res.status(403).json({
            success: false,
            message: "Access denied. Admins only."
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Internal server error."
        });
    }
};

export default roleChecker
