describe("Scenario block name", () => {
    beforeEach(() => {
        cy.visit("https://katalon-demo-cura.herokuapp.com/");
    });
        // Actions
    it("Scenario name", () => {
        cy.get("[id='btn-make-appointment']").click();
        cy.get("[id='txt-username']").type("John Doe");
        cy.get("[id='txt-password']").type("ThisIsNotAPassword");
        cy.get("[id='btn-login']").click();
        cy.get("[id='combo_facility']").select('Seoul CURA Healthcare Center');
        cy.get("[id='chk_hospotal_readmission']").check('Yes');
        cy.get("[id='radio_program_medicaid']").check('Medicaid');
        cy.get("[id='txt_visit_date']").click();
        cy.get(".day").should('have.class', 'day').contains("30").click();
        // Nav pabeigts
        // Validation
        
        
    });
});