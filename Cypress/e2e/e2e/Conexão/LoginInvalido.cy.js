describe('LoginInvalido', () => {
  it('Não deverá realizar o login', () => {
    cy.visit('/login');

    // Preenche login e senha incorreta
    cy.get('[type="text"]').type('admin');
    cy.get('[type="password"]').type('adminn'); // senha incorreta

    // Clica no botão "Entrar"
    cy.contains('button', 'Entrar').first().should('be.visible').click();


    // OU verifica que apareceu uma mensagem de erro
    cy. contains('Usuário e/ou senha incorretos') // Ajuste para o texto real que aparece
      .should('be.visible');
  }); 
});
