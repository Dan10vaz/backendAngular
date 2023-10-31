import nodemailer from "nodemailer";

const emailRegister = async (data) => {
    console.log(data);

    const transporter = nodemailer.createTransport({
        host: 'sandbox.smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: "a051fe25f645c3",
            pass: "e07dbec456029c"
        }
    });

    const { name, email, token } = data;

    //Enviar correo pasandole un objeto con datos
    const info = await transporter.sendMail({
        from: "PRUEBA ANGULAR",
        to: email,
        subject: "Comprueba tu cuenta en PRUEBA ANGULAR",
        text: "Comprueba tu cuenta en PRUEBA ANGULAR",
        html: `<p>Hola: ${name} comprueba tu cuenta en ANGULAR.</p>
    <p>Tu cuenta ya esta lista, solo debes comprobarla en el siguiente enlace: 
    <a href="${process.env.FRONTEND_URL}/login/confirmar/${token}">Comprobar Cuenta</a> </p>
    <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
    `,
    });
    console.log("Mensaje enviado: %s", info.response);
}


export default emailRegister