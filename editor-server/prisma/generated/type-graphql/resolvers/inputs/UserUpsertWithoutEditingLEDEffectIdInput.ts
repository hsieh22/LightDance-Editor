import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutEditingLEDEffectIdInput } from "../inputs/UserCreateWithoutEditingLEDEffectIdInput";
import { UserUpdateWithoutEditingLEDEffectIdInput } from "../inputs/UserUpdateWithoutEditingLEDEffectIdInput";

@TypeGraphQL.InputType("UserUpsertWithoutEditingLEDEffectIdInput", {
  isAbstract: true
})
export class UserUpsertWithoutEditingLEDEffectIdInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutEditingLEDEffectIdInput, {
    nullable: false
  })
  update!: UserUpdateWithoutEditingLEDEffectIdInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutEditingLEDEffectIdInput, {
    nullable: false
  })
  create!: UserCreateWithoutEditingLEDEffectIdInput;
}
