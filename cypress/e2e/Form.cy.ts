describe("Form tests", () => {
  beforeEach(() => {
    cy.visit("/form");
  });

  it("should complete and send a form", () => {
    //Title
    cy.get('[data-testid="input-movie-title"]').type("Cars 3");

    // Release date
    const date = "2017-06-28";
    cy.get('[data-testid="input-movie-release-date"]')
      .should("exist")
      .type(date);

    //Genre
    cy.get('[data-testid="genre-select"]').click();
    cy.get('[data-testid="genre-option-comedia"]').click();

    //Overview
    cy.get('[data-testid="input-movie-overview"]').type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Fusce at ligula nunc. Integer et ipsum in sem laoreet blandit eu a mauris."
    );

    //Send
    cy.get('[data-testid="submit-button"]').click();

    //check result
    cy.get('[data-testid="success-message"]').should("exist");
  });

  it("should show error if only title is filled", () => {
    cy.get('[data-testid="input-movie-title"]').type("Cars 3");
    cy.get('[data-testid="submit-button"]').click();

    cy.get('[data-testid="form-error"]').should("exist");
  });
});
