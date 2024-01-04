import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { LEDEffectRelationFilter } from "../inputs/LEDEffectRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("EditingLEDEffectWhereInput", {
  isAbstract: true
})
export class EditingLEDEffectWhereInput {
  @TypeGraphQL.Field(_type => [EditingLEDEffectWhereInput], {
    nullable: true
  })
  AND?: EditingLEDEffectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EditingLEDEffectWhereInput], {
    nullable: true
  })
  OR?: EditingLEDEffectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EditingLEDEffectWhereInput], {
    nullable: true
  })
  NOT?: EditingLEDEffectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  LEDEffectId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LEDEffectRelationFilter, {
    nullable: true
  })
  editingLEDEffect?: LEDEffectRelationFilter | undefined;
}
