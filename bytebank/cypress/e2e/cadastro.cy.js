describe('Teste de cadastro de usuário', () => {
  const usuario = {
    nome: 'Joao Melo',
    email: 'joaomelo@gmail.com',
    senha: 'joao890',
  };
  it('Deve permitir cadastrar um usuário com sucesso', () => {
    cy.visit('/');

    cy.getByData('botao-cadastro').click();
    cy.getByData('nome-input').type(usuario.nome);
    cy.getByData('email-input').type(usuario.email);
    cy.getByData('senha-input').type(usuario.senha);
    cy.getByData('checkbox-input').check();
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-sucesso')
      .should('exist')
      .contains('Usuário cadastrado com sucesso!');

    cy.request('GET', 'http://localhost:8000/users').then((resposta) => {
      expect(resposta.body).to.have.lengthOf.at.least(1);
      expect(resposta.body[resposta.body.length - 1]).to.deep.include(usuario);
    });
  });
});
