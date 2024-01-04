import * as TypeGraphQL from "type-graphql";

export enum PartScalarFieldEnum {
  id = "id",
  dancerId = "dancerId",
  name = "name",
  type = "type",
  length = "length"
}
TypeGraphQL.registerEnumType(PartScalarFieldEnum, {
  name: "PartScalarFieldEnum",
  description: undefined,
});
