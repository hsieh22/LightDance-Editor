import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EditingLEDEffectCreateOrConnectWithoutEditingLEDEffectInput } from "../inputs/EditingLEDEffectCreateOrConnectWithoutEditingLEDEffectInput";
import { EditingLEDEffectCreateWithoutEditingLEDEffectInput } from "../inputs/EditingLEDEffectCreateWithoutEditingLEDEffectInput";
import { EditingLEDEffectWhereUniqueInput } from "../inputs/EditingLEDEffectWhereUniqueInput";

@TypeGraphQL.InputType("EditingLEDEffectCreateNestedOneWithoutEditingLEDEffectInput", {
  isAbstract: true
})
export class EditingLEDEffectCreateNestedOneWithoutEditingLEDEffectInput {
  @TypeGraphQL.Field(_type => EditingLEDEffectCreateWithoutEditingLEDEffectInput, {
    nullable: true
  })
  create?: EditingLEDEffectCreateWithoutEditingLEDEffectInput | undefined;

  @TypeGraphQL.Field(_type => EditingLEDEffectCreateOrConnectWithoutEditingLEDEffectInput, {
    nullable: true
  })
  connectOrCreate?: EditingLEDEffectCreateOrConnectWithoutEditingLEDEffectInput | undefined;

  @TypeGraphQL.Field(_type => EditingLEDEffectWhereUniqueInput, {
    nullable: true
  })
  connect?: EditingLEDEffectWhereUniqueInput | undefined;
}
