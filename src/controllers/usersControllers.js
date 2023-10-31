import { existingUserService, saveUserService, existsUserService } from "../services/UsersService.js";
import emailRegister from "../helpers/emailRegister.js";
import generarJWT from "../helpers/generateJWT.js";

const createUser = async (req, res) => {
    try {
        const { name, email } = req.body

        if (!name || !email) {
            throw new Error('EL nombre y el email son campos obligatorios.')
        }

        const existUser = await existingUserService(email)

        if (existUser) {
            const error = new Error("Usuario ya registrado");
            res.status(400).json({ msg: error.message })
        }
        const newUser = await saveUserService(req.body)
        emailRegister({
            name, email, token: newUser.token
        })
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


const authenticate = async (req, res) => {
    const { email, password } = req.body;

    const user = await existsUserService(email)
    console.log(user)

    if (!user) {
        const error = new Error("El usuario no existe");
        res.status(403).json({ msg: error.message });
        return
    }

    if (await user.comprobarPassword(password)) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generarJWT(user.id)
        })
    } else {
        const error = new Error("El Password es incorrecto");
        res.status(403).json({ msg: error.message });
        return
    }
}

export {
    createUser,
    authenticate
}