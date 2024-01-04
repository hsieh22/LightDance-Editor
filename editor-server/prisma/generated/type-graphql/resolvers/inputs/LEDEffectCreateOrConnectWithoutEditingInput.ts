import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LEDEffectCreateWithoutEditingInput } from "../inputs/LEDEffectCreateWithoutEditingInput";
import { LEDEffectWhereUniqueInput } from "../inputs/LEDEffectWhereUniqueInput";

@TypeGraphQL.InputType("LEDEffectCreateOrConnectWithoutEditingInput", {
  isAbstract: true
})
export class LEDEffectCreateOrConnectWithoutEditingInput {
  @TypeGraphQL.Field(_type => LEDEffectWhereUniqueInput, {
    nullable: false
  })
  where!: LEDEffectWhereUniqueInput;

  @TypeGraphQL.Field(_type => LEDEffectCreateWithoutEditingInput, {
    nullable: false
  })
  create!: LEDEffectCreateWithoutEditingInput;
}
