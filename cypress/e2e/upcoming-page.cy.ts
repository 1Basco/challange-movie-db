describe("Upcoming Page", () => {
  it("passes", () => {
    cy.visit("/upcoming");
    cy.get("h1").contains("Upcoming Movies");
  });
});
