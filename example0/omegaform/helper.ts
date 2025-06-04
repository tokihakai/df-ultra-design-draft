export type EmptyObject = {} & Record<PropertyKey, never>;

// TODO: Implement this type
export type JsonObject = Record<string, string>;

// declare const brand: unique symbol;

// export type BrandContainer<Token> = {
//   readonly [brand]: Token;
// };

// export type Brand<Token extends PropertyKey> = BrandContainer<{ [K in Token]: never }>;

// export type Branded<Type, BrandName extends PropertyKey> = Type & Brand<BrandName>;
