describe('test suit to search a flight', () => {
  it('Visits the Wingo page', () => {
    cy.visit('https://www.wingo.com/')
    cy.get('.input-origen > .select-drop > .info-airport')
    .type('Bogotá (BOG)')
    cy.get('#comboOrigen > li').click()
    cy.get('.input-destino > .select-drop > .info-airport')
    .type('Cali (CLO)')
    cy.get('#comboDestino > li').click()
    cy.get('#btBalendarFrom > :nth-child(1)').click()
    cy.get('#inputOutboundDate > .cont-calendar > .cont-months > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month1 > tbody > :nth-child(5) > :nth-child(5) > .day')
    .click()
    cy.get('#date-window-container > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month2 > tbody > :nth-child(1) > :nth-child(4) > .day')
    .click()
 //   cy.get('.btn-search').click()
 //   cy.url().should('include', 'search/BOG/CLO')
  })
})