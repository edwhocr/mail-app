const mails2 = [];

export const usuario2Enviar = (req, res) => {
    const {email, mensaje} = req.body;
    const nuevoMail = {
        email, mensaje
    }
    mails2.push(nuevoMail);
}

export const usuario2Mostrar = (req, res) => {
    res.json(mails2)
}