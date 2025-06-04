import { EmptyObject } from "./helper";

export type * from "./envs";
export type { OmegaformEnvs } from "./envs";

export type OmegaformConfig = {
  defaultGcloudProjectId: string;
  defaultGcloudLocation: string;
};

export type SqlxAction = {
  bigquery: {
    tags: string[];
  };
  dataset: string;
};

export interface IStaticParams extends Record<string, string | undefined> {}

export type ModifySqlxAction<T extends IStaticParams = EmptyObject> = (
  action: SqlxAction,
  context: {
    staticParams: T;
    allStaticParamsListInDeployment: IStaticParams[];
  }
) => SqlxAction;
