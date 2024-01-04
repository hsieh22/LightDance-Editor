import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EditingLEDEffectWhereInput } from "../inputs/EditingLEDEffectWhereInput";

@TypeGraphQL.InputType("EditingLEDEffectRelationFilter", {
  isAbstract: true
})
export class EditingLEDEffectRelationFilter {
  @TypeGraphQL.Field(_type => EditingLEDEffectWhereInput, {
    nullable: true
  })
  is?: EditingLEDEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => EditingLEDEffectWhereInput, {
    nullable: true
  })
  isNot?: EditingLEDEffectWhereInput | undefined;
}
