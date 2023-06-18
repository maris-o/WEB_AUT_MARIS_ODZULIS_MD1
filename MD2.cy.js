describe("MD#2", () => {
    beforeEach(() => {
        cy.visit("https://katalon-demo-cura.herokuapp.com/");
    });
 
    it("Scenario 1", () => {
        // Login
        cy.get("[id='btn-make-appointment']").click();
        cy.get("[id='txt-username']").type("John Doe");
        cy.get("[id='txt-password']").type("ThisIsNotAPassword");
        cy.get("[id='btn-login']").click();

        // Make Appointment
        cy.get("[id='combo_facility']").select('Seoul CURA Healthcare Center');
        cy.get("[id='chk_hospotal_readmission']").check('Yes');
        cy.get("[id='radio_program_medicaid']").check('Medicaid');
        cy.get("[id='txt_visit_date']").click();
        cy.get(".day").contains("30").click();
        cy.get('body').click();
        cy.get("[id='txt_comment']").type("CURA Healthcare Service");
        cy.get("[id='btn-book-appointment']").click();

        // Validation
        cy.get("[id='facility']").should('contain', 'Seoul CURA Healthcare Center');
        cy.get("[id='hospital_readmission']").should('contain', 'Yes');
        cy.get("[id='program']").should('contain', 'Medicaid');
        cy.get("[id='visit_date']").should('contain', '30/05/2023');
        cy.get("[id='comment']").should('contain', 'CURA Healthcare Service');
    });

    it("Scenario 2", () => {
        // Login
        cy.get("[id='btn-make-appointment']").click();
        cy.get("[id='txt-username']").type("John Doe");
        cy.get("[id='txt-password']").type("ThisIsNotAPassword");
        cy.get("[id='btn-login']").click();

        // Appointment history and Validation
        cy.get("[id='menu-toggle']").click();
        cy.get("[id='sidebar-wrapper']").should('have.class', 'active');
        cy.get("a").contains("History").click();
        cy.get(".text-center").should('contain', 'No appointment');
    });
});
