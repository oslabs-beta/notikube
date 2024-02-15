describe('Dashboard', () => {
    beforeEach(() => {
        cy.login(Cypress.env('username'), Cypress.env('password'))
        cy.visit('/dashboard')
        cy.viewport(1366, 768)
    })

    context("Sections", () => {
      it('loads dashboard sections successfully', () => {
        cy.contains('Alerts')
        cy.contains('Metrics')
      })
    })

    context("Headers", () => {
      it('loads dashboard headers successfully', () => {
        cy.get('h1').should('contain', 'Dashboard')
      })
      it('contains cluster name and ip info', () => {
        cy.get('[data-cy="header-cluster-name"]').should('be.visible')
        cy.get('[data-cy="header-cluster-ip"]').should('contain', 'Cluster IP Address:')
      })
    })

    context("Alert links", () => {
      it('links to the incidents table via total alerts', () => {
        cy.get('[data-cy="total-alerts"]').click()
        cy.url().should('contain', '/dashboard/incidents')
      })
      it('links to the incidents table via total open alerts', () => {
        cy.get('[data-cy="total-open-alerts"]').click()
        cy.url().should('contain', '/dashboard/incidents')
      })
    })

    context('Metrics', () => {
      it('shows node cpu metrics tab', () => {
        cy.get('[data-cy="node-cpu-tab"]').click()
        cy.get('[data-cy="node-cpu"]').should('be.visible')
      })
      it('shows cluster cpu/mem metrics tab', () => {
        cy.get('[data-cy="cluster-cpu-tab"]').click()
        cy.get('[data-cy="cluster-cpu"]').should('be.visible')
      })
      it('shows pod by namespace metrics tab', () => {
        cy.get('[data-cy="pod-name-tab"]').click()
        cy.get('[data-cy="pod-name"]').should('be.visible')
      })
      it('shows pod restart metrics tab', () => {
        cy.get('[data-cy="pod-restart-tab"]').click()
        cy.get('[data-cy="pod-restart"]').should('be.visible')
      })
      it('shows cluster summary metrics tab', () => {
        cy.get('[data-cy="cluster-summary-tab"]').click()
        cy.get('[data-cy="cluster-summary"]').should('be.visible')
      })
    })

  })