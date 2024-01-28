describe('Accessing the Dashboard', () => {
    beforeEach(() => {
        cy.login(Cypress.env('username'), Cypress.env('password'))
        cy.visit('/dashboard')
        cy.viewport(1366, 768)
    })

    it('loads dashboard successfully', () => {
      cy.contains('Dashboard')
      cy.get('h1').should('contain', 'Dashboard')
      cy.contains('Alerts')
      cy.contains('Metrics')
    })

    it('links to the incidents table via total alerts', () => {
        cy.get('[data-cy="total-alerts"]').click()
        cy.url().should('contain', '/dashboard/incidents')
    })
  })