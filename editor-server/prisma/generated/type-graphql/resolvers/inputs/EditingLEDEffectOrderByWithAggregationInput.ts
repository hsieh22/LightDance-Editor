import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EditingLEDEffectAvgOrderByAggregateInput } from "../inputs/EditingLEDEffectAvgOrderByAggregateInput";
import { EditingLEDEffectCountOrderByAggregateInput } from "../inputs/EditingLEDEffectCountOrderByAggregateInput";
import { EditingLEDEffectMaxOrderByAggregateInput } from "../inputs/EditingLEDEffectMaxOrderByAggregateInput";
import { EditingLEDEffectMinOrderByAggregateInput } from "../inputs/EditingLEDEffectMinOrderByAggregateInput";
import { EditingLEDEffectSumOrderByAggregateInput } from "../inputs/EditingLEDEffectSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EditingLEDEffectOrderByWithAggregationInput", {
  isAbstract: true
})
export class EditingLEDEffectOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  LEDEffectId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EditingLEDEffectCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EditingLEDEffectCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EditingLEDEffectAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EditingLEDEffectAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EditingLEDEffectMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EditingLEDEffectMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EditingLEDEffectMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EditingLEDEffectMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EditingLEDEffectSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EditingLEDEffectSumOrderByAggregateInput | undefined;
}
