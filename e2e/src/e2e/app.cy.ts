import { getGreeting } from '../support/app.po';

describe('e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.login('user1@cedar.com', 'password123');
    cy.url().should('contain', '/welcome');
    getGreeting().contains(/Welcome to the user management page/);
  });
});
