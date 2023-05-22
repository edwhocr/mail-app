const mails1 = [];

export const usuario1Enviar = (req, res) => {
    const {email, mensaje} = req.body;
    const nuevoMail = {
        email, mensaje
    }
    mails1.push(nuevoMail);
}

export const usuario1Mostrar = (req, res) => {
    res.json(mails1)
}