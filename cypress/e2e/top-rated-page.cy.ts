describe("Top Rated Page", () => {
  it("passes", () => {
    cy.visit("/top-rated");
    cy.get("h1").contains("Top Rated Movies");
  });
});
