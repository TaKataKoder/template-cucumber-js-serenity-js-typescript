import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";

Given("today is Sunday", function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("Today is Sunday");
  assert.equal(true, true);
});

When("I ask whether it's Friday yet", function () {
  console.log("When i ask");
});

Then('I should be told "Nope"', function () {
  console.log("Then");
});
