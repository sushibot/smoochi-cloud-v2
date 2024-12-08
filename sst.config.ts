/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "smoochi-cloud-v2", // WARNING: Careful about renaming app, will need to re-deploy everything.
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      aws: { 
        profile: input.stage === "production" ? "spamanilla-prod" : "spamanilla-dev" }
    };
  },
  async run() {
    await import("./infra/storage")
    await import("./infra/api")
  },
});
