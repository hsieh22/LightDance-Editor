import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EditingLEDEffectOrderByWithAggregationInput } from "../../../inputs/EditingLEDEffectOrderByWithAggregationInput";
import { EditingLEDEffectScalarWhereWithAggregatesInput } from "../../../inputs/EditingLEDEffectScalarWhereWithAggregatesInput";
import { EditingLEDEffectWhereInput } from "../../../inputs/EditingLEDEffectWhereInput";
import { EditingLEDEffectScalarFieldEnum } from "../../../../enums/EditingLEDEffectScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEditingLEDEffectArgs {
  @TypeGraphQL.Field(_type => EditingLEDEffectWhereInput, {
    nullable: true
  })
  where?: EditingLEDEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EditingLEDEffectOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EditingLEDEffectOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EditingLEDEffectScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "LEDEffectId">;

  @TypeGraphQL.Field(_type => EditingLEDEffectScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EditingLEDEffectScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
