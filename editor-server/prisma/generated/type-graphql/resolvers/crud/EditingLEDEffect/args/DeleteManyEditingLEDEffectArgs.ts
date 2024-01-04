import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EditingLEDEffectWhereInput } from "../../../inputs/EditingLEDEffectWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEditingLEDEffectArgs {
  @TypeGraphQL.Field(_type => EditingLEDEffectWhereInput, {
    nullable: true
  })
  where?: EditingLEDEffectWhereInput | undefined;
}
