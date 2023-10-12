import './schemas/commands'

import { criacaoUsuario } from './schemas/usuario';
import { email, firstName, mensagemSucessoAlteracaoBack, mensagemSucessoCadastroBack, mensagemSucessoExclusaoBack, password, urlServeRest } from '../variaveis';

let usuarioPayload = criacaoUsuario(firstName, email, password, 'true')
var id

context("Fluxo de Usuário", () => {
    it("Criar Usuário com Sucesso", () => {
        cy.request({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            url: `${urlServeRest}/usuarios`,
            body: usuarioPayload
        }).then(res => {
            expect(res.status).to.equal(201);

            expect(res.body.message).to.equal(mensagemSucessoCadastroBack)
            expect(res.body._id).to.exist

            id = res.body._id
        })
    })

    it("Listar Usuários", () => {
        cy.req(
            'GET',
            `${urlServeRest}/usuarios?email=${email}`
        ).then((res) => {
            expect(res.status).to.equal(200)

            expect(res.body.quantidade).to.equal(1)
            expect(res.body.usuarios[0].nome).to.equal(firstName)
            expect(res.body.usuarios[0].email).to.equal(email)
            expect(res.body.usuarios[0].administrador).to.equal('true')
            expect(res.body.usuarios[0]._id).to.exist;

            expect(Object.keys(res.body.usuarios).length).to.be.equal(1)
        })
    })

    it("Listar Usuário By Id", () => {
        cy.req(
            'GET',
            `${urlServeRest}/usuarios/${id}`
        ).then((res) => {
            expect(res.status).to.equal(200)

            expect(res.body.nome).to.equal(firstName)
            expect(res.body.email).to.equal(email)
            expect(res.body.administrador).to.equal('true')
            expect(res.body._id).to.exist;
        })
    })

    it("Alterar Usuário", () => {
        usuarioPayload.nome = 'Estevão Novo Nome'

        cy.request({
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            url: `${urlServeRest}/usuarios/${id}`,
            body: usuarioPayload
        }).then(res => {
            expect(res.status).to.equal(200);
            expect(res.body.message).to.equal(mensagemSucessoAlteracaoBack)
        })
    })

    it("Deletar Usuário", () => {
        cy.req(
            'DELETE',
            `${urlServeRest}/usuarios/${id}`
        ).then((res) => {
            expect(res.status).to.equal(200)
            expect(res.body.message).to.equal(mensagemSucessoExclusaoBack)

        })
    })
})