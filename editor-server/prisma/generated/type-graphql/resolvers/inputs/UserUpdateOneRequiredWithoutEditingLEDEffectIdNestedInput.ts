import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutEditingLEDEffectIdInput } from "../inputs/UserCreateOrConnectWithoutEditingLEDEffectIdInput";
import { UserCreateWithoutEditingLEDEffectIdInput } from "../inputs/UserCreateWithoutEditingLEDEffectIdInput";
import { UserUpdateWithoutEditingLEDEffectIdInput } from "../inputs/UserUpdateWithoutEditingLEDEffectIdInput";
import { UserUpsertWithoutEditingLEDEffectIdInput } from "../inputs/UserUpsertWithoutEditingLEDEffectIdInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutEditingLEDEffectIdNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutEditingLEDEffectIdNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutEditingLEDEffectIdInput, {
    nullable: true
  })
  create?: UserCreateWithoutEditingLEDEffectIdInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutEditingLEDEffectIdInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutEditingLEDEffectIdInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutEditingLEDEffectIdInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutEditingLEDEffectIdInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutEditingLEDEffectIdInput, {
    nullable: true
  })
  update?: UserUpdateWithoutEditingLEDEffectIdInput | undefined;
}
