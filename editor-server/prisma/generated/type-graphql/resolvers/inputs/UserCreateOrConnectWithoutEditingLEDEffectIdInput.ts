import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutEditingLEDEffectIdInput } from "../inputs/UserCreateWithoutEditingLEDEffectIdInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutEditingLEDEffectIdInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutEditingLEDEffectIdInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutEditingLEDEffectIdInput, {
    nullable: false
  })
  create!: UserCreateWithoutEditingLEDEffectIdInput;
}
