/// <reference types="cypress" />
import host from '../../data/host';

describe('Live Server', () => {
  it('should visit', () => {
    cy.visit(`${host.baseUrl.development}/`);
  });
});
