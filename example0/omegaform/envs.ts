import { JsonObject } from "./helper";

type EnvsByEnvNamesAndValues<EnvNames extends string, Values extends JsonObject> = Record<
  EnvNames,
  {
    name: EnvNames;
    values: Values;
  }
>;

type EnvsByMap<EnvValuesMap extends Record<string, JsonObject>> = {
  [K in keyof EnvValuesMap]: {
    name: K;
    values: EnvValuesMap[K];
  };
};

export type OmegaformEnvs<T0 extends string | Record<string, JsonObject>, T1 extends JsonObject = never> = [
  T0,
  T1
] extends [infer EnvValuesMap extends Record<string, JsonObject>, never]
  ? EnvsByMap<EnvValuesMap>
  : [T0, T1] extends [infer EnvNames extends string, infer Values extends JsonObject]
  ? EnvsByEnvNamesAndValues<EnvNames, Values>
  : never & "Error: Invalid type arguments";
