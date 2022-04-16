import { ConsoleReporter } from "@serenity-js/console-reporter";
import { configure, ArtifactArchiver } from "@serenity-js/core";
import { SerenityBDDReporter } from "@serenity-js/serenity-bdd";

configure({
  crew: [
    ConsoleReporter.forDarkTerminals(),
    new SerenityBDDReporter(),
    ArtifactArchiver.storingArtifactsAt("./target/site/serenity"),
  ],
});
