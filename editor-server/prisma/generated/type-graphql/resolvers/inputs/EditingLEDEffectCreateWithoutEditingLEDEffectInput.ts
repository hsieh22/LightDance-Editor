import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutEditingLEDEffectIdInput } from "../inputs/UserCreateNestedOneWithoutEditingLEDEffectIdInput";

@TypeGraphQL.InputType("EditingLEDEffectCreateWithoutEditingLEDEffectInput", {
  isAbstract: true
})
export class EditingLEDEffectCreateWithoutEditingLEDEffectInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutEditingLEDEffectIdInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutEditingLEDEffectIdInput;
}
