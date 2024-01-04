import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EditingLEDEffectCreateWithoutEditingLEDEffectInput } from "../inputs/EditingLEDEffectCreateWithoutEditingLEDEffectInput";
import { EditingLEDEffectUpdateWithoutEditingLEDEffectInput } from "../inputs/EditingLEDEffectUpdateWithoutEditingLEDEffectInput";

@TypeGraphQL.InputType("EditingLEDEffectUpsertWithoutEditingLEDEffectInput", {
  isAbstract: true
})
export class EditingLEDEffectUpsertWithoutEditingLEDEffectInput {
  @TypeGraphQL.Field(_type => EditingLEDEffectUpdateWithoutEditingLEDEffectInput, {
    nullable: false
  })
  update!: EditingLEDEffectUpdateWithoutEditingLEDEffectInput;

  @TypeGraphQL.Field(_type => EditingLEDEffectCreateWithoutEditingLEDEffectInput, {
    nullable: false
  })
  create!: EditingLEDEffectCreateWithoutEditingLEDEffectInput;
}
