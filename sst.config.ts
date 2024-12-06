/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "smoochi-cloud-v2",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      aws: { 
        profile: input.stage === "production" ? "spamanilla-prod" : "spamanilla-dev" }
    };
  },
  async run() {
    const bucket = new sst.aws.Bucket("smoochi-bucket", {
      access: "public"
    })
    
    
  },
});
