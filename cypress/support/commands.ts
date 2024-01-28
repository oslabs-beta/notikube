/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
export {};

Cypress.Commands.add('login', (username: string, password: string) => {
    cy.session(
      username,
      () => {
        cy.visit('/auth/login')
        cy.get('input[name=username]').type(username)
        cy.get('input[name=password]').type(password)
        cy.get('form').contains('Submit').click()
        cy.url().should('contain', '/dashboard')
      },
      {
        validate: () => {
          cy.getCookie('next-auth.session-token').should('exist')
        },
      }
    )
  })

  declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<void>
    }
  }
}
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { 

// })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }