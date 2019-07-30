describe('Line graph', () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })

    it('must get rendered on screen', () => {
        cy.get('svg')
            .get('path').then(($path) => {
            const pathAttribues = $path.get(0).attributes;
            const dAttr = pathAttribues.getNamedItem("d");
            console.log('dattr ', $path.get(0));
            expect(dAttr).not.to.be.undefined;
        });
    })
});