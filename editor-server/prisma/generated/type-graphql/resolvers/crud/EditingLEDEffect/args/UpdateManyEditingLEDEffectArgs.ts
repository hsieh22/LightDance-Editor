import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EditingLEDEffectUpdateManyMutationInput } from "../../../inputs/EditingLEDEffectUpdateManyMutationInput";
import { EditingLEDEffectWhereInput } from "../../../inputs/EditingLEDEffectWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEditingLEDEffectArgs {
  @TypeGraphQL.Field(_type => EditingLEDEffectUpdateManyMutationInput, {
    nullable: false
  })
  data!: EditingLEDEffectUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EditingLEDEffectWhereInput, {
    nullable: true
  })
  where?: EditingLEDEffectWhereInput | undefined;
}
