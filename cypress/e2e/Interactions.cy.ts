describe("Interactions Tests", () => {
  beforeEach(() => {
    cy.visit("/interactions");
  });

  it("test the 6 interactions", () => {
    //Counter
    cy.get('[data-testid="boton-incrementar"]').click();
    cy.get('[data-testid="contador-valor"]').should("contain", 1); //TODO is there a better form to check increase?

    //show/hide
    cy.get('[data-testid="texto-visible"]').should("not.exist");
    cy.get('[data-testid="boton-toggle-texto"]').click();
    cy.get('[data-testid="texto-visible"]').should("be.visible");

    //mark task as completed
    cy.get('[data-testid="boton-completar-tarea"]').click();
    cy.get('[data-testid="tarea"] p').should("have.class", "line-through");
    cy.get('[data-testid="boton-completar-tarea"]').should(
      "contain.text",
      "Marcar como pendiente"
    );

    cy.get('[data-testid="boton-completar-tarea"]').click(); //return to pending
    cy.get('[data-testid="tarea"] p').should("not.have.class", "line-through");
    cy.get('[data-testid="boton-completar-tarea"]').should(
      "contain.text",
      "Marcar como completada"
    );

    //Text Input
    const testText = "Hola, esto es una prueba";
    cy.get('[data-testid="input-texto"]').type(`${testText}`);
    cy.get('[data-testid="texto-escrito"]').should("contain", `${testText}`);

    //Double Click
    cy.get('[data-testid="boton-doble-click"]').dblclick();
    cy.get('[data-testid="doble-click-confirmado"]').should("exist");

    //Switch
    cy.get('[data-testid="switch-modo"]').click();
    cy.get('[data-testid="estado-switch"]').should("have.text", "Activado");

    cy.get('[data-testid="switch-modo"]').click(); // deactivate
    cy.get('[data-testid="estado-switch"]').should("have.text", "Desactivado");
  });
});
