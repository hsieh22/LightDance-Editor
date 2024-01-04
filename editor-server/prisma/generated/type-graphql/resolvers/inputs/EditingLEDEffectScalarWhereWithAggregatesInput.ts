import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("EditingLEDEffectScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class EditingLEDEffectScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EditingLEDEffectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EditingLEDEffectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EditingLEDEffectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EditingLEDEffectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EditingLEDEffectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EditingLEDEffectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  LEDEffectId?: IntNullableWithAggregatesFilter | undefined;
}
