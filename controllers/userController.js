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
        const Users = await User.find()
        console.log(Users)
        response.status(200).json({ message: 'Ok', data: Users});

    } catch (error) {
        console.error(error);
        response.status(500).json({ message: error, data: []});
    }
}

export { createUser, getUser}