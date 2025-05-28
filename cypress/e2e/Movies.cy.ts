describe("Movies Test", () => {
  //el home tests es el nombre de las pruebas
  beforeEach(() => {
    cy.visit("/movies");
  });

  it("renders trending day movies", () => {
    cy.get('[data-testid="trending-movies"]').should("exist");
    cy.get('[data-testid="change-to-week-tab"]').should("be.visible").click();
    cy.get('[data-testid="trending-movies"]').should("exist");
  });

  it("should be able to search and show result", () => {
    cy.get('[data-testid="search-input"]').type("Cars");
    cy.get('[data-testid="search-button"]').click();
    cy.get('[data-testid="search-results"]').should("exist"); //esto o un should have length at least de 1
  });
});
