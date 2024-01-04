import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LEDEffectCreateOrConnectWithoutEditingInput } from "../inputs/LEDEffectCreateOrConnectWithoutEditingInput";
import { LEDEffectCreateWithoutEditingInput } from "../inputs/LEDEffectCreateWithoutEditingInput";
import { LEDEffectWhereUniqueInput } from "../inputs/LEDEffectWhereUniqueInput";

@TypeGraphQL.InputType("LEDEffectCreateNestedOneWithoutEditingInput", {
  isAbstract: true
})
export class LEDEffectCreateNestedOneWithoutEditingInput {
  @TypeGraphQL.Field(_type => LEDEffectCreateWithoutEditingInput, {
    nullable: true
  })
  create?: LEDEffectCreateWithoutEditingInput | undefined;

  @TypeGraphQL.Field(_type => LEDEffectCreateOrConnectWithoutEditingInput, {
    nullable: true
  })
  connectOrCreate?: LEDEffectCreateOrConnectWithoutEditingInput | undefined;

  @TypeGraphQL.Field(_type => LEDEffectWhereUniqueInput, {
    nullable: true
  })
  connect?: LEDEffectWhereUniqueInput | undefined;
}
