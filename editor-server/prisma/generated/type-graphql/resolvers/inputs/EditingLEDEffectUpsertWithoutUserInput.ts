import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EditingLEDEffectCreateWithoutUserInput } from "../inputs/EditingLEDEffectCreateWithoutUserInput";
import { EditingLEDEffectUpdateWithoutUserInput } from "../inputs/EditingLEDEffectUpdateWithoutUserInput";

@TypeGraphQL.InputType("EditingLEDEffectUpsertWithoutUserInput", {
  isAbstract: true
})
export class EditingLEDEffectUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => EditingLEDEffectUpdateWithoutUserInput, {
    nullable: false
  })
  update!: EditingLEDEffectUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => EditingLEDEffectCreateWithoutUserInput, {
    nullable: false
  })
  create!: EditingLEDEffectCreateWithoutUserInput;
}
