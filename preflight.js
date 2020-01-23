const seedZipCodes = require("./build/server/server/seeds/seed-zip-codes")
  .seedZipCodes;
const runMigrations = require("./build/server/migrations").runMigrations;
const createTablesIfNecessary = require("./build/server/server/models")
  .createTablesIfNecessary;

module.exports.handler = async function(event, context) {
  console.log("Beginning preflight...");

  await createTablesIfNecessary();
  await runMigrations();
  await seedZipCodes();

  console.log("All done...");

  return Promise.resolve();
};