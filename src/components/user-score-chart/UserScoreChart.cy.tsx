import React from "react";
import UserScoreChart from "./index";
import { mount } from "cypress/react18";

describe("<UserScoreChart />", () => {
  it("renders", () => {
    cy.mount(<UserScoreChart score={0} />);
  });
});

describe("UserScoreChart Component", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<UserScoreChart score={0} />);
  });
  it("renders NR for score 0", () => {
    mount(<UserScoreChart score={0} />);

    cy.get(".inline-flex").contains("NR").should("be.visible");
  });

  it("renders the correct score and percentage for non-zero scores", () => {
    const score = 75;
    mount(<UserScoreChart score={score} />);

    cy.get(".inline-flex").contains(Math.floor(score)).should("be.visible");
    cy.get(".inline-flex").contains("%").should("be.visible");
  });

  it("applies the correct color class based on the score", () => {
    const redScore = 40;
    mount(<UserScoreChart score={redScore} />);

    cy.get(".score-color")
      .should("not.have.class", "bg-gray-300")
      .should("not.have.class", "text-green-500")
      .should("not.have.class", "text-yellow-500")
      .should("have.class", "text-red-500");

    const yellowScore = 60;
    mount(<UserScoreChart score={yellowScore} />);

    // Get the UserScoreChart container element and check for the correct color class
    cy.get(".score-color")
      .should("not.have.class", "bg-gray-300")
      .should("not.have.class", "text-green-500")
      .should("have.class", "text-yellow-500")
      .should("not.have.class", "text-red-500");

    const greenScore = 80;
    mount(<UserScoreChart score={greenScore} />);

    // Get the UserScoreChart container element and check for the correct color class
    cy.get(".score-color")
      .should("not.have.class", "bg-gray-300")
      .should("have.class", "text-green-500")
      .should("not.have.class", "text-yellow-500")
      .should("not.have.class", "text-red-500");
  });
});
