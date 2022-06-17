const UserService = require("../../domain/user/services/UserService")

class AllUserController {
    handle(req, res, next) {
        const {
            body
        } = req
        UserService.createUser(body)

        res.send({
            name: req.body.name,
            email: req.body.email,
            cemail: req.body.cemail,
            cpf: req.body.cpf,
            celular: req.body.celular,
            nascimento: req.body.nascimento,
            email_sms: req.body.email_sms,
            whatsapp: req.body.whatsapp,
            pais: req.body.pais,
            cidade: req.body.cidade,
            cep: req.body.cep,
            endereco: req.body.endereco,
            numero: req.body.numero
        });
    }
}

module.exports = new AllUserController();