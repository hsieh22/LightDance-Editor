import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EditingLEDEffectCreateOrConnectWithoutUserInput } from "../inputs/EditingLEDEffectCreateOrConnectWithoutUserInput";
import { EditingLEDEffectCreateWithoutUserInput } from "../inputs/EditingLEDEffectCreateWithoutUserInput";
import { EditingLEDEffectWhereUniqueInput } from "../inputs/EditingLEDEffectWhereUniqueInput";

@TypeGraphQL.InputType("EditingLEDEffectCreateNestedOneWithoutUserInput", {
  isAbstract: true
})
export class EditingLEDEffectCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => EditingLEDEffectCreateWithoutUserInput, {
    nullable: true
  })
  create?: EditingLEDEffectCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => EditingLEDEffectCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: EditingLEDEffectCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => EditingLEDEffectWhereUniqueInput, {
    nullable: true
  })
  connect?: EditingLEDEffectWhereUniqueInput | undefined;
}
