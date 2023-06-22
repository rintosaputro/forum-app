/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe('Login spce', () => {
  it('should display login page correctly', () => {
    cy.visit('http://localhost:3000/');

    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
    cy.get('span').contains('Don`t have an account?').should('be.visible');
    cy.get('a').contains('Register').should('be.visible');
  });
});
