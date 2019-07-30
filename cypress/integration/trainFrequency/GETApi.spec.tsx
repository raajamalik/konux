//Not that we can not use import or export with Cypress by default because
//Cypress runs tests in browser and those do not support import or export. For this
//we have to configure either webpack or browserify. 


describe('Train Frequency GET API', () => {

    const HTTP_200_OK = 200;

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('must GET all data', () => {
        // https://on.cypress.io/request
        cy.request('http://konuxdata.getsandbox.com/data')
            .should((response) => {
            expect(response.status).to.eq(200)
        })
    });

    it('response body must have x and y properties', () => {
        // https://on.cypress.io/request
        cy.request('http://konuxdata.getsandbox.com/data')
            .should((response) => {
            expect(response.body.length).greaterThan(0);
            let point = response.body[0];
            assert.isObject(point, 'point is an object')
            expect(point).to.have.all.keys('x','y')
        })
    });

    it('response must have type of x and y as string', () => {
        // https://on.cypress.io/request
        cy.request('http://konuxdata.getsandbox.com/data')
            .should((response) => {
            expect(response.body.length).greaterThan(0);
            let point = response.body[0];
            assert.isObject(point, 'point is an object')
            expect(point.x).to.be.a('string');
            expect(point.y).to.be.a('number');
        })
    });
    
    it('response must have x value as a valid date string', () => {
        // https://on.cypress.io/request
        cy.request('http://konuxdata.getsandbox.com/data')
            .should((response) => {
            expect(response.body.length).greaterThan(0);
            let point = response.body[0];
            let isValid = Date.parse(point.x);
            
            expect(point.x).not.to.be.a('NaN');
        })
    });

    it('every check in one testcase', () => {
        cy.request('http://konuxdata.getsandbox.com/data')
        .its('body')
        .should('be.an', 'array')
        .and('have.length', 31)
        .its('0')
    });
});