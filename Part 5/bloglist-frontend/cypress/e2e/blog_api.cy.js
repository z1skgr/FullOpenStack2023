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
        cy.contains('Maria Man logged in').should('not.exist')

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

  describe('5.19-20', function() {
    beforeEach(function() {
      cy.login({ username: 'Maria', password: 'Maria' })
    })

    it('New blog', function() {
      cy.contains('new blog').click()

      cy.get('#title').type('Black Panther')
      cy.get('#author').type('Tolik')
      cy.get('#url').type('http://www.u.alika.edu.html')

      cy.get('#create-button').click()

      cy.contains('Black Panther / Tolik')
    })

    it('like a blog', function() {
      cy.contains('new blog').click()
      cy.get('#title').type('Black Panther')
      cy.get('#author').type('Tolik')
      cy.get('#url').type('http://www.u.alika.edu.html')

      cy.get('#create-button').click()

      cy.contains('Black Panther / Tolik')
      cy.get('#show_button').click()
      cy.contains('0')
      cy.get('#like-button').click()
      cy.contains('1')
    })


  })
  describe('5.21-22-23', function() {
    beforeEach(function() {
      cy.login({ username: 'Maria', password: 'Maria' })
    })

    it('A blog can delete ', function() {
      cy.contains('new blog').click()
      cy.get('#title').type('Black Panther')
      cy.get('#author').type('Tolik')
      cy.get('#url').type('http://www.u.alika.edu.html')

      cy.get('#create-button').click()

      cy.contains('Black Panther / Tolik')
      cy.get('show_button').click()
      cy.get('#delete_button').click()

      cy.get('html').should('not.contain', 'Black Panther / Tolik')
    })


  })

  describe('Order by number of likes', function() {
    beforeEach(function() {
      cy.login({ username: 'Maria', password: 'Maria' })
      cy.createBlog({ author: 'Maria1', title: 'Maria1', url: 'http://maria1.com.' })
      cy.createBlog({ author: 'Maria2', title: 'Maria2', url: 'http://maria2.com.' })
      cy.contains('Maria1').parent().parent().as('blog1')
      cy.contains('Maria2').parent().parent().as('blog2')

    })

    it('Order by number of likes', function() {
      cy.get('@blog1').contains('view').click()
      cy.get('@blog2').contains('view').click()

      cy.get('@blog1').contains('like').as('like1')
      cy.get('@blog2').contains('like').as('like2')


      cy.get('@like2').click()
      cy.wait(500)
      cy.get('@like1').click()
      cy.wait(500)
      cy.get('@like1').click()
      cy.wait(500)


      cy.get('.blog').then(blogs => {
        cy.wrap(blogs[0]).contains('2')
        cy.wrap(blogs[1]).contains('1')
      })
    })
  })
})