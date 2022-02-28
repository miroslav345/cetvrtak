/// <reference types="cypress" />
describe("login test", () => {
  it("visit gallery page", () => {
    cy.visit("/");
  });

  it("click on the login button", () => {
    cy.visit("/");
    cy.get('a[href="/login"]').click();
    cy.get(".nav-link").eq(1).click();
    cy.get("#email").type("filip.nedovic@vivifyideas.com");
    cy.get("#password").type("Test12345!");
    cy.get("button").click();
  });

  it("logout", () => {
    cy.get(".nav-link").should("have.length", 4);
    cy.get(".nav-link").eq(3).click();
  });
});
