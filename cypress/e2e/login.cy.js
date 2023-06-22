/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when email is not valid
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe('Login spce', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display login page correctly', () => {
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
    cy.get('span').contains('Don`t have an account?').should('be.visible');
    cy.get('a').contains('Register').should('be.visible');
  });

  it('should display alert when email is empty', () => {
    cy.get('button').contains(/^Login$/).click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when email is not valid', () => {
    cy.get('input[placeholder="Email"]').type('emailtest');

    cy.get('button').contains(/^Login$/).click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" must be a valid email');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="Email"]').type('emailtest@mail.com');

    cy.get('button').contains(/^Login$/).click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email and password are wrong', () => {
    cy.get('input[placeholder="Email"]').type('emailtest@mail.com');
    cy.get('input[placeholder="Password"]').type('passwordtest');

    cy.get('button').contains(/^Login$/).click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display homepage when email and password are correct', () => {
    cy.get('input[placeholder="Email"]').type('halo@mail.com');
    cy.get('input[placeholder="Password"]').type('123456');

    cy.get('button').contains(/^Login$/).click();

    cy.get('span').contains('Forum').should('be.visible');
    cy.get('h1').contains('App').should('be.visible');
    cy.get('button').find('div.footer-page.page-active').contains('Home').should('be.visible');
  });
});
