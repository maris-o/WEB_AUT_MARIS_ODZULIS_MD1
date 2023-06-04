describe("Scenario block name", () => {
    beforeEach(() => {
        cy.visit("https://demoqa.com/selectable");
    });
        // Actions
    it("Scenario name", () => {
        cy.get("[id='demo-tab-grid']").click();
        cy.get("[id='row1']").contains("Two").click();
        cy.get("[id='row2']").contains("Four").click();
        cy.get("[id='row2']").contains("Six").click();
        cy.get("[id='row3']").contains("Eight").click();
        // Validation
        cy.get("[id='row1']").contains("Two").should('have.class', 'active');
        cy.get("[id='row2']").contains("Four").should('have.class', 'active');
        cy.get("[id='row2']").contains("Six").should('have.class', 'active');
        cy.get("[id='row3']").contains("Eight").should('have.class', 'active');
        cy.get("[id='row1']").contains("One").should('not.have.class', 'active');
        cy.get("[id='row1']").contains("Three").should('not.have.class', 'active');
        cy.get("[id='row2']").contains("Five").should('not.have.class', 'active');
        cy.get("[id='row3']").contains("Seven").should('not.have.class', 'active');
        cy.get("[id='row3']").contains("Nine").should('not.have.class', 'active');
    });
});