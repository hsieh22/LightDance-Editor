import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LEDEffectCreateWithoutEditingInput } from "../inputs/LEDEffectCreateWithoutEditingInput";
import { LEDEffectUpdateWithoutEditingInput } from "../inputs/LEDEffectUpdateWithoutEditingInput";

@TypeGraphQL.InputType("LEDEffectUpsertWithoutEditingInput", {
  isAbstract: true
})
export class LEDEffectUpsertWithoutEditingInput {
  @TypeGraphQL.Field(_type => LEDEffectUpdateWithoutEditingInput, {
    nullable: false
  })
  update!: LEDEffectUpdateWithoutEditingInput;

  @TypeGraphQL.Field(_type => LEDEffectCreateWithoutEditingInput, {
    nullable: false
  })
  create!: LEDEffectCreateWithoutEditingInput;
}
