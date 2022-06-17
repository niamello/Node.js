const User = require("../mocks/UserMock")

class UserService {
    createUser(body) {
        const {
            name,
            email,
            cemail,
            cpf,
            celular,
            nascimento,
            pais,
            cidade,
            email_sms,
            whatsapp,
            cep,
            endereco,
            numero
        } = body;
        if (name == "" || name.length < 3) {
            console.log("Nome inválido")
        }
        const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        if (email == "" || !emailRegex.test(email)) {
            console.log("Email inválido")
        }
        if (email !== cemail || cemail == "") {
            console.log("Confirmação de email inválido")
        }
        if (cpf == "" || cpf.length <3) {
            console.log("CPF inválido")
        }
        if (celular == "" || celular.length <11) {
            console.log("Celular inválido")
        }
        if (nascimento == "" || nascimento.length < 8) {
            console.log("Data de nascimento inválido")
        }
        if (pais == "" || pais.length <3) {
            console.log("Pais inválido")
        }
        if (cidade == "" || cidade.length <3) {
            console.log("Cidade inválido")
        }
        if (cep == "" || cep.length <3) {
            console.log("Cep inválido")
        }
        if (endereco == "" || endereco.length <3) {
            console.log("Endereço inválido")
        }
        if (numero == "" || numero.length < 3) {
            console.log("Número inválido")
        }
        if (whatsapp == "" && email_sms == "") {
            console.log("Selecione pelo menos um campo")
        }
    }
}

module.exports = new UserService();