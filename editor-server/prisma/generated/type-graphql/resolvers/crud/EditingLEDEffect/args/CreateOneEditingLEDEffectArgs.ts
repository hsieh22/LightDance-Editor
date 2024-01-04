import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EditingLEDEffectCreateInput } from "../../../inputs/EditingLEDEffectCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEditingLEDEffectArgs {
  @TypeGraphQL.Field(_type => EditingLEDEffectCreateInput, {
    nullable: false
  })
  data!: EditingLEDEffectCreateInput;
}
