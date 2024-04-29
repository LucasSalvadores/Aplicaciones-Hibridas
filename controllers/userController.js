import User from "../models/userModel.js";
const errorName = 'Revisar el campo nombre o apellido';

async function createUser(request, response){
    try {

        const user = request.body;

        if(user.name.trim() == '' || user.lastname.trim() == ''){
            response.status(400).json({ message: errorName, data: []});
        } else {
            const newUser = new User(request.body);
            await newUser.save();
            response.status(200).json({ newUser});
        }
        
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: error, data: []});
    }
}

async function getUser( request, response){
    try {
        const users = await User.find()
        response.status(200).json({ message: 'Ok', data: users});

    } catch (error) {
        console.error(error);
        response.status(500).json({ message: error, data: []});
    }
}

async function getUserById( request, response){
    try {
        const id = request.params.id;
        const users = await User.findById(id);
        response.status(200).json({message: 'Ok', data: users});

    } catch (error) {
        console.error(error);
        response.status(500).json({message: error, data: []});
    }
}

export { createUser, getUser, getUserById}