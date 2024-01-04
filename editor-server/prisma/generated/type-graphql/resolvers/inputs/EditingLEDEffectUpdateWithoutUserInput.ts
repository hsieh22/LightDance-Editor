import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LEDEffectUpdateOneWithoutEditingNestedInput } from "../inputs/LEDEffectUpdateOneWithoutEditingNestedInput";

@TypeGraphQL.InputType("EditingLEDEffectUpdateWithoutUserInput", {
  isAbstract: true
})
export class EditingLEDEffectUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => LEDEffectUpdateOneWithoutEditingNestedInput, {
    nullable: true
  })
  editingLEDEffect?: LEDEffectUpdateOneWithoutEditingNestedInput | undefined;
}
