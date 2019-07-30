/// <reference types="Cypress" />

//Not that we can not use import or export with Cypress by default because
//Cypress runs tests in browser and those do not support import or export. For this
//we have to configure either webpack or browserify. 


describe('Train Frequency POST API', () => {

    const HTTP_200_OK = 200;
    const HTTP_4XX_ERROR = 400;

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('must be successful for POST call', () => {
        cy.server({delay:2000});

        // Listen to POST to comments
        cy.route('POST', '/points').as('addPoint')

        // we have code that posts a comment when
        // the button is clicked in scripts.js
        cy.get('.react-datepicker__input-container input').focus();
        cy.get('.react-datepicker__day--015').click();

        cy.get('.newPoint').clear();
        cy.get('.newPoint').focus();
        cy.get('.newPoint').type("25");

        cy.get('.addPointBtn').click()
        cy.wait('@addPoint')

        cy.get('@addPoint').should((xhr) => {
            //@ts-ignore
            expect(xhr.response.body.status).to.equal("ok");
            //@ts-ignore
            expect(xhr.status).to.equal(200);
            cy.get('.message')
            cy.get('.message-success').invoke('text').then((text) => {
                expect(text).equal('Saved Successfully')
            });
        })
    });

    describe('must have validation', () => {

        it('if frequency entered is 0', () => {
            cy.get('.react-datepicker__input-container input').focus();
            cy.get('.react-datepicker__day--015').click();
    
            cy.get('.newPoint').clear();
            cy.get('.newPoint').focus();
            cy.get('.newPoint').type("0");
    
            cy.get('.addPointBtn').click()
            cy.wait(500);
    
            cy.get('.message')
            cy.get('.message-error').invoke('text').then((text) => {
                expect(text).equal('Please enter date and frequency both.')
            });
        });
    
        it('if date is missing', () => {
            cy.get('.react-datepicker__input-container input').clear();
            
            cy.get('.newPoint').focus();
            cy.get('.newPoint').type("20");
    
            cy.get('.addPointBtn').click()
            cy.wait(500);
    
            cy.get('.message')
            cy.get('.message-error').invoke('text').then((text) => {
                expect(text).equal('Please enter date and frequency both.')
            });
        });
    });
});