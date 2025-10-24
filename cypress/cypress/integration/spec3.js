describe('Teste Compra Livro', () => {
    it('Teste 1: Visita Página', () => {
        // abre o site
        cy.visit('http://localhost:5000/')
    })
    it('Teste 2: Verifica item na página', () => {
        // Verifica se existe o livro desejado
        cy.get('[data-id=1]').should('contain.text', 'Refactoring')
    })
    it('Teste 3: Compra Livro', () => {
        // Compra o livro
        cy.get('[data-id=1]').within(() => {
            cy.contains('Comprar').click().then
            cy.wait(2000)
        })
        cy.get('.swal-text').contains('Sua compra foi realizada com sucesso')

        // Fecha o pop-up com a confirmação da compra
        cy.get('.swal-button').click()
    })
})