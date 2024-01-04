import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LEDEffectUpdateOneWithoutEditingNestedInput } from "../inputs/LEDEffectUpdateOneWithoutEditingNestedInput";
import { UserUpdateOneRequiredWithoutEditingLEDEffectIdNestedInput } from "../inputs/UserUpdateOneRequiredWithoutEditingLEDEffectIdNestedInput";

@TypeGraphQL.InputType("EditingLEDEffectUpdateInput", {
  isAbstract: true
})
export class EditingLEDEffectUpdateInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutEditingLEDEffectIdNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutEditingLEDEffectIdNestedInput | undefined;

  @TypeGraphQL.Field(_type => LEDEffectUpdateOneWithoutEditingNestedInput, {
    nullable: true
  })
  editingLEDEffect?: LEDEffectUpdateOneWithoutEditingNestedInput | undefined;
}
