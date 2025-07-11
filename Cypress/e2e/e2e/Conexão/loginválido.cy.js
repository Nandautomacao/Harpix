describe('Login valido', () => {
  it('Deverá realizar o Login', () => {
    cy.visit('/login');

    // Preenche login e senha
    cy.get('[type="text"]').type('admin');
    cy.get('[type="password"]').type('admin');

    // Clica no primeiro botão "Entrar"
    cy.contains('button', 'Entrar').first().should('be.visible').click();

  });
});
