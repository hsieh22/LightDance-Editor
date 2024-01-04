import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EditingLEDEffectUpdateInput } from "../../../inputs/EditingLEDEffectUpdateInput";
import { EditingLEDEffectWhereUniqueInput } from "../../../inputs/EditingLEDEffectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEditingLEDEffectArgs {
  @TypeGraphQL.Field(_type => EditingLEDEffectUpdateInput, {
    nullable: false
  })
  data!: EditingLEDEffectUpdateInput;

  @TypeGraphQL.Field(_type => EditingLEDEffectWhereUniqueInput, {
    nullable: false
  })
  where!: EditingLEDEffectWhereUniqueInput;
}
