describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'Maria Man',
      username: 'Maria',
      password: 'Maria'
    }
    cy.request('POST', 'http://localhost:3003/api/users', user)
    cy.visit('http://localhost:3000')

  })
  describe('5.17', function(){
    it('Login from is shown', function() {
      cy.contains('username')
      cy.contains('password')
      cy.contains('login').click()
    })
  })


  describe('5.18',function() {
    describe('Login', function(){
      it('fails with wrong credentials', function() {
        cy.contains('log in').click()
        cy.get('#username').type('Mar')
        cy.get('#password').type('Mar')
        cy.get('#login-button').click()
        cy.contains('ERROR, Wrong username or password')

        cy.get('.error-message').should('contain', 'ERROR').and('have.css', 'color', 'rgb(255, 0, 0)')

      })

      it('succeeds with correct credentials', function() {
        cy.contains('log in').click()
        cy.get('#username').type('Maria')
        cy.get('#password').type('Maria')
        cy.get('#login-button').click()
        cy.contains('Login approved')
      })
    })

  })

})