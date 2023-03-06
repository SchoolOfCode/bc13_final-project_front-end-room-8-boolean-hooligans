describe('Visits pages', () => {
  it('Main page', () => {
    cy.visit('http://localhost:3000/')
  })
  it('Create character page', () => {
    cy.visit('http://localhost:3000/')
    cy.get("button").contains("Create Character").should("have.attr", "href", "/createCharacter").click()
  })
  it('View character page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.Home_buttonsContainer___okSV > :nth-child(2)').click()
  })

})

// import Navigation from "../../Components/Navigation.js"
// describe('Navigation', () => {
//   // cy.mount(<Navigation/>)
//   beforeEach(() => {
//   cy.visit('http://localhost:3000/');
//   });
  
//   it('displays the logo', () => {
//   cy.get('.navigation_nav__jLC69')
//   .should('have.attr', 'src', 'https://i.ibb.co/0BtC8vF/imaginerium-logo2-1.png')
//   .should('have.attr', 'height', '65')
//   .should('have.attr', 'width', '212')
//   .should('have.attr', 'alt', 'Imaginerium');
//   });
  
//   it('displays the home button', () => {
//   cy.get('.navButtons')
//   .find('.dropdown')
//   .first()
//   .find('button')
//   .should('have.text', 'HOME')
//   .click();
//   cy.url().should('include', '/');
//   });
  
//   it('displays the create button and dropdown', () => {
//   cy.get('.navButtons')
//   .find('.dropdown')
//   .eq(1)
//   .find('button')
//   .should('have.text', 'CREATE')
//   .click();
//   cy.get('.navButtons')
//   .find('.dropdownContent')
//   .should('have.text', 'Create character')
//   .find('a')
//   .should('have.attr', 'href', '/createCharacter');
//   });
  
//   it('displays the view button and dropdown', () => {
//   cy.get('.navButtons')
//   .find('.dropdown')
//   .eq(2)
//   .find('button')
//   .should('have.text', 'VIEW')
//   .click();
//   cy.get('.navButtons')
//   .find('.dropdownContent')
//   .should('have.text', 'Character list')
//   .find('a')
//   .should('have.attr', 'href', '/characterList');
//   });
  
//   it('displays the login button', () => {
//   cy.get('.loginButton')
//   .should('have.text', 'LOGIN');
//   });
  
//   it('displays the dark mode toggle button', () => {
//   cy.get('.darkModeSwitch')
//   .find(ButtonToggleDarkMode);
//   });
//   });
  
  