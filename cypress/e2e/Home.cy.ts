describe("Home tests", () => {
  //el home tests es el nombre de las pruebas
  beforeEach(() => {
    cy.visit("/");
  }); //recibe una función que se va a ejecutar antes de cada prueba
  it("renders the home title and description", () => {
    cy.get('[data-testid="homepage-title"]').should(
      "contain",
      "Bienvenido al sitio de pruebas"
    ); //Los data test id siempre, siempre van con corchetes y comillas simples

    cy.get('[data-testid="homepage-description"]').should(
      "contain",
      "Esta aplicación contiene varias páginas"
    );
  }); //cada it es una prueba

  it("shows navigation cards with correct links", () => {
    cy.get('[data-testid="nav-cards"] > div').should("have.length", 4);
    // con el > podemos pedir que traiga un elemento de html, solo elementos de html

    cy.get('[data-testid="go-to-movies"]')
      .should("contain", "Ir a Películas")
      .click();
    cy.url().should("include", "/movies");
    cy.go("back");

    //form
    cy.get('[data-testid="go-to-form"]')
      .should("contain", "Ir al Formulario")
      .click();
    cy.url().should("include", "/form");
    cy.go("back");

    //interacciones
    cy.get('[data-testid="go-to-interactions"]')
      .should("contain", "Ir a Interacciones")
      .click();
    cy.url().should("include", "/interactions");
    cy.go("back");

    //404
    cy.get('[data-testid="go-to-not-found"]')
      .should("contain", "Ir a 404")
      .click();
    cy.url().should("include", "/lo-que-sea");
    cy.go("back");
  });
});

//aqui creamos otro set de pruebas
describe("Header navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the header", () => {
    cy.get('[data-testid="header"]').should("exist");
    cy.contains("Cypress Tests"); //asi no se debería hacer, porque va a buscar en todo el dom
  });

  it("should show nav link on desktop", () => {
    cy.viewport("macbook-15");
    cy.get("nav").should("be.visible");

    const navLabels = [
      "Inicio",
      "Películas",
      "Formulario",
      "Interacciones",
      "404",
    ];

    navLabels.forEach((label) => {
      cy.get("nav").contains(label).should("have.attr", "href");
      //se puede mejorar validando el contenido de cada link del href
    });
  });
});
