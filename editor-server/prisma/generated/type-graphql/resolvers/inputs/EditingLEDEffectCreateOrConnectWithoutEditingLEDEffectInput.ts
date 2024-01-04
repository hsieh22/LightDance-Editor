import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EditingLEDEffectCreateWithoutEditingLEDEffectInput } from "../inputs/EditingLEDEffectCreateWithoutEditingLEDEffectInput";
import { EditingLEDEffectWhereUniqueInput } from "../inputs/EditingLEDEffectWhereUniqueInput";

@TypeGraphQL.InputType("EditingLEDEffectCreateOrConnectWithoutEditingLEDEffectInput", {
  isAbstract: true
})
export class EditingLEDEffectCreateOrConnectWithoutEditingLEDEffectInput {
  @TypeGraphQL.Field(_type => EditingLEDEffectWhereUniqueInput, {
    nullable: false
  })
  where!: EditingLEDEffectWhereUniqueInput;

  @TypeGraphQL.Field(_type => EditingLEDEffectCreateWithoutEditingLEDEffectInput, {
    nullable: false
  })
  create!: EditingLEDEffectCreateWithoutEditingLEDEffectInput;
}
