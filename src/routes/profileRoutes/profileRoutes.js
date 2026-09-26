import routes from "express";
import ProfileFetchController from '../../controllers/profileController.js'
import middleware from "../../middleware/middleware.js";
const profileRoutes = routes()

profileRoutes.get("/profile", middleware , ProfileFetchController)

export default profileRoutes