import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LEDEffectCreateNestedOneWithoutEditingInput } from "../inputs/LEDEffectCreateNestedOneWithoutEditingInput";

@TypeGraphQL.InputType("EditingLEDEffectCreateWithoutUserInput", {
  isAbstract: true
})
export class EditingLEDEffectCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => LEDEffectCreateNestedOneWithoutEditingInput, {
    nullable: true
  })
  editingLEDEffect?: LEDEffectCreateNestedOneWithoutEditingInput | undefined;
}
