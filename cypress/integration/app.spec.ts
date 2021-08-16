describe('App', () => {

  it('should have banner and initial item button', () => {
    cy.visit('/');
    cy.get('[data-id=empty-state-banner]').should('exist');
    cy.get('[data-id=btn-initial-item]').should('exist');
  });

  it('should add initial item', () => {
    cy.addItem(true);
    cy.get('[data-id=empty-state-banner]').should('not.exist');
    cy.get('[data-id=btn-new-item]').should('exist');
    cy.get('[data-id=table-items]').should('exist');
  });

  it('should add more items', () => {
    cy.addItem(false, {name: 'Babel Fish', amount: 2});
    cy.get('[data-id=table-items]').find('tr.mat-row').should('have.length', 2);
  });

  it('should test the actions', () => {
    cy.get('[data-id=table-items]')
      .find('tr.mat-row').as('rows')
      .first().as('row')
      .find('.mat-column-amount > span').as('amount');
    cy.get('@amount').should('contain', '2');
    cy.get('@row').find('[data-id=btn-increase]').click();
    cy.get('@amount').should('contain', '3');
    cy.get('@row').find('[data-id=btn-decrease]').click();
    cy.get('@row').find('[data-id=btn-decrease]').click();
    cy.get('@amount').should('contain', '1');
    cy.get('@row').find('[data-id=btn-decrease]').click();
    cy.get('@row').find('[data-id=btn-decrease]').should('be.disabled');
    cy.get('@row').find('[data-id=btn-out-of-stock]').should('exist');
    cy.get('@row').find('[data-id=btn-remove]').click();
    cy.get('@rows').should('have.length', 1);
  });

});
