declare namespace Cypress {
  interface Chainable<Subject = any> {
    addItem(isInitial?: boolean, item?: { name: string, amount: number }): typeof addItem;
  }
}

function addItem(isInitial = false, item = {name: 'Galaxy Guide', amount: 2}): void {
  const buttonId = isInitial ? 'btn-initial-item' : 'btn-new-item';
  cy.get(`[data-id=${buttonId}]`).click();
  cy.get('inv-inventory-dialog').should('exist');
  cy.get('[data-id=input-new-item-name]').type(item.name);
  cy.get('[data-id=input-new-item-amount]').type(String(item.amount));
  cy.get('[data-id=btn-new-item-submit]').click();
}

Cypress.Commands.add('addItem', addItem);
