import * as TypeGraphQL from "type-graphql";

export enum ColorScalarFieldEnum {
  id = "id",
  color = "color",
  colorCode = "colorCode"
}
TypeGraphQL.registerEnumType(ColorScalarFieldEnum, {
  name: "ColorScalarFieldEnum",
  description: undefined,
});
