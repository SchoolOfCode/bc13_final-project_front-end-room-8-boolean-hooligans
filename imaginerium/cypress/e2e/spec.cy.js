describe('Visits start page', () => {
  it('Home page loaded', () => {
    cy.visit('http://localhost:3000/')
    cy.get(':nth-child(1) > h1')
    cy.get('.landing_earth__WoHeK')
  })
  it('Starting page contains title', () => {
    cy.visit('http://localhost:3000/')
    cy.get(':nth-child(1) > h1')
  })
  it('Starting page contains earth', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.landing_earth__WoHeK')
  })
})

describe('Logging in', () => {
  it('Directed to login options', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.landing_earth__WoHeK').click()
    cy.get('.card')
  })
  it('Login with google', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.landing_earth__WoHeK').click()
    cy.get(':nth-child(3) > form > .button').click()
    
  })

  
})
  