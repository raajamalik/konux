
describe('Date Range component', () => {

    beforeEach(()=> {
        cy.visit('http://localhost:3000');
    });

    it('should be able to change date range text on timeframe selection', () => {
        cy.get('.timeframe')
        .get('.select-component')
        .get('select')
        .select('All days')
        .should('have.value', "-1");

        cy.get('.startDate').invoke('text').then((startDateValue) => {
            
            cy.get('.timeframe')
                    .get('.select-component')
                    .get('select')
                    .select('Last week')
                    .should('have.value', "1");
          
            cy.get('.startDate').invoke('text').should((startDateOfLastWeekValue) => {
                expect(startDateValue).not.to.eq(startDateOfLastWeekValue);   
            })
          })        
    });

    it('should be able to change dates range for last week', () => {
        cy.get('.timeframe')
        .get('.select-component')
        .get('select')
        .select('All days')
        .should('have.value', "-1");

        cy.get('.startDate').invoke('text').then((startDateValue) => {
            //@TO-DO
            //get dates before change timeframe and after timeframe change.
            //compare if they are actually one week apart.
          })        
    });
})