import { OmegaformEnvs } from "../omegaform";

export type Envs = OmegaformEnvs<{
  dev: {
    projectId: string;
    env: string;
  };
}>;
