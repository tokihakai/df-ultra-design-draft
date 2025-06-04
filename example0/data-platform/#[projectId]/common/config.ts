import { ModifySqlxAction } from "../../../omegaform";

export const modifySqlxAction: ModifySqlxAction<{
  tenantName: string;
  tenantDatasetName: string;
}> = (action, { allStaticParamsListInDeployment }) => {
  const tenantDatasetTags = allStaticParamsListInDeployment.map(
    ({ tenantName, tenantDatasetName }) => `${tenantName}_${tenantDatasetName}`
  );
  return {
    ...action,
    bigquery: {
      ...action.bigquery,
      tags: [...action.bigquery.tags, ...tenantDatasetTags],
    },
  };
};
