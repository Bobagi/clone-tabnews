require("dotenv").config({ path: ".env.development" });

if (!process.env.POSTGRES_HOST) {
  throw new Error("Environment variable POSTGRES_HOST is not defined");
}

const { exec } = require("node:child_process");

function checkPostgres() {
  exec(
    `docker exec postgres-dev pg_isready --host ${process.env.POSTGRES_HOST}`,
    handleReturn,
  );

  async function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write("🟡");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return checkPostgres();
    }

    console.log("🟢 PostgreSQL is ready!");
  }
}

console.log("🔴 Waiting for PostgreSQL to become available...");
checkPostgres();
