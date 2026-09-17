import user from '../data/user.js';


const getUsers = (req, res) => {
    try {
        const users = user;
        res.status(200).json({ status: '200', data: users, total: users.length, message: 'Users fetched successfully' });
    } catch (error) {
        next(error);
    }
}

const getUserById = (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        const userById = user.find(u => u.id === userId);

        if (!userById) {
            res.status(404).json({ status: '404', message: 'User not found' });
            return
        } else {
            res.status(200).json({ status: '200', data: userById, message: 'User fetched successfully' });
        }
    } catch (error) {
        next(error);
    }
}

const createUser = (req, res) => {
    try {
        const { name, email, age } = req.body;
        const newUser = {
            id: user.length + 1,
            name,
            email,
            age
        }

        user.push(newUser);
        res.status(201).json({ status: '201', data: newUser, message: 'User created successfully' });

    } catch (error) {
        next(error);
    }
}

const updateUser = (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        const userById = user.find(u => u.id === userId);
        const userIndex = user.findIndex(u => u.id === userId);

        if (!userById) {
            res.status(404).json({ status: '404', message: 'User not found' });
            return
        } else {

            user[userIndex] = {
                ...userById,
                ...req.body
            };

            res.status(200).json({ status: '200', data: user[userIndex], message: 'User updated successfully' });
        }
    } catch (error) {
        next(error);
    }
}

const delUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = user.findIndex(u => u.id === userId);
    try {

        if (userIndex === -1) {
            res.status(404).json({ status: '404', message: 'User not found' });
            return
        }

        user.splice(userIndex, 1)
        res.status(200).json({ status: "200", "message": "User deleted successfully" })


    } catch (error) {
        next(error);
    }
}


export {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    delUser
}