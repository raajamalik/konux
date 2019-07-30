describe('Timeframe component', () => {

    beforeEach(()=> {
        cy.visit('http://localhost:3000');
    });

    it('should be able to change to Last week', () => {

        cy.get('.timeframe')
            .get('.select-component')
            .get('select')
            .select('Last week')
            .should('have.value', "1");
    });

    it('should be able to change to Last Two weeks', () => {
        expect(true).to.be.true;

        cy.get('.timeframe')
            .get('.select-component')
            .get('select')
            .select('Last two weeks')
            .should('have.value', "2");
    });

    it('should be able to change to All days from Last week', () => {
        
        cy.get('.timeframe')
            .get('.select-component')
            .get('select')
            .select('Last week')
            .should('have.value', "1");

        cy.get('.timeframe')
            .get('.select-component')
            .get('select')
            .select('Last week')
            .select('All days')
            .should('have.value', "-1");
    });

    it('should be able to change to All days from Last two weeks', () => {
        
        cy.get('.timeframe')
            .get('.select-component')
            .get('select')
            .select('Last two weeks')
            .should('have.value', "2");

        cy.get('.timeframe')
            .get('.select-component')
            .get('select')
            .select('Last week')
            .select('All days')
            .should('have.value', "-1");
    });
    
})