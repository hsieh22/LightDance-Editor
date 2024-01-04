import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EditingLEDEffectWhereUniqueInput } from "../../../inputs/EditingLEDEffectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEditingLEDEffectOrThrowArgs {
  @TypeGraphQL.Field(_type => EditingLEDEffectWhereUniqueInput, {
    nullable: false
  })
  where!: EditingLEDEffectWhereUniqueInput;
}
