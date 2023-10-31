import jwt from "jsonwebtoken";
const generarJWT = (usuarioId) => {
    const secret = process.env.JWT_SECRET
    return jwt.sign({ usuarioId }, secret, {
        expiresIn: "90d",
    });
};

export default generarJWT;