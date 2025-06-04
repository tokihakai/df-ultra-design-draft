import { ModifySqlxAction } from "../omegaform";
import { envs } from "../omegaform.envs";

export const getStaticParams = (envName: keyof typeof envs) => {
  const { projectId } = envs[envName].values;
  return [
    {
      projectId,
      env: envName,
    },
  ];
};

export const modifySqlxAction: ModifySqlxAction<{ env: string }> = (action, { staticParams: { env } }) => {
  return {
    ...action,
    bigquery: {
      ...action.bigquery,
      tags: [...action.bigquery.tags, `env:${env}`],
    },
    dataset: `example0_${action.dataset}_${env}`,
  };
};
