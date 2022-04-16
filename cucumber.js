module.exports = {
  default: `--format-options '{"snippetInterface": "synchronous"}' --publish-quiet --require-module 'ts-node/register' --format '@serenity-js/cucumber' --require './step_definitions/*.steps.ts' --require './support/configure_serenity.ts'`,
};
