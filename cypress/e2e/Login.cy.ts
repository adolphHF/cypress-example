describe("Login tests", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("do a dummy login", () => {
    cy.get('[data-testid="email-input"]').type("test@gmail.com");
    cy.get('[data-testid="password-input"]').type("test123");
    cy.get('[data-testid="login-button"]').click();
    cy.get('[data-testid="success-message"]').should("exist"); //check logged in

    cy.get('[data-testid="logout-button"]').click(); //close session

    cy.get('[data-testid="login-button"]').should("exist"); //Check able to log in again
  });
});
