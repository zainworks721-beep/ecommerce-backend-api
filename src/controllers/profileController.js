import User from "../model/user.model.js"
const ProfileFetchController = async (req, res, next) => {

    try {

        const { id } = req.user
        console.log(id)

        const userProfile = await User.findById(id)
        console.log(userProfile)

        if (!userProfile) {
            res.status(404).json({ status: '404', message: 'User not found' });
            return
        }

        res.status(200).json({ status: '200', data: userProfile, message: 'User profile fetch successfully' });


    } catch (error) {

        next(error)

    }

}

export default ProfileFetchController