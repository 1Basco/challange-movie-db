describe("Home Page", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get("h1").contains("Popular Movies");
  });
});
