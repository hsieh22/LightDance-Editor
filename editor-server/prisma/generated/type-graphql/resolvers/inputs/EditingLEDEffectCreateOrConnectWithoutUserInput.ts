import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EditingLEDEffectCreateWithoutUserInput } from "../inputs/EditingLEDEffectCreateWithoutUserInput";
import { EditingLEDEffectWhereUniqueInput } from "../inputs/EditingLEDEffectWhereUniqueInput";

@TypeGraphQL.InputType("EditingLEDEffectCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class EditingLEDEffectCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => EditingLEDEffectWhereUniqueInput, {
    nullable: false
  })
  where!: EditingLEDEffectWhereUniqueInput;

  @TypeGraphQL.Field(_type => EditingLEDEffectCreateWithoutUserInput, {
    nullable: false
  })
  create!: EditingLEDEffectCreateWithoutUserInput;
}
