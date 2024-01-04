import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EditingLEDEffectCreateInput } from "../../../inputs/EditingLEDEffectCreateInput";
import { EditingLEDEffectUpdateInput } from "../../../inputs/EditingLEDEffectUpdateInput";
import { EditingLEDEffectWhereUniqueInput } from "../../../inputs/EditingLEDEffectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEditingLEDEffectArgs {
  @TypeGraphQL.Field(_type => EditingLEDEffectWhereUniqueInput, {
    nullable: false
  })
  where!: EditingLEDEffectWhereUniqueInput;

  @TypeGraphQL.Field(_type => EditingLEDEffectCreateInput, {
    nullable: false
  })
  create!: EditingLEDEffectCreateInput;

  @TypeGraphQL.Field(_type => EditingLEDEffectUpdateInput, {
    nullable: false
  })
  update!: EditingLEDEffectUpdateInput;
}
