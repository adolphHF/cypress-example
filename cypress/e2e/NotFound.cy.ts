describe("Not Found Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("renders not found page", () => {
    cy.visit("/inexistente", { failOnStatusCode: false });
    cy.get('[data-testid="notfound-title"]').should(
      "contain",
      "404 - Página no encontrada"
    );
    cy.get('[data-testid="notfound-description"]').should(
      "contain",
      "Lo sentimos, no pudimos encontrar la página que estás buscando."
    );
    cy.get('[data-testid="go-home"]').click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});
