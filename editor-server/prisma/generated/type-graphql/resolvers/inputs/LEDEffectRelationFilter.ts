import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LEDEffectWhereInput } from "../inputs/LEDEffectWhereInput";

@TypeGraphQL.InputType("LEDEffectRelationFilter", {
  isAbstract: true
})
export class LEDEffectRelationFilter {
  @TypeGraphQL.Field(_type => LEDEffectWhereInput, {
    nullable: true
  })
  is?: LEDEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => LEDEffectWhereInput, {
    nullable: true
  })
  isNot?: LEDEffectWhereInput | undefined;
}
