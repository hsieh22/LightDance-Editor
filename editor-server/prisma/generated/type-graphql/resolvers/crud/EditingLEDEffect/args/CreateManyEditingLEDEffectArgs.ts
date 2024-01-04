import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EditingLEDEffectCreateManyInput } from "../../../inputs/EditingLEDEffectCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEditingLEDEffectArgs {
  @TypeGraphQL.Field(_type => [EditingLEDEffectCreateManyInput], {
    nullable: false
  })
  data!: EditingLEDEffectCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
