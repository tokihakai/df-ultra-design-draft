import { OmegaformEnvs } from "./omegaform";

export type Envs = OmegaformEnvs<{
  dev: {
    projectId: string;
  };
}>;

export const envs: Envs = {
  dev: {
    name: "dev",
    values: {
      projectId: "dev-project",
    },
  },
};
