describe("Scenario block name", () => {
    beforeEach(() => {
        cy.visit("https://katalon-demo-cura.herokuapp.com/");
    });
        // Actions
    it("Scenario name", () => {
        cy.get("[id='btn-make-appointment']").click();
        cy.get("[id='txt-username']").type("John Doe").should('have.value', 'John Doe');
        cy.get("[id='txt-password']").type("ThisIsNotAPassword").should('have.value', 'ThisIsNotAPassword');
        cy.get("[id='btn-login']").click();

        cy.get("[id='combo_facility']").select('Seoul CURA Healthcare Center').should('have.value', 'Seoul CURA Healthcare Center');
        cy.get("[id='chk_hospotal_readmission']").check('Yes').should('be.checked');
        cy.get("[id='radio_program_medicaid']").check('Medicaid').should('be.checked');
        cy.get("[id='txt_visit_date']").click().should('be.visible');
        cy.get(".day").contains("30").click();
        cy.get('body').click();
        cy.get("[id='txt_comment']").type("CURA Healthcare Service");
        cy.get("[id='btn-book-appointment']").click();

      
       
    });
});