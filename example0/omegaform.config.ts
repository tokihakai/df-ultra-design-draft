import { OmegaformConfig } from "./omegaform";

// NOTE: NEVER use setups like this in production. This is just for demonstration purposes.
// Such files like local.ts contains potential risk of development environments divergence.
const localConfig = (() => {
  try {
    const { localConfig } = require("./local");
    const valid = ((v: unknown): v is OmegaformConfig =>
      Boolean(
        v &&
          typeof v === "object" &&
          ((v) => v.defaultGcloudProjectId && v.defaultGcloudLocation)(v as Partial<OmegaformConfig>)
      ))(localConfig);
    if (!valid) {
      throw new Error("Invalid local config");
    }
    return localConfig;
  } catch (e) {
    console.log(`No local config found: ${e instanceof Error ? e.message : e}`);
    console.log("Run the following command to create a local config:");
    console.log("cp local.example.ts local.ts");
    console.log("Then, edit the local.ts file to set the correct values");
    throw new Error("No local config found");
  }
})();

export const config: OmegaformConfig = {
  ...localConfig,
};
